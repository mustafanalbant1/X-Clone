import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import connectMongoDB from "./db/connectMongoDB.js";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = process.env.PORT || 4003;

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
  connectMongoDB();
});
