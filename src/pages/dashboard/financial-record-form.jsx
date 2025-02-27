import React, { useState } from 'react';
import { useUser } from "@clerk/clerk-react";

export const FinancialRecordForm = () => {
  const { user } = useUser();

  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const newRecord = {
      userId: user?.id,
      date: new Date(),
      description: description,
      amount: parseFloat(amount),
      category: category,
      paymentMethod: paymentMethod,
    };
  
    try {
      const response = await fetch("http://localhost:3001/financial-records", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRecord),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const savedRecord = await response.json();
      console.log("Record saved successfully:", savedRecord);
  
      // Reset form fields after successful save
      setDescription('');
      setAmount('');
      setCategory('');
      setPaymentMethod('');
    } catch (error) {
      console.error("Failed to save record:", error);
    }
  };
  
  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Description: </label>
          <input
            type="text"
            required
            className="input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="form-field">
          <label>Amount:</label>
          <input
            type="number"
            required
            className="input"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="form-field">
          <label>Category:</label>
          <select
            required
            className="input"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select a Category</option>
            <option value="Food">Food</option>
            <option value="Rent">Rent</option>
            <option value="Salary">Salary</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-field">
          <label>Payment Method:</label>
          <select
            required
            className="input"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="">Select a Payment Method</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Cash">Cash</option>
            <option value="Bank Transfer">Bank Transfer</option>
          </select>
        </div>

        <button type="submit" className="button">
          Add Record
        </button>
      </form>
    </div>
  );
};

export default FinancialRecordForm;
