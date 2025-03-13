const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const warehouseRoutes = require("./routes/warehouseRoutes");
const notificationRoute = require("./routes/notification.routes");
const productRoutes = require("./routes/productRoutes");


dotenv.config();

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/warehouses", warehouseRoutes.default || warehouseRoutes);
app.use("/api/v1", notificationRoute);
app.use("/", productRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
