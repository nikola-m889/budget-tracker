import React, { useContext } from "react";
import { ContextState } from "../context/ContextState";
import "../App.css";

const IncomeExpenseStats = () => {
  const { expenses } = useContext(ContextState);

  const income = expenses
    .filter((expense) => expense.cost > 0)
    .reduce((total, expense) => {
      return (total = total + expense.cost);
    }, 0)
    .toFixed(2);

  const expense = (
    expenses
      .filter((expense) => expense.cost < 0)
      .reduce((total, expense) => (total = total + expense.cost), 0) * -1
  ).toFixed(2);

  return (
    <div className="stats-container">
      <div className="income">Income: ${income}</div>
      <div className="expense">Expense: ${expense}</div>
    </div>
  );
};

export default IncomeExpenseStats;
