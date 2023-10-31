import TodoList from "./components/TodoList";
import AddTask from "./components/AddTask";
import "./App.css";
import { useTodo } from "./hooks/useTodo";
import NotifyContainer from "./components/NotifyContainer";
import "react-toastify/dist/ReactToastify.css";

function App() {
  //Destructurando variables y funciones de useTodo
  const {
    todos,
    todosCount,
    pendingTodoCount,
    handleNewTodo,
    handleDeleteTodo,
    handleUpdateTodo,
    handleCompleteTodo,
  } = useTodo();

  //Pagina y contenedores principales
  return (
    <>
      <NotifyContainer />
      <div className="card-to-do">
        <h1>Lista de tareas</h1>
        <div className="counter-todos">
          <h3>Numero de tareas: {todosCount}</h3>
          <h3>Numero de tareas pendientes: {pendingTodoCount}</h3>
        </div>
        <div className="add-todo">
          <h3>Agregar tarea</h3>
          <AddTask handleNewTodo={handleNewTodo} />
        </div>
        <TodoList
          todos={todos}
          handleUpdateTodo={handleUpdateTodo}
          handleDeleteTodo={handleDeleteTodo}
          handleCompleteTodo={handleCompleteTodo}
        />
      </div>
    </>
  );
}

export default App;
