const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    title: { 
        type: String, 
        required: [true, 'Please add a book title'] 
    },
    author: { 
        type: String, 
        required: [true, 'Please add an author name'] 
    },
    price: { 
        type: Number, 
        required: [true, 'Please add a price'] 
    },
    imageUrl: { 
        type: String, 
        default: "https://via.placeholder.com/150" 
    } 
}, { 
    timestamps: true 
});

module.exports = mongoose.model('Book', bookSchema);