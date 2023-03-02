import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/card";
import ExpenseItemDesc from "./ExpenseItemDesc";


const clickHandler = () => {
console.log("Delete Button Clicked");
}
const ExpenseItem = (props) => {
  return (
    <Card className="expense-item" id ={props.title}>
      <ExpenseDate date={props.date} />
      <ExpenseItemDesc title={props.title} desc={props.location} />
      <ExpenseDetails amount={props.amount} />
      <button onClick={clickHandler}>Delete</button>
    </Card>
  );
};


export default ExpenseItem;
