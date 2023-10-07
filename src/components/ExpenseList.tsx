import React from 'react';

interface ExpenseListProps {
  expenses: string[];
}

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses }) => {
  return (
    <ul>
      {expenses.map((expense, index) => (
        <li key={index}>{expense}</li>
      ))}
    </ul>
  );
};

export default ExpenseList;
