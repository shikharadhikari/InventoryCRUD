const mongoose = require("mongoose");

const reorderNotificationSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  productName: { type: String, required: true },
  quantity: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

const ReorderNotification = mongoose.model(
  "ReorderNotification",
  reorderNotificationSchema
);

module.exports = ReorderNotification;
