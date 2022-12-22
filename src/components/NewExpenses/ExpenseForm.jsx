import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredExpenseTitle, setEnteredExpenseTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChange = (event) => {
    setEnteredExpenseTitle(event.target.value);
  };
  const amountChange = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChange = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitForm = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredExpenseTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredExpenseTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitForm}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredExpenseTitle}
            onChange={titleChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={enteredAmount} onChange={amountChange} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2018-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChange}
          />
        </div>
      </div>
      <button type="button" onClick={props.onCancel}>Cancel</button>
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
