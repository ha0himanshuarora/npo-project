import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Message from "../../models/message"; // Adjust path based on your project structure

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({ origin: "https://npo-project.vercel.app", credentials: true }));

// MongoDB Connection Handling (for serverless)
let isConnected;
const connectToDatabase = async () => {
  if (isConnected) {
    return;
  }
  try {
    const db = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = db.connections[0].readyState;
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    throw new Error("MongoDB connection failed.");
  }
};

// Route to handle contact form submissions
app.post("/api/v1/message/send", async (req, res) => {
  try {
    await connectToDatabase(); // Ensure MongoDB is connected

    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newMessage = new Message({ name, email, phone, message });
    await newMessage.save();

    res.status(201).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error in POST /api/v1/message/send:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
});

// Export the app as a Vercel serverless function
export default (req, res) => {
  app(req, res);
};
