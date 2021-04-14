import React, { useState, useContext } from "react";
import { ContextState } from "../context/ContextState";
import { v4 as uuidv4 } from "uuid";

const ExpenseForm = () => {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const { dispatch } = useContext(ContextState);

  const AddExpense = (e) => {
    e.preventDefault();

    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    };

    dispatch({
      type: "ADD",
      payload: expense,
    });
  };

  return (
    <form onSubmit={AddExpense}>
      <h3>Add Expense</h3>
      <div className="form-control">
        <label for="name">Name:</label>
        <input
          type="text"
          placeholder="Enter expense name.."
          required="required"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label for="cost">Value</label>
        <input
          type="text"
          placeholder="Enter expense value.."
          required="required"
          id="cost"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
        />
      </div>
      <button className="form-btn">Add transaction</button>
    </form>
  );
};

export default ExpenseForm;
