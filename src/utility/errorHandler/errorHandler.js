import axios from 'axios';
import swal from 'sweetalert';
import { TostType } from '../constants/constants';
import { ReactTostify } from '../utility';

export default function errorHandler(error) {
    if (axios.isCancel(error)) {
        return Promise.reject(error);
    }

    if (error.data && !error.data.error.message.includes('401')) {
        ReactTostify(error.data.error.message, TostType.ERROR);
    } else if (error.message && !error.message.includes('401')) {
        ReactTostify(error.message, TostType.ERROR);
    } else if(error.message.includes('401')) {
        ReactTostify("Invalid User Credentials", TostType.ERROR);
    }

    return Promise.reject(error.message);
}
