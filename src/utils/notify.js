import { toast } from "react-toastify";

export const defaultOptions = {
  position: "bottom-left",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
};

export const notify = ({ message = "", options = defaultOptions }) => {
  const replaceOptions = Object.assign({}, defaultOptions, options);

  console.log("replaceOptions:.", replaceOptions);

  return toast.info(message, replaceOptions);
};
