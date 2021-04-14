export default (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "DELETE":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
