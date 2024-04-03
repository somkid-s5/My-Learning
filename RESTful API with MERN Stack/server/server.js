// Import modules
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Define server port
const PORT = process.env.PORT || 3000;

// MongoDB connection string
const MONGO_URI = process.env.MONGO_URI;

// Middleware for error handling
import errorHandler from "./middleware/errorHandler.js";
app.use(errorHandler);

// Import API routes
import dataRoute from "./routes/dataRoute.js";

// Parse incoming JSON requests
app.use(express.json());

// Mount API routes under "/api"
app.use("/api", dataRoute);

// Connect to MongoDB database
async function connectToMongo() {
 try {
   await mongoose.connect(MONGO_URI);
   console.log("Connected to MongoDB");
 } catch (error) {
   console.error("MongoDB connection error:", error);
   process.exit(1);
 }
}

// Start the server
async function startServer() {
 await connectToMongo();
 app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
}

startServer();
