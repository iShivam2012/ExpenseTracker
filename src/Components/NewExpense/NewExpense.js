import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const FormHandler = (Expense) => {
    // const expenseData = {
    //   ...Expense,
    // };
    // console.log("New Expense", expenseData);
    props.expenseDataFunc(Expense);
    console.log("NewExpense:", Expense);
  };
  return (
    <div className="new-expense">
      <ExpenseForm formFunc={FormHandler} />
    </div>
  );
};

export default NewExpense;
