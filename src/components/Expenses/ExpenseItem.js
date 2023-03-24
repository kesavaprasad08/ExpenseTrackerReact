import React, {useState} from "react";



import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/card";
import ExpenseItemDesc from "./ExpenseItemDesc";



const ExpenseItem = (props) => {

  
  const [titleST, setTitle] = useState(props.title);
  const [expAmtST, setAmt] = useState(props.amount);

  const changeExpense = () => {
    setAmt(100);
  }

  const clickHandler = () => {
    setTitle('updated title');
    };

  return (  
    <Card className="expense-item" id ={props.title}>
      <ExpenseDate date={props.date} />
      <ExpenseItemDesc title={titleST} desc={props.location} />
      <ExpenseDetails amount={expAmtST} />
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={changeExpense}>Change amt to 100</button>
    </Card>
  );
};


export default ExpenseItem;
