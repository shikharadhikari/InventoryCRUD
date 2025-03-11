const Warehouse = require("../models/Warehouse");
const Product = require("../models/Product");
const mongoose = require("mongoose");

const getAllWarehouses = async (req, res) => {
  try {
    const warehouses = await Warehouse.find().populate("products");
    res.json(warehouses);
  } catch (error) {
    console.error("Error fetching warehouses:", error);
    res.status(500).json({ error: "Server error while fetching warehouses" });
  }
};

const updateProductQuantity = async (req, res) => {
  const { warehouseId, productId } = req.params;
  const { quantity } = req.body;

  try {
    const warehouse = await Warehouse.findById(warehouseId);
    if (!warehouse) {
      return res.status(404).json({ error: "Warehouse not found" });
    }

    if (!warehouse.products.includes(new mongoose.Types.ObjectId(productId))) {
      return res
        .status(404)
        .json({ error: "Product not found in this warehouse" });
    }

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    product.quantity = quantity;
    await product.save();

    res.json({ message: "Stock updated successfully", product });
  } catch (error) {
    console.error("Error updating stock:", error);
    res.status(500).json({ error: "Server error while updating stock" });
  }
};

module.exports = { getAllWarehouses, updateProductQuantity };
