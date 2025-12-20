import express from "express";
import dotenv from "dotenv";
import path from "path";
import { connectDB } from "./config/db.js";
import Routes from "./routes/Routes.js";

dotenv.config();

const app = express();

app.use(express.json()); // Middleware to parse JSON bodies
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use("/api/products", Routes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("/*splat", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
