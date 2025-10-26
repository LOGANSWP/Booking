import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";

if (!process.env.MONGODB_CONNECTION_STRING) {
  console.error("❌ Missing MONGODB_CONNECTION_STRING in .env");
  process.exit(1);
}
mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING!)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.listen(7001, () => {
  console.log("Server running on localhost:7001");
});
