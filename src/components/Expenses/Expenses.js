import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/card";
import "./Expenses.css";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
      setFilteredYear(selectedYear);
    };
    
    return (
      <div>
  <Card className="expenses" id ="expensesid">
    <ExpenseFilter selected ={filteredYear} onChangeFilter={filterChangeHandler}></ExpenseFilter>
    <ExpenseItem
      date={props.date}
      title={props.title}
      desc={props.location}
      amount={props.amount}
    />
  </Card>
  </div>
    );
};

export default Expenses;
