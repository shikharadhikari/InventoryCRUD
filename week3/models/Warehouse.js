const mongoose = require('mongoose');
const Product = require('./Product.js');

const warehouseSchema = new mongoose.Schema({
  warehouseId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
});


const Warehouse = mongoose.model('Warehouse', warehouseSchema);

module.exports = Warehouse;