const ExpenseItemDesc = (props) => {
  const title = props.title;
  const desc = props.desc;

  return (
    <div className="expense-item__description">
      <h2>{title}</h2>
      <h2>{desc}</h2>
    </div>
  );
};

export default ExpenseItemDesc;
