import axios from '../config';

export const getAllRecipes = () => {
    return axios.get('recipe/list');
}

export const getPublishedRecipes = () => {
    return axios.post('recipe/search');
}

export const getMyRecipes = () => {
    return axios.get('recipe/my/collection');
}

export const addRecipe = (data) => {
    return axios.post('recipe/add', data);
}

export const submitRecipe = (data) => {
    return axios.post('recipe/submit', data);
}

export const deleteRecipe = (id) => {
    return axios.post('recipe/delete', {id});
}

export const giveRating = (id, rating) => {
    return axios.post('recipe/rate', {id, rating})
}

export const approveRecipe = (id) => {
    return axios.post('recipe/approve', {id})
}

export const rejectRecipe = (id) => {
    return axios.post('recipe/reject', {id})
}