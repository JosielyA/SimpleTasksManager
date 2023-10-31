import { ToastContainer } from "react-toastify";

//Contenedor de notificaciones
function NotifyContainer() {
  return (
    <ToastContainer
      position="top-center"
      autoClose={3000}
      limit={3}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  );
}

export default NotifyContainer;
