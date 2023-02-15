import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div>
      <div className="expense-item">
        <div>{props.date.toString()}</div>
        <div className="expense-item__description">
          <h2>{props.title} </h2>
        </div>
        <div className="expense-item__description">
          <h2>{props.location} </h2>
        </div>
        <div className="expense-item__price">Rs {props.amount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
