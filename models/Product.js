const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    name: String,
    price: Number,
    stock: Number,
    img: String,
});

const Product = model('Product', productSchema);

module.exports = Product;
