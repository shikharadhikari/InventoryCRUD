const Product = require("../models/Product.js");
const Warehouse = require("../models/Warehouse.js");


const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findOne({ id: req.params.id });
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const createProduct = async (req, res) => {
  try {
    const {
      id,
      name,
      category,
      quantity,
      price,
      supplier,
      description,
      warehouseId,
    } = req.body;

    console.log("Received request to create product:", req.body);

    if (
      !id ||
      !name ||
      !category ||
      quantity === undefined ||
      price === undefined ||
      !supplier ||
      !description ||
      !warehouseId
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const warehouse = await Warehouse.findOne({ warehouseId });
    if (!warehouse) {
      console.error("Warehouse not found:", warehouseId);
      return res.status(404).json({ error: "Warehouse not found" });
    }


    const existingProduct = await Product.findOne({ id });
    if (existingProduct) {
      console.error("Product already exists:", id);
      return res
        .status(409)
        .json({ error: "Product with this ID already exists" });
    }
    const newProduct = await Product.create({
      id,
      name,
      category,
      quantity,
      price,
      supplier,
      description,
      warehouseId: warehouse._id,
    });

    console.log("Created product:", newProduct);

    warehouse.products.push(newProduct._id);
    await warehouse.save();

    console.log("Updated warehouse:", warehouse);

    res.status(201).json(newProduct);
  } catch (err) {
    console.error("Error creating product:", err);
    res
      .status(500)
      .json({ error: "Internal Server Error", details: err.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const product = await Product.findOne({ id: req.params.id });
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    Object.assign(product, req.body);
    await product.save();
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to update product" });
  }
};

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
