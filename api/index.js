import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import Message from "../models/message.js"; // Adjusted path for models

dotenv.config();

const app = express();

// Update CORS to allow requests from your Vercel domain
app.use(cors({ origin: "https://npo-project.vercel.app", credentials: true }));
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Example Route
app.get("/api/index", (req, res) => {
  res.send("API is running on /api/index");
});

// Route to handle GET requests for /api/v1/message
app.get("/api/v1/message", (req, res) => {
  res.status(405).json({ message: "Method not allowed." });
});

// Route to handle contact form submissions (POST only)
app.post("/api/v1/message/send", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Validate input
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Save the message to MongoDB
    const newMessage = new Message({ name, email, phone, message });
    await newMessage.save();

    res.status(201).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error saving message:", error);
    res.status(500).json({ message: "Failed to send message." });
  }
});

// Export the app as a serverless function
export default app;
