import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const newExpense = (props) => {
const saveExpenseDataHandler =(enteredExpensedData)=>{
const expensedData ={
    ...enteredExpensedData,
    id : Math.random().toString()
};
props.onAddExpense(expensedData);
};

return (
<div className="new-expense">
<ExpenseForm onSaveExpenseData ={saveExpenseDataHandler} />
</div>
);
};

export default newExpense;