
import { toast } from 'react-toastify';

// toast configuration
toast.configure({
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: true,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnVisibilityChange: true,
    draggable: true,
    pauseOnHover: true
});

export enum messageStatus {
    Success = 'success',
    Error = 'error',
    Warning = 'warning',
}

const Toast = (message: string, type: messageStatus) => {
    return toast[type](message);
};

export default Toast;
