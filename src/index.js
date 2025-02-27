import express from "express"; // Import express
import mongoose from "mongoose"; // Import mongoose

import financialRecordRouter from "./routes/financial-records.js"; // Import your router
import cors from "cors"; // Import cors for handling Cross-Origin Resource Sharing

const app = express(); // Create an instance of express
const port = process.env.PORT || 3001; // Define the port to run on

app.use(express.json()); // Middleware to parse JSON
app.use(cors()); // Middleware to enable CORS

const mongoURI = "mongodb+srv://rushikeshsaimiddela:lxVdw5fRgNfpkktU@personalfinancetracker.n3ulp.mongodb.net/?retryWrites=true&w=majority&appName=PersonalFinanceTracker";

// Connect to MongoDB
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("CONNECTED TO MONGODB!"))
  .catch((err) => console.error("Failed to Connect to MongoDB:", err));

// Use the financial record router
app.use("/financial-records", financialRecordRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server Running on Port ${port}`);
});


// const mongoURI = "mongodb+srv://rushikeshsaimiddela:lxVdw5fRgNfpkktU@personalfinancetracker.n3ulp.mongodb.net/";
// pass : lxVdw5fRgNfpkktU