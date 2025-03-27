import mongoose from "mongoose";
import Message from "../../models/message"; // Adjust path based on your project structure
import dotenv from "dotenv";
import express from "express";

dotenv.config();
const app = express();
app.use(express.json());

// Update CORS to allow requests from your Vercel domain
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
  }
};

// POST route for sending messages
app.post("/api/v1/message/send", async (req, res) => {
  await connectToDatabase(); // Ensure MongoDB is connected

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

// Export Express app as a Vercel serverless function
export default (req, res) => {
  app(req, res); // Pass the request to the Express app
};
