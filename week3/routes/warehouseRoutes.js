const express = require("express");
const {
  getAllWarehouses,
  updateProductQuantity,
} = require("../controllers/warehouseController");
const validateQuantity = require("../middleware/validateRequest");

const router = express.Router();

router.get("/", getAllWarehouses);
router.put(
  "/:warehouseId/products/:productId",
  validateQuantity,
  updateProductQuantity
);


module.exports = router;
