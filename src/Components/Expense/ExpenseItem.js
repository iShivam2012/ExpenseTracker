import React, { useState } from "react";
import "./ExpenseItem.css";
import "./ExpenseDate.css";
import Card from "../Common/Card";

const ExpenseItem = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });

  // const [title, setTitle] = useState(props.desc);

  // const handleClick = () => {
  //   setTitle("Updated");
  //   console.log("clicked");
  // };

  return (
    <Card className="expense-item">
      {/* <div>{props.date.toISOString()}</div> */}
      <div className="expense-date">
        <div className="expense-date__day">{day}</div>
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        {/* {props.date.toString()} */}
      </div>
      <div className="expense-item__description">
        <h2>{props.desc}</h2>
        {/* <div onClick={handleClick} className="expense-item__price"> */}
        <div className="expense-item__price">Rupees {props.price}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
