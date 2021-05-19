import React, { Fragment, useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [userEntered, setUserEntered] = useState({
    enteredTitle: "",
    enteredPrice: "",
    enteredDate: "",
  });

  const { enteredTitle, enteredPrice, enteredDate } = userEntered;

  const [isClicked, setIsCLicked] = useState(false);

  const titleChangeHandler = (event) => {
    setUserEntered((prevState) => {
      return {
        ...prevState,
        enteredTitle: event.target.value,
      };
    });
    console.log(userEntered.enteredTitle);
  };

  const dateChangeHandler = (event) => {
    setUserEntered((prevState) => {
      return {
        ...prevState,
        enteredDate: new Date(event.target.value),
      };
    });
    console.log(userEntered.enteredDate);
  };

  const priceChangeHandler = (event) => {
    setUserEntered((prevState) => {
      return {
        ...prevState,
        enteredPrice: event.target.value,
      };
    });
    console.log(userEntered.enteredPrice);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // console.log(userEntered);
    // console.log(props);
    props.formFunc(userEntered);
    setUserEntered({ enteredTitle: "", enteredPrice: "", enteredDate: "" });
    setIsCLicked((prevState) => {
      return !prevState;
    });
  };

  const newExpenseHandler = () => {
    setIsCLicked((prevState) => {
      return !prevState;
    });
  };

  if (!isClicked) {
    return (
      <div className="new-expense__controls">
        <Fragment>
          <div className="new-expense__actions">
            <button onClick={newExpenseHandler}>Add New Expense</button>
          </div>
        </Fragment>
      </div>
    );
  } else {
    return (
      <div className="new-expense__controls">
        <Fragment>
          <form onSubmit={submitHandler}>
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                value={enteredTitle}
                onChange={titleChangeHandler}
              />
            </div>
            <div className="new-expense__control">
              <label>Price</label>
              <input
                type="number"
                min="100"
                step="0.01"
                value={enteredPrice}
                onChange={priceChangeHandler}
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                min="20-01-2019"
                max="10-12-2022"
                value={enteredDate}
                onChange={dateChangeHandler}
              />
            </div>
            <div className="new-expense__actions">
              <button onClick={newExpenseHandler}>Cancel</button>
            </div>
            <div className="new-expense__actions">
              <button>Add Expense</button>
            </div>
          </form>
        </Fragment>
      </div>
    );
  }
};

export default ExpenseForm;
