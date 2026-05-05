const express = require('express');
const router = express.Router();
const { 
    getBooks, 
    addBook, 
    updateBook, 
    deleteBook 
} = require('../controllers/bookController');

// Handles GET /api/books and POST /api/books
router.route('/')
    .get(getBooks)
    .post(addBook);

// Handles PUT /api/books/:id and DELETE /api/books/:id
router.route('/:id')
    .put(updateBook)
    .delete(deleteBook);

module.exports = router;