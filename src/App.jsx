import TodoList from "./components/TodoList";
import AddTask from "./components/AddTask";
import "./App.css";

function App() {
  return (
    <>
      <div className="card-to-do">
        <h1>Tasks List</h1>
        <div className="counter-todos">
          <h3>Number of tasks: 8</h3>
          <h3>Pending tasks: 3</h3>
        </div>
        <div className="add-todo">
          <h3>Add task</h3>
          <AddTask />
        </div>
      </div>
      <TodoList />
    </>
  );
}

export default App;
