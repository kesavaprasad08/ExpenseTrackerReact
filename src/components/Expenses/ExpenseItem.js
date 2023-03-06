import React, { useState } from "react";



import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/card";
import ExpenseItemDesc from "./ExpenseItemDesc";



const ExpenseItem = (props) => {
  
  const [title, setTitle] = useState(props.title);
  const [expAmt, setAmt] = useState(props.amount);

  const changeExpense = () => {
    setAmt(100);
  }

  const clickHandler = () => {
    setTitle('updated title');
    console.log(title);
    };

  return (  
    <Card className="expense-item" id ={props.title}>
      <ExpenseDate date={props.date} />
      <ExpenseItemDesc title={title} desc={props.location} />
      <ExpenseDetails amount={expAmt} />
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={changeExpense}>Change amt to 100</button>
    </Card>
  );
};


export default ExpenseItem;
