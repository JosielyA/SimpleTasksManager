import { FaEdit } from "react-icons/fa";
import { useForm } from "../hooks/useForm";
import { useRef, useState } from "react";
import { toast } from "react-toastify";

function TodoUpdate({ todo, handleUpdateTodo }) {
  const notify = (text) => {
    toast.error(text, {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const { updateTitle, updateDescription, onInputChange } = useForm({
    updateTitle: todo.title,
    updateDescription: todo.description,
  });

  const [disable, setDisable] = useState(true);
  const focusInputRef = useRef();

  const onSubmitUpdate = (e) => {
    e.preventDefault();

    if (updateDescription.length <= 1 || updateTitle.length <= 1) {
      notify("Title and description length must be langer than 1 character.");
      return;
    }
    const id = todo.id;
    const title = updateTitle;
    const description = updateDescription;

    handleUpdateTodo(id, title, description);
    setDisable(!disable);
    focusInputRef.current.focus();
  };
  return (
    <form onSubmit={onSubmitUpdate}>
      <input
        type="text"
        className={`input-update ${todo.done ? "text-decoration-dashed" : ""}`}
        name="updateTitle"
        value={updateTitle}
        onChange={onInputChange}
        placeholder="Title"
        readOnly={disable}
        ref={focusInputRef}
      />
      <input
        type="text"
        className={`input-update ${todo.done ? "text-decoration-dashed" : ""}`}
        name="updateDescription"
        value={updateDescription}
        onChange={onInputChange}
        placeholder="Description"
        readOnly={disable}
        ref={focusInputRef}
      />
      <button className="btn-edit" type="submit">
        <FaEdit />
      </button>
    </form>
  );
}

export default TodoUpdate;
