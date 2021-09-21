import store from '../../redux/store/store';

const tokenInterceptor = (response) => {
    // authorize only if it's not impersonation
    if (response.data.user &&
        (response.data.user.token || response.data.token)) {
            // checking userAuthorization
        // store.dispatch(actions.authorizeUser(response.data.user));
    }
    if (response.data.error) {
        if (response.data.error.message !== 'Signature has expired') {
            // Displaying error messaage
            // toastMsg(response.data.error.message, true, 5000);
        }
    }

    if (response.data.code) {
        if (response.data.message !== 'Signature has expired') {
             // Displaying error messaage
            // toastMsg(response.data.message, true, 5000);
        }
    }
    return response;
}

export default tokenInterceptor;