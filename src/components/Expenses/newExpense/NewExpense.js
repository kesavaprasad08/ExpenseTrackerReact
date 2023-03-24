import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const newExpense = (props) => {
const saveExpenseDataHandler =(enteredExpensedData)=>{
const expensedData ={
    id : Math.random().toString(),
    ...enteredExpensedData
    
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