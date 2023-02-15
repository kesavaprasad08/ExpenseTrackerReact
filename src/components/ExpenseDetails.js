import "./ExpenseItem.css";

function ExpenseDetails(props) {
  return (
    <div>
      <div className="expense-item__price">Rs {props.amount}</div>
    </div>
  );
}

export default ExpenseDetails;
