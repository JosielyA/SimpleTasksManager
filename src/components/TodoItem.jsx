import { FaTrash } from "react-icons/fa";
import TodoUpdate from "./TodoUpdate";


//Componente de tarea
function TodoItem({
  todo,
  handleDeleteTodo,
  handleUpdateTodo,
  handleCompleteTodo,
}) {
  return (
    <li>
      <span onClick={() => handleCompleteTodo(todo.id)}>
        <label
          className={`container-done ${todo.done ? "active" : ""}`}
        ></label>
      </span>
      <TodoUpdate todo={todo} handleUpdateTodo={handleUpdateTodo} />
      <button className="btn-delete" onClick={() => handleDeleteTodo(todo.id)}>
        <FaTrash />
      </button>
    </li>
  );
}

export default TodoItem;
