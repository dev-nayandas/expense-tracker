// ExpensePage.js
import React from 'react';
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';

const ExpensePage = () => {
  const expenseTransactions = []; // Replace with the actual expense transactions data

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Expense Transactions</h1>
      <TransactionForm />
      <TransactionList transactions={expenseTransactions} />
    </div>
  );
};

export default ExpensePage;
