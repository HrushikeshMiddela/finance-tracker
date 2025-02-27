import mongoose from "mongoose"; // Import mongoose

// Define the financial record schema
const financialRecordSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // userId field
  date: { type: Date, required: true }, // date field
  description: { type: String, required: true }, // description field
  amount: { type: Number, required: true }, // amount field
  category: { type: String, required: true }, // category field
  paymentMethod: { type: String, required: true }, // payment method field
});

// Create the model from the schema
const FinancialRecordModel = mongoose.model("FinancialRecord", financialRecordSchema);

// Export the model
export default FinancialRecordModel;
