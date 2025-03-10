const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: { type: String, required: true },
    img: { type: String, required: true },
    summary: { type: String, required: true }
});

module.exports = mongoose.model('Book', bookSchema);