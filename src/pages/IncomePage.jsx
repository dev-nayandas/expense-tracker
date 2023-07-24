// IncomePage.js
import React from 'react';
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';


const IncomePage = () => {
  const incomeTransactions = []; // Replace with the actual income transactions data

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Income Transactions</h1>
      <TransactionForm />
      <TransactionList transactions={incomeTransactions} />
    </div>
  );
};

export default IncomePage;
