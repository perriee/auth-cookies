import { toast } from 'react-toastify';

const showErrorToast = (message) => {
  toast.error(message, {
    position: "top-right",
  });
};

const showSuccessToast = (message) => {
  toast.success(message, {
    position: "top-right",
  });
};

export { showErrorToast, showSuccessToast };
