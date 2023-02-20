import React from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/card";
import "./Expenses.css";

const Expenses = (props) => {
  <Card className="expenses">
    <ExpenseItem
      date={props.date}
      title={props.title}
      desc={props.location}
      amount={props.amount}
    />
  </Card>;
};

export default Expenses;
