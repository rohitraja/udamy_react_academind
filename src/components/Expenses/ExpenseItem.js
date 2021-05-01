import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const clickHandeler = () => {
    setTitle("Title changed");
    console.log("Clicked!!");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandeler}>Click this button</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
