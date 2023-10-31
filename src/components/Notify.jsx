import { toast } from "react-toastify";

//Modelo de notificacion de error
export default function notify(text) {
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
}
