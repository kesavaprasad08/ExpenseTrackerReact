import React, { useState } from "react";

import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2023');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense =>{
    return expense.date.getFullYear().toString() === filteredYear;
  });

  
  
    return (
      <div>
  <Card className="expenses" id ="expensesid">
  <ExpenseFilter selected ={filteredYear} onChangeFilter={filterChangeHandler}/>
   {
    
   filteredExpenses.map((expense) =>
   <ExpenseItem
   key ={expense.id}    
    title={expense.title} 
    amount={expense.amount} 
    date={expense.date}
    />
    )}

  </Card>
  </div>
    );
};

export default Expenses;
