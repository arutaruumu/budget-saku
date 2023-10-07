import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white font-bold text-xl">BudgetSaku</div>
          <ul className="flex space-x-4">
            <li className="text-white"><a href="#">About</a></li>
            <li className="text-white"><a href="#">Register</a></li>
            <li className="text-white"><a href="#">More</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
