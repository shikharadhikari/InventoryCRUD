const Product = require("../models/Product.js");

// GET /products - Retrieve all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// GET /products/:id - Retrieve a product by ID
const getProductById = async (req, res) => {
  try {
    const product = await Product.findOne({ id: req.params.id });
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// POST /products - Create a new product
const createProduct = async (req, res) => {
  try {
    const { id, name, category, quantity, price, supplier, description } =
      req.body;

    // Validation
    if (
      !id ||
      !name ||
      !category ||
      quantity === undefined ||
      price === undefined ||
      !supplier ||
      !description
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Check if product already exists
    const existingProduct = await Product.findOne({ id });
    if (existingProduct) {
      return res
        .status(409)
        .json({ error: "Product with this ID already exists" });
    }

    const newProduct = new Product({
      id,
      name,
      category,
      quantity,
      price,
      supplier,
      description,
    });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// PUT /products/:id - Update an existing product
const updateProduct = async (req, res) => {
  try {
    const product = await Product.findOne({ id: req.params.id });
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Update the product
    Object.assign(product, req.body);
    await product.save();
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to update product" });
  }
};

// DELETE /products/:id - Remove a product
const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findOneAndDelete({
      id: req.params.id,
    });
    if (!deletedProduct)
      return res.status(404).json({ error: "Product not found" });
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
