import axios from '../config';

const headers = {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
}

export const getIngredinetsList = () => {
    return axios.get('ingredient/list/all');
<<<<<<< HEAD
};

export const addIngredientData = (data) => {
    return axios.post('ingredient/add', data);
}

export const updateIngredientData = (name, id) => {
    return axios.post('ingredient/edit',{name, id})
}
=======
};
>>>>>>> 8879fb41a437e547c83d351a05620fdd333852f9
