/*
ESTRUCTURA DE TAREAS
  todo: {
  id: 1231242423,
  title: "algun titulo",
  description: "descripcion de la tarea",
  done: false
  }
*/
// Reducer para manejar los eventos  de las tareas
export const todoReducer = (initialState, action) => {
  switch (action.type) {
    //En caso de agregar tarea
    case "Add Todo":
      return [...initialState, action.payload];

    //En caso de eliminar tarea
    case "Delete Todo":
      return initialState.filter((todo) => todo.id !== action.payload);

    //En caso de actualizar tarea
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

    //En caso de que la tarea sea marcada como completada
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

    // En caso de que no se cumpla ninguno de los anteriores
    default:
      return initialState;
  }
};
