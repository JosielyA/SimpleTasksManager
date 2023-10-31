import { useForm } from "../hooks/useForm";
import { toast } from "react-toastify";

function AddTask({ handleNewTodo }) {
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

  const { title, description, onInputChange, onResetForm } = useForm({
    title: "",
    description: "",
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (title.length <= 1 || description.length <= 1) {
      notify("Title and description length must be langer than 1 character.");
      return;
    }
    let newTodo = {
      id: new Date().getTime(),
      title: title,
      description: description,
      done: false,
    };
    handleNewTodo(newTodo);
    onResetForm();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        className="input-add"
        name="title"
        value={title}
        onChange={onInputChange}
        placeholder="Title"
      />
      <br />
      <input
        type="text"
        className="input-add"
        name="description"
        value={description}
        onChange={onInputChange}
        placeholder="Description"
      />
      <br />
      <button className="btn-add" type="submit">
        Agregar
      </button>
    </form>
  );
}

export default AddTask;
