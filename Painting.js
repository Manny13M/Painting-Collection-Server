const mongoose = require('mongoose');

const paintingSchema = new mongoose.Schema({
    title: String,
    desc: String,
    painter: String,
    year: Number,
    culturalOrigin: String,
    comments: String
});

const Painting = mongoose.model('paintings', paintingSchema);

module.exports = Painting;