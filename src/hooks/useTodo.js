//Importaciones
import { useEffect, useReducer } from "react";
import { todoReducer } from "../todoReducer";


/*Custom hook para manejo de eventos de tareas */
export const useTodo = () => {
  // Estado inicial.
  const initialState = [];

  //Funcion de inicio donde se recuperan datos almacenados en el localStorage.
  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

  //useReducer donde se almacenan todos las tareas.
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  //Variable para almacenar cantidad de tareas y cantidad de tareas pendientes.
  const todosCount = todos.length;
  const pendingTodoCount = todos.filter((todo) => !todo.done).length;

  //Cada vez que cambia la variable "todos" se actualiza el localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Funciones para manejar eventos
  const handleNewTodo = (todo) => {
    const action = {
      type: "Add Todo",
      payload: todo,
    };
    dispatch(action);
  };
  const handleDeleteTodo = (id) => {
    const action = {
      type: "Delete Todo",
      payload: id,
    };
    dispatch(action);
  };
  const handleUpdateTodo = (id, title, description) => {
    const action = {
      type: "Update Todo",
      payload: { id, title, description },
    };
    dispatch(action);
  };
  const handleCompleteTodo = (id) => {
    const action = {
      type: "Complete Todo",
      payload: id,
    };
    dispatch(action);
  };
  //Exportando variables y funciones
  return {
    todos,
    todosCount,
    pendingTodoCount,
    handleNewTodo,
    handleDeleteTodo,
    handleUpdateTodo,
    handleCompleteTodo,
  };
};
