import React from "react";

import "./ExpenseItem.css";
import Card from "../UI/card";

const ExpenseDetails = (props) => {
  return (
    <Card>
      <div className="expense-item__price"> {props.amount} $</div>
    </Card>
  );
};

export default ExpenseDetails;
