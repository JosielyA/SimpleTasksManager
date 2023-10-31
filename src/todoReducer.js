/*
  todo: {
  id: 1231242423,
  title: "aprender php",
  description: "tengo que aprender php",
  done: false
  }
*/

export const todoReducer = (initialState, action) => {
  switch (action.type) {
    case "Add Todo":
      return [...initialState, action.payload];
    case "Delete Todo":
      return initialState.filter((todo) => todo.id !== action.payload);
    case "Update Todo":
      return initialState.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            title: action.payload.title,
            description: action.payload.description,
          };
        }
        return todo;
      });
    case "Complete Todo":
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });
    default:
      return initialState;
  }
};
