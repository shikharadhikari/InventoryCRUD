const express = require("express");
const router = express.Router();
const {
  getLowStockProducts,
  getNotification,
} = require("../controllers/NotificationController.js");

router.get("/products", getLowStockProducts);

router.get("/notifications/reorders", getNotification);

module.exports = router;
