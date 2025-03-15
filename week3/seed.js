const mongoose = require("mongoose");
const dotenv = require("dotenv");

const Product = require("./models/Product");
const Warehouse = require("./models/Warehouse");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected for seeding"))
  .catch((err) => console.error("MongoDB connection error:", err));

const seedData = async () => {
  try {
    await Product.deleteMany({});
    await Warehouse.deleteMany({});

    const warehouse1 = await Warehouse.create({
      warehouseId: "wh1",
      name: "Main Warehouse",
      products: [],
    });

    const warehouse2 = await Warehouse.create({
      warehouseId: "wh2",
      name: "Backup Warehouse",
      products: [],
    });

    const product1 = await Product.create({
      id: "prod101",
      name: "Wireless Mouse",
      category: "Electronics",
      quantity: 150,
      price: 29.99,
      supplier: "Tech Supplies Inc.",
      description: "Ergonomic wireless mouse with USB receiver.",
      warehouseId: warehouse1._id,
    });

    const product2 = await Product.create({
      id: "prod102",
      name: "Mechanical Keyboard",
      category: "Electronics",
      quantity: 80,
      price: 89.99,
      supplier: "Keyboards Ltd.",
      description: "RGB mechanical keyboard with blue switches.",
      warehouseId: warehouse2._id,
    });

    warehouse1.products.push(product1._id);
    warehouse2.products.push(product2._id);

    await warehouse1.save();
    await warehouse2.save();

    console.log("Dummy data inserted successfully!");
  } catch (error) {
    console.error("Error inserting dummy data:", error);
  } finally {
    mongoose.connection.close();
  }
};

seedData();
