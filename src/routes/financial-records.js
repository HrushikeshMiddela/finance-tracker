import express from "express"; // Import express
import FinancialRecordModel from "../schema/financial-record.js"; // Import your model

const router = express.Router();

// Get all records by user ID
router.get("/getAllByUserID/:userId", async (req, res) => {
  try {
    const userId = req.params.userId; // Get userId from request parameters
    const records = await FinancialRecordModel.find({ userId: userId }); // Query for records

    if (records.length === 0) {
      return res.status(404).send("No records found for the user."); // No records found
    }

    res.status(200).send(records); // Send found records
  } catch (err) {
    res.status(500).send(err); // Send error response
  }
});

// Create a new financial record
router.post("/", async (req, res) => {
  try {
    console.log("Received new record:", req.body); // Log the request body
    const newRecordBody = req.body;
    const newRecord = new FinancialRecordModel(newRecordBody);
    const savedRecord = await newRecord.save();
    res.status(201).send(savedRecord); // Return created record
  } catch (err) {
    console.error("Error saving record:", err); // Log the error
    res.status(500).send(err);
  }
});

// Update an existing financial record
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id; // Get record ID from request parameters
    const newRecordBody = req.body; // Get body of request
    const record = await FinancialRecordModel.findByIdAndUpdate(id, newRecordBody, { new: true }); // Return updated record

    if (!record) return res.status(404).send("Record not found"); // Record not found

    res.status(200).send(record); // Send updated record
  } catch (err) {
    res.status(500).send(err); // Send error response
  }
});

// Delete a financial record
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id; // Get record ID from request parameters
    const record = await FinancialRecordModel.findByIdAndDelete(id); // Delete the record

    if (!record) return res.status(404).send("Record not found"); // Record not found
    res.status(200).send(record); // Send deleted record
  } catch (err) {
    res.status(500).send(err); // Send error response
  }
});

export default router; // Export the router
