import React, { useContext } from "react";
import { ContextState } from "../context/ContextState";
import "../App.css";

const TotalAmount = () => {
  const { expenses } = useContext(ContextState);

  const totalAmount = expenses.reduce((total, expense) => {
    return (total = total + expense.cost);
  }, 0);

  return <div className="balance">Balance: ${totalAmount}</div>;
};

export default TotalAmount;
