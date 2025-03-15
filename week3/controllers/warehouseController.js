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
    console.log("Searching for product:", productId);

    const product = await Product.findOne({ id: productId });

    if (!product) {
      console.error("Product not found:", productId);
      return res.status(404).json({ error: "Product not found" });
    }

    console.log("Found product:", product);

    const warehouse = await Warehouse.findOne({ warehouseId });

    if (!warehouse) {
      console.error("Warehouse not found:", warehouseId);
      return res.status(404).json({ error: "Warehouse not found" });
    }

    console.log("Found warehouse:", warehouse);

    if (!warehouse.products.includes(product._id)) {
      console.error("Product not found in this warehouse:", productId);
      return res
        .status(404)
        .json({ error: "Product not found in this warehouse" });
    }

    product.quantity = quantity;
    await product.save();

    console.log("Updated product quantity:", product);

    res.json({ message: "Stock updated successfully", product });
  } catch (error) {
    console.error("Error updating stock:", error);
    res.status(500).json({ error: "Server error while updating stock" });
  }
};

module.exports = { getAllWarehouses, updateProductQuantity };
