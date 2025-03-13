const Product = require("../models/Product.js");
const ReorderNotification = require("../models/ReorderNotification.js");

// Fetching all products or only low stock products
const getLowStockProducts = async (req, res) => {
  const { lowStock } = req.query; // /products?lowStock=true
  const reorderLevel = 3;

  try {
    let filteredProducts;

    if (lowStock === "true") {
      filteredProducts = await Product.find({
        quantity: { $lt: reorderLevel },
      });

      // For each low stock product we can create Reorder notification
      for (const product of filteredProducts) {
        const exists = await ReorderNotification.findOne({
          productId: product._id,
        });
        if (!exists) {
          await ReorderNotification.create({
            productId: product._id,
            productName: product.name,
            quantity: product.quantity,
          });
        }
      }
    } else {
      filteredProducts = await Product.find();
    }

    res.status(200).json({
      message:
        lowStock === "true"
          ? "Low stock products retrieved"
          : "All products retrieved",
      data: filteredProducts,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

const getNotification = async (req, res) => {
  try {
    const notifications = await ReorderNotification.find();
    res
      .status(200)
      .json({ message: "Here are the reorder products", data: notifications });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

module.exports = { getLowStockProducts, getNotification };
