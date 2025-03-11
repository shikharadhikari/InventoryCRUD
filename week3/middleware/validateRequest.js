const validateQuantity = (req, res, next) => {
  const { quantity } = req.body;

  if (quantity == null || typeof quantity !== "number" || quantity < 0) {
    return res.status(400).json({ error: "Invalid quantity value" });
  }

  next();
};

module.exports = validateQuantity;
