import React, {useState} from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const titleChangeHandeler = (event)=>{
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandeler= event =>{
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandeler = event =>{
    setEnteredDate(event.target.value);
  }
  const submitHandeler = (event)=>{
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date : new Date(enteredDate)
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }
  const cancelHandeler = (event)=>{
    event.preventDefault();
    props.onCancelExpenseData(true);
  }
  return (
      <form onSubmit={submitHandeler} > 
        <div className="new-expense__controles">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={enteredTitle} onChange={titleChangeHandeler}></input>
          </div>
          <div className="new-expense__control"> 
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandeler}></input>
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange = {dateChangeHandeler}></input>
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="cancel" onClick = {cancelHandeler} >Cancel</button>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
  );
};

export default ExpenseForm;
