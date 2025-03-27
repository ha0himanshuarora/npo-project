import Message from "../../models/message.js"; // Adjust the path to your models folder

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, email, phone, message } = req.body;

      // Validate input
      if (!name || !email || !phone || !message) {
        return res.status(400).json({ message: "All fields are required." });
      }

      // Save the message to MongoDB
      const newMessage = new Message({ name, email, phone, message });
      await newMessage.save();

      // Send a success response
      res.status(201).json({ message: "Message sent successfully!" });
    } catch (error) {
      console.error("Error saving message:", error);
      res.status(500).json({ message: "Failed to send message." });
    }
  } else {
    // Handle other request methods (GET, PUT, DELETE, etc.)
    res.status(405).json({ message: "Method not allowed." });
  }
}
