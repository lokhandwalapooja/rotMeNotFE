import store from '../../redux/store/store';

const authInterceptor = (config) => {
    const state = store.getState();
    if (state.recipeReducer.token) {
        config.headers.common['Authorization'] = 'Bearer ' + state.authReducer.token;
    }
    return config;
}

export default authInterceptor;