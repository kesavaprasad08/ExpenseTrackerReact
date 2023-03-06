import React from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/card";
import "./Expenses.css";

const Expenses = (props) => {
  <Card className="expenses" id ="expensesid">
    <ExpenseItem
      date={props.date}
      title={props.title}
      desc={props.location}
      amount={props.amount}
    />
  </Card>;
};

export default Expenses;
