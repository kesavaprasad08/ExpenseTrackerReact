import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate1 = new Date(2022, 3, 28);
  const expenseDesc1 = 'Food';
  const expensePrice1 =150;
  const locationOfExpenditure1 = 'Chennai';
  const expenseDate2 = new Date(2022, 4, 1);
  const expenseDesc2 = 'Petrol';
  const expensePrice2 =100;
  const locationOfExpenditure2 = 'Bangalore';
  const expenseDate3 = new Date(2022, 4, 2);
  const expenseDesc3 = 'Movies';
  const expensePrice3 =200;
  const locationOfExpenditure3 = 'Kochi';

  return (
    <div>
      <h2>Expense Item</h2>
      <div className="expense-item">
        <div>{expenseDate1.toString()}</div>
        <div className="expense-item__description"> <h2>{expenseDesc1} </h2>
        </div>
        <div className="expense-item__description"> <h2>{locationOfExpenditure1} </h2>
        </div>
        <div className="expense-item__price">Rs {expensePrice1}</div>
      </div>

      <div className="expense-item">
        <div>{expenseDate2.toString()}</div>
        <div className="expense-item__description"> <h2>{expenseDesc2} </h2>
        </div>
        <div className="expense-item__description"> <h2>{locationOfExpenditure2} </h2>
        </div>
        <div className="expense-item__price">Rs {expensePrice2}</div>
        
      </div>


      <div className="expense-item">
        <div>{expenseDate3.toString()}</div>
        <div className="expense-item__description"> <h2>{expenseDesc3} </h2>
        </div>
        <div className="expense-item__description"> <h2>{locationOfExpenditure3} </h2>
        </div>
        <div className="expense-item__price">Rs {expensePrice3}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
