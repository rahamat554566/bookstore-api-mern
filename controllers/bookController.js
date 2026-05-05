const asyncHandler = require('express-async-handler');
const Book = require('../models/Book');

// @desc    Get all books
// @route   GET /api/books
exports.getBooks = asyncHandler(async (req, res) => {
    const books = await Book.find().sort({ createdAt: -1 });
    res.status(200).json(books);
});

// @desc    Add a book
// @route   POST /api/books
exports.addBook = asyncHandler(async (req, res) => {
    // Basic validation
    if (!req.body.title || !req.body.author) {
        res.status(400);
        throw new Error('Please add a title and author');
    }

    const newBook = await Book.create(req.body);
    res.status(201).json(newBook);
});

// @desc    Update a book
// @route   PUT /api/books/:id
exports.updateBook = asyncHandler(async (req, res) => {
    const book = await Book.findById(req.params.id);

    if (!book) {
        res.status(404);
        throw new Error('Book not found');
    }

    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    res.status(200).json(updatedBook);
});

// @desc    Delete a book
// @route   DELETE /api/books/:id
exports.deleteBook = asyncHandler(async (req, res) => {
    const book = await Book.findById(req.params.id);

    if (!book) {
        res.status(404);
        throw new Error('Book not found');
    }

    await book.deleteOne();
    res.status(200).json({ id: req.params.id, message: "Book removed" });
});