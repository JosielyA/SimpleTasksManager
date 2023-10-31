import { FaEdit } from "react-icons/fa";

function TodoUpdate() {
  return (
    <form>
      <input
        type="text"
        className="input-update"
        name="title"
        value="Aprender Php"
        placeholder="Title"
      />
      <input
        type="text"
        className="input-update"
        name="description"
        value="Tengo que aprender php"
        placeholder="Description"
      />
      <button className="btn-edit" type="submit">
        <FaEdit />
      </button>
    </form>
  );
}

export default TodoUpdate;
