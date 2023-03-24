import React, { useState } from "react";

import ExpenseFilter from "./ExpenseFilter";

import ExpensesList from "./ExpensesList";
import Card from "../UI/card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // let expensesContent = <p>No expenses found</p>;

  // if(filteredExpenses.length===1){

  //   expensesContent=

  // }
  // if(filteredExpenses.length > 1){
  //   expensesContent=filteredExpenses.map((expense) =>
  //   <ExpenseItem
  //   key ={expense.id}
  //    title={expense.title}
  //    amount={expense.amount}
  //    date={expense.date}
  //    />
  //    )
  // }
  // console.log(filteredExpenses.length===1);

  return (
    <div>
      <Card className="expenses" id="expensesid">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses ={filteredExpenses}/>
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
