import { toast } from 'react-toastify';

export const showErrorToast = (message) => {
  toast.error(message, {
    position: toast.POSITION.TOP_LEFT
  });
}

export const showSuccessToast = (message) => {
  toast.success(message, {
    position: toast.POSITION.TOP_LEFT
  });
}