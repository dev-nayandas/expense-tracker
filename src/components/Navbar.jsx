
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex justify-center">
        <li className="mr-4">
          <Link to="/income" className="text-white hover:text-gray-200">
            Income
          </Link>
        </li>
        <li>
          <Link to="/expense" className="text-white hover:text-gray-200">
            Expense
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
