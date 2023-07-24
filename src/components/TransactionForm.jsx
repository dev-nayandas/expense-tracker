
import React, { useState } from 'react';

const TransactionForm = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic here to handle form submission and store the transaction data
    setDescription('');
    setAmount('');
  };

  return (
    <div className=' flex items-center justify-center'>
      <form className="bg-white p-4 rounded shadow-md" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 font-bold">
          Description
        </label>
        <input
          type="text"
          id="description"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          value={description}
          onChange={handleDescriptionChange}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="amount" className="block text-gray-700 font-bold">
          Amount
        </label>
        <input
          type="number"
          id="amount"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          value={amount}
          onChange={handleAmountChange}
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
    </div>
  );
};

export default TransactionForm;
