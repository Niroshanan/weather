import { toast } from 'react-toastify';

export const appToast = (message, type) => (
    toast(message, {
        autoClose: false,
        type: type
    })
)