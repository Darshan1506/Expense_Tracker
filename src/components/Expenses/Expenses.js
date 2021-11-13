import React, { useState } from 'react';
import Card from '../UI/Card';
import Expenseitem from './expenseitem';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import './item.css';
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpensesChart';
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.item.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpenseChart expenses={filteredExpenses}></ExpenseChart>
        <ExpensesList items = {filteredExpenses}></ExpensesList>
        
      </Card>
    </div>
  );
};

export default Expenses;