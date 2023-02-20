import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/card";
import ExpenseItemDesc from "./ExpenseItemDesc";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseItemDesc title={props.title} desc={props.location} />
      <ExpenseDetails amount={props.amount} />
    </Card>
  );
};
export default ExpenseItem;
