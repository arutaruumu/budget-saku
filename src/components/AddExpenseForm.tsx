import React, { useState } from 'react';

interface AddExpenseFormProps {
  onAddExpense: (expense: string) => void;
}

const AddExpenseForm: React.FC<AddExpenseFormProps> = ({ onAddExpense }) => {
  const [expense, setExpense] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (expense.trim() !== '') {
      onAddExpense(expense);
      setExpense('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={expense}
        onChange={(e) => setExpense(e.target.value)}
        placeholder="Enter expense"
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default AddExpenseForm;
