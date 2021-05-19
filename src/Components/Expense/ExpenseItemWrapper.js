import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import NewExpense from "../NewExpense/NewExpense";
import ExpenseFilter from "./ExpenseFilter";

const dummy_expenses = [
  {
    date: new Date(2021, 5, 12),
    desc: "Normal Day",
    price: "200",
  },
  {
    date: new Date(2021, 4, 15),
    desc: "Extra Special Day",
    price: "999999",
  },
  {
    date: new Date(2019, 3, 14),
    desc: "Average Day",
    price: "100",
  },
  {
    date: new Date(2020, 5, 12),
    desc: "Special Day",
    price: "2000",
  },
];

export const ExpenseItemWrapper = () => {
  const [year, setYear] = useState("2020");

  const [expenses, setExpenses] = useState(dummy_expenses);

  const ExpenseDataHandler = (Expense) => {
    console.log("Wrapperbaby", Expense);
    setExpenses((prevExpenses) => {
      return [
        {
          date: Expense.enteredDate,
          desc: Expense.enteredTitle,
          price: Expense.enteredPrice,
        },
        ...prevExpenses,
      ];
    });
  };

  const FilteredYear = (filterValue) => {
    setYear(filterValue);
  };

  const FilteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <div>
      <div>
        <ExpenseFilter valueSelected={year} dropdownValue={FilteredYear} />
      </div>
      <div>
        <NewExpense expenseDataFunc={ExpenseDataHandler} />
      </div>
      <div>
        {FilteredExpenses.length === 0 ? (
          <p>No Records Found</p>
        ) : (
          FilteredExpenses.map((expense) => {
            return (
              <ExpenseItem
                date={expense.date}
                desc={expense.desc}
                price={expense.price}
              />
            );
          })
        )}

        {/* <ExpenseItem
          date={expenses[0].date}
          desc={expenses[0].desc}
          price={expenses[0].price}
        />
        <ExpenseItem
          date={expenses[1].date}
          desc={expenses[1].desc}
          price={expenses[1].price}
        />
        <ExpenseItem
          date={expenses[2].date}
          desc={expenses[2].desc}
          price={expenses[2].price}
        />
        <ExpenseItem
          date={expenses[3].date}
          desc={expenses[3].desc}
          price={expenses[3].price}
        /> */}
      </div>
    </div>
  );
};
