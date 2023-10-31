import TodoList from "./components/TodoList";
import AddTask from "./components/AddTask";
import "./App.css";
import { useTodo } from "./hooks/useTodo";

function App() {
  const {
    todos,
    todosCount,
    pendingTodoCount,
    handleNewTodo,
    handleDeleteTodo,
    handleUpdateTodo,
    handleCompleteTodo,
  } = useTodo();

  return (
    <>
      <div className="card-to-do">
        <h1>Tasks List</h1>
        <div className="counter-todos">
          <h3>Number of tasks: {todosCount}</h3>
          <h3>Pending tasks: {pendingTodoCount}</h3>
        </div>
        <div className="add-todo">
          <h3>Add task</h3>
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
