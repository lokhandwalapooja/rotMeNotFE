import axios from 'axios';
import swal from 'sweetalert';

export default function errorHandler(error) {
    if (axios.isCancel(error)) {
        return Promise.reject(error);
    }
    if (error.data && !error.data.error.message.includes('401')) {
        swal({
            icon: '',
            title: 'Oops!',
            text: error.data.error.message,
            className: 'error-handler-modal'
        });
    } else if (error.message && !error.message.includes('401')) {
        swal({
            icon: '',
            title: 'Oops!',
            text: error.message,
            className: 'error-handler-modal'
        });
    }

    return Promise.reject(error.message);
}
