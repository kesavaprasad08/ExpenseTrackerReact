import ExpenseItem from "./components/ExpenseItem";

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

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <h2>Expense Item</h2>
      {expenses.map((expenses, index) => {
        return (
          <ExpenseItem
            key={index}
            title={expenses.title}
            amount={expenses.Amount}
            date={expenses.date}
            location={expenses.locationOfExpenditure}
          ></ExpenseItem>
        );
      })}
    </div>
  );
}

export default App;
