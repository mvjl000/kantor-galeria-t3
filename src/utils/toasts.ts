import { toast } from "react-toastify";

export const errorToast = (message: string) =>
  toast.error(message, {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 3500,
  });
