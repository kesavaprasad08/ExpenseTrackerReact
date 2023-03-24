import React, { useState } from "react";

import "./components/Expenses/Expenses.css";
import NewExpense from "./components/Expenses/newExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";


const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Food",
    amount: 150,
    date: new Date(2023, 2, 16),
    locationOfExpenditure: "Chennai",
  },
  {
    id: "e2",
    title: "Petrol",
    amount: 100,
    date: new Date(2021, 2, 28),
    locationOfExpenditure: "Bangalore",
  },
  {
    id: "e3",
    title: "Movies",
    amount: 200,
    date: new Date(2021, 2, 28),
    locationOfExpenditure: "Kochi",
  },
  {
    id: "e4",
    title: "rent",
    amount: 20000,
    date: new Date(2021, 1, 1),
    locationOfExpenditure: "Chennai",
  },
];

const App = () => {
  const [expenses,setExpenses] = useState(DUMMY_EXPENSES);


  const addExpenseHandler = expense => {
   
    setExpenses((prevExpenses) =>{
      return [expense,...prevExpenses];
  });
};

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items ={expenses}/> 

     </div>
  );
};


export default App;
