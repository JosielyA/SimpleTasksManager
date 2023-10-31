import { useState } from "react";

/* Custom hook para manejo de eventos de formularios. */
export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  //Funcion para guardar en un estado el nombre y el valor del input.
  const onInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormState({
      ...formState,
      [name]: value,
    });
  };
  //Funcion para restaurar inputs.
  const onResetForm = () => {
    setFormState(initialForm);
  };
  //Exportando variables y funciones.
  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
