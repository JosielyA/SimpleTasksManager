function AddTask() {
  return (
    <form>
      <input
        type="text"
        className="input-add"
        name="title"
        value="Aprender Php"
        placeholder="Title"
      />
      <br />
      <input
        type="text"
        className="input-add"
        name="description"
        value="Tengo que aprender php"
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
