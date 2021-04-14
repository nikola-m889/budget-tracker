import React from "react";
import "./App.css";
import { ContextProvider } from "./context/ContextState";

import ExpenseList from "./components/ExpenseList";

import TotalAmount from "./components/TotalAmount";
import ExpenseForm from "./components/ExpenseForm";
import IncomeExpenseStats from "./components/IncomeExpenseStats";

const App = () => {
  return (
    <ContextProvider>
      <h1>Budget Tracker</h1>
      <div className="container">
        <div className="tracker">
          <ExpenseList />
          <ExpenseForm />
        </div>
        <div className="stats">
          <TotalAmount />
          <br />
          <IncomeExpenseStats />
        </div>
      </div>
    </ContextProvider>
  );
};

export default App;
