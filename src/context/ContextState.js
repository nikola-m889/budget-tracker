import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
//import { v4 as uuidv4 } from "uuid";

const initialState = {
  expenses: [],
};

export const ContextState = createContext();

export const ContextProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <ContextState.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}
    </ContextState.Provider>
  );
};
