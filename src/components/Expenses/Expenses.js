import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
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
        {filteredExpenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })}
      </Card>
    </div>
  );
}

export default Expenses;
