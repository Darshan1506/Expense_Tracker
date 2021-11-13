import React, { useState } from 'react';
import Expenseitem from "./components/Expenses/expenseitem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY_EXPENSES = [
  
];
function App() {
  const [expenses , setExpenses]=useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    
    setExpenses(prevExpenses =>{
      return [
        expense,
      ...prevExpenses
      ]
      
    });
  };
  return (
   <div>
     <NewExpense onAddExpense = {addExpenseHandler}></NewExpense>
     <Expenses item = {expenses}></Expenses>
   </div>
  );
}

export default App;
