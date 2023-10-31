import { FaEdit } from "react-icons/fa";
import { useForm } from "../hooks/useForm";
import { useRef, useState } from "react";
import Notify from "./Notify";

function TodoUpdate({ todo, handleUpdateTodo }) {
  // useForm para manejar los eventos de los inputs
  const { updateTitle, updateDescription, onInputChange } = useForm({
    updateTitle: todo.title,
    updateDescription: todo.description,
  });

  //Manejar cuando se puede editar o no una tarea
  const [disable, setDisable] = useState(true);
  //Focus en input
  const focusInputRef = useRef();

  const onSubmitUpdate = (e) => {
    e.preventDefault();

    //Validacion de que los valores de los inpus deben ser mayores que 1
    if (updateDescription.length <= 0 || updateTitle.length <= 0) {
      //Notificacion de error
      Notify("El título y la descripción son obligatorios.");
      return;
    }
    const id = todo.id;
    const title = updateTitle;
    const description = updateDescription;

    //Actualizar tarea
    handleUpdateTodo(id, title, description);
    //Negacion de estado de focus en input
    setDisable(!disable);
    focusInputRef.current.focus();
  };
  /*Formulario de actualizar tarea */
  return (
    <form onSubmit={onSubmitUpdate}>
      <input
        type="text"
        className={`input-update ${todo.done ? "text-decoration-dashed" : ""}`}
        name="updateTitle"
        value={updateTitle}
        onChange={onInputChange}
        placeholder="Título"
        readOnly={disable}
        ref={focusInputRef}
      />
      <input
        type="text"
        className={`input-update ${todo.done ? "text-decoration-dashed" : ""}`}
        name="updateDescription"
        value={updateDescription}
        onChange={onInputChange}
        placeholder="Descripción"
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
