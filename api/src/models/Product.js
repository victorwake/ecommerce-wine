const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    category: String,
    price: Number,
    imgUrl: String,
    imgUrlArray: [String],
}, {
    timestamps: true,
    versionKey: false,
});

module.exports = mongoose.model('product', productSchema);