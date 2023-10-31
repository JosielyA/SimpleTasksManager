import { useForm } from "../hooks/useForm";
import Notify from "./Notify";

function AddTask({ handleNewTodo }) {
  //Manejo de eventos de formulario con useForm
  const { title, description, onInputChange, onResetForm } = useForm({
    title: "",
    description: "",
  });

  //Funcion para enviar datos del formulario
  const onFormSubmit = (e) => {
    e.preventDefault();
    //Validar que la longitud del formulario sea mayor a 1
    if (title.length <= 0 || description.length <= 0) {
      //Notificacion de error
      Notify("El título y la descripción son obligatorios.");
      return;
    }
    //Enviando datos del formulario
    let newTodo = {
      id: new Date().getTime(),
      title: title,
      description: description,
      done: false,
    };
    handleNewTodo(newTodo);
    //Restaurar formulario
    onResetForm();
  };
  /*Formulario de nueva tarea */
  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        className="input-add"
        name="title"
        value={title}
        onChange={onInputChange}
        placeholder="Título"
      />
      <br />
      <input
        type="text"
        className="input-add"
        name="description"
        value={description}
        onChange={onInputChange}
        placeholder="Descripción"
      />
      <br />
      <button className="btn-add" type="submit">
        Agregar
      </button>
    </form>
  );
}

export default AddTask;
