import $ from "jquery";
import { toast } from 'react-toastify';
import { TostType } from './constants/constants';

export const closeModel = () => {
    $("[data-dismiss=modal]").trigger({ type: "click" });
}

export const ReactTostify = (msg, tostType) => {
    if (TostType.SUCCESS === tostType) {
        return (
            toast.success(`${msg}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: '',
            }))
    } else if (TostType.ERROR === tostType) {
        return (
            toast.error(`${msg}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: '',
            })
        )
    } else if (TostType.WARNING === tostType) {
        return (
            toast.warn(`${msg}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: '',
            })
        )
    } else if (TostType.INFO === tostType) {
        return (
            toast.info(`${msg}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: '',
            })
        )
    }
}

export const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});