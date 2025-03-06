const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    category: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    supplier: { type: String, required: true },
    description: { type: String, required: true }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
