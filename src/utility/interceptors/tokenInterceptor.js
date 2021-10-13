import store from '../../redux/store/store';
import { TostType } from '../constants/constants';
import { ReactTostify } from '../utility';

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
            ReactTostify(response.data.error.message, TostType.ERROR);
        }
    }

    if (response.data.code) {
        if (response.data.message !== 'Signature has expired') {
             // Displaying error messaage
             ReactTostify(response.data.message, TostType.ERROR);
        }
    }
    
    return response;
}

export default tokenInterceptor;