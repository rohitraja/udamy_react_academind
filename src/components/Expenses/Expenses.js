import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2021");
  const expenseFilterHandeler = (yearFilter) => {
    console.log("The selected Year: ", yearFilter);
    setFilterYear(yearFilter);
  };

  const filteredExpenses = props.items.filter(item=>{return item.date.getFullYear()==filterYear});
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onExpenseFilter={expenseFilterHandeler}
        ></ExpensesFilter>
        <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
        <ExpensesList items = {filteredExpenses}></ExpensesList>
      </Card>
    </div>
  );
}

export default Expenses;
