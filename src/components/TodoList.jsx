import TodoItem from "./TodoItem";

function TodoList({
  todos,
  handleDeleteTodo,
  handleUpdateTodo,
  handleCompleteTodo,
}) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleUpdateTodo={handleUpdateTodo}
          handleDeleteTodo={handleDeleteTodo}
          handleCompleteTodo={handleCompleteTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
