import React from "react"; // <-- Esse import é ESSENCIAL
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Alerts = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar
      newestOnTop
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss={false}
      draggable={false}
      pauseOnHover={false}
    />
  );
};

export default Alerts;
