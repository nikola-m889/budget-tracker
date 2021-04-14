import React, { useContext } from "react";
import { ContextState } from "../context/ContextState";

const ExpenseItem = (props) => {
  const { dispatch } = useContext(ContextState);

  const deleteExpense = () => {
    dispatch({
      type: "DELETE",
      payload: props.id,
    });
  };

  return (
    <li className="expense-item">
      {props.name}
      <span>${props.cost}</span>
      <button className="delete-btn" onClick={deleteExpense}>
        <i class="fa fa-times" aria-hidden="true"></i>
      </button>
    </li>
  );
};

export default ExpenseItem;
