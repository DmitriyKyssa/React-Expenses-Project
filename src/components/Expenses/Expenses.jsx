import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  const [enteredYear, setEnteredYear] = useState("2020");
  const changedYear = (selectedYear) => {
    setEnteredYear(selectedYear);
  };

  const filteredYear = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === enteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={enteredYear}
          onChangeFilter={changedYear}
        />
        <ExpensesChart expenses={filteredYear} />
        <ExpensesList items={filteredYear} />
      </Card>
    </div>
  );
}

export default Expenses;
