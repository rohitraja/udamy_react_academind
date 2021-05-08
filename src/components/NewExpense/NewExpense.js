import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

let showAddExpenseButton = true;
let showAddExpenseForm = false;

const NewExpense = (props) => {
  const [showAddExpenseButton, setShowAddExpenseButton] = useState(true);
  const [showAddExpenseForm, setShowAddExpenseForm] = useState(false);
  const saveExpenseDataHandeler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const addExpenseHandeler = () => {
    setShowAddExpenseButton(!showAddExpenseButton);
    setShowAddExpenseForm(!showAddExpenseForm);
  };
  const onCancelHandeler = (canceled) => {
    if (canceled) {
      setShowAddExpenseButton(!showAddExpenseButton);
      setShowAddExpenseForm(!showAddExpenseForm);
    }
  };
  return (
    <div className="new-expense">
      {showAddExpenseButton ? (
        <div>
          <button onClick={addExpenseHandeler}>Add Expense</button>
        </div>
      ) : (
        <div />
      )}
      {showAddExpenseForm ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandeler}
          onCancelExpenseData={onCancelHandeler}
        ></ExpenseForm>
      ) : (
        <div />
      )}
    </div>
  );
};

export default NewExpense;
