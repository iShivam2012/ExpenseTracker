import React from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const dropdownHandler = (event) => {
    console.log(event.target.value);
    props.dropdownValue(event.target.value);
  };
  return (
    <div className="expense-filter">
      <div className="expense-filter__control">
        <label>Filter</label>
        <select value={props.valueSelected} onChange={dropdownHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
