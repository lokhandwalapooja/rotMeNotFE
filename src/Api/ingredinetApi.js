import axios from '../config';

const headers = {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
}

export const getIngredinetsList = () => {
    return axios.get('ingredient/list/all');
};