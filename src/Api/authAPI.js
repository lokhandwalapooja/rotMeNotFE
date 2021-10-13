import axios from '../config';
// import storage from '../utility/storage';
// import { values } from 'lodash';
// const pureAxios = require('axios');

const headers = {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
}

export const login = (credentials) => {
    debugger;
    return axios.post('auth/login', credentials);
};

export const signUp = (credentials) => {
    return axios.post('auth/signup', credentials, { headers });
};
