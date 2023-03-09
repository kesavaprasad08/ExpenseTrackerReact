import React from "react";

import ExpenseItem from "./components/Expenses/ExpenseItem";
import Card from "./components/UI/card";
import './components/Expenses/Expenses.css';
import NewExpense from "./components/Expenses/newExpense/NewExpense";



const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Food",
      Amount: 150,
      date: new Date(2023, 2, 16),
      locationOfExpenditure: "Chennai",
    },
    {
      id: "e2",
      title: "Petrol",
      Amount: 100,
      date: new Date(2021, 2, 28),
      locationOfExpenditure: "Bangalore",
    },
    {
      id: "e3",
      title: "Movies",
      Amount: 200,
      date: new Date(2021, 2, 28),
      locationOfExpenditure: "Kochi",
    },
    {
      id : "e4",
      title: "rent",
      Amount: 20000,
      date: new Date(2021, 1, 1),
      locationOfExpenditure: "Chennai",
    }
  ];
  return (
    <div>
      
      
      <NewExpense/> 
      
      
      <Card className="expenses">
      
      {expenses.map((expenses, index) => {
        return (
          <ExpenseItem
            key={index}
            title={expenses.title}
            amount={expenses.Amount}
            date={expenses.date}
            location={expenses.locationOfExpenditure}
          />
        );
      })}
      
    </Card>
    <div>
      <form>
      <div></div>
      </form>
    </div>
    </div>
  );
}

export default App;
