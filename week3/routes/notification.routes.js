const express = require("express");
const router = express.Router();
const {
  getLowStockProducts,
  getNotification,
} = require("../controllers/Notification.controller.js");

router.get("/products", getLowStockProducts);
router.get("/notifications/reorders", getNotification);

module.exports = router;
