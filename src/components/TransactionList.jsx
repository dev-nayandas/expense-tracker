
import React from 'react';

const TransactionList = ({ transactions }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.description} - ${transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
