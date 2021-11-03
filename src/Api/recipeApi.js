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

export const deleteRecipe = (id) => {
    return axios.post('recipe/delete', {id});
}