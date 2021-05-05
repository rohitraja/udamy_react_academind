import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
let DUMY_EXPENSES =  [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 23.43,
    date: new Date(2021, 4, 10),
  },
  { id: "e2", title: "Groseries", amount: 4.0, date: new Date(2019, 3, 25) },
  { id: "e3", title: "New TV", amount: 43.93, date: new Date(2022, 5, 2) },
  {
    id: "e4",
    title: "Car Insurance",
    amount: 484.04,
    date: new Date(2021, 4, 28),
  },
];
function App() {

  const [expenses, setExpenses] = useState(DUMY_EXPENSES);
  const addExpenseHandeler = (expense)=>{
    console.log("From App.js");
    console.log(expense);
    setExpenses((prevExpense)=>{
      return [expense, ...prevExpense];
    });
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandeler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
