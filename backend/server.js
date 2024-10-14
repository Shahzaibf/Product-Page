import express from "express";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());

app.use("/api/products", productRoutes);

app.listen(5001, () => {
  connectDB();
  console.log("Server started at https://localhost:" + PORT);
});
