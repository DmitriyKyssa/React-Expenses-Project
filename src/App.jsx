import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

const EXPENSES_STORE = [
  {
    id: 'e1',
    title: "Car insurance",
    amount: 249.99,
    date: new Date(2022, 3, 10),
  },
  {
    id: 'e2',
    title: "Table",
    amount: 333.99,
    date: new Date(2020, 1, 24),
  },
  {
    id: 'e3',
    title: "Iphone 14",
    amount: 1654.99,
    date: new Date(2021, 9, 14),
  },
  {
    id: 'e4',
    title: "PC",
    amount: 122.99,
    date: new Date(2020, 7, 20),
  },
];

function App() {
  const [expense, setExpense] = useState(EXPENSES_STORE)

  const addExpenses = (expense) => {
    setExpense(prevExpenses =>{
      return [expense, ...prevExpenses]
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenses}/>
      <Expenses items={expense} />
    </div>
  );
}

export default App;
