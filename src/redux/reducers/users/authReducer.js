import { AuthActionTypes } from '../../actions/userAction/actionType';
import storage from '../../../utility/storage';

const token = storage.get("token", null);
const refresh_token = storage.get("refresh_token", null);
const user = storage.get("user", null);

export const initialState = {
    token: token,
    refresh_token: refresh_token,
    user: user,
    isLoginPending: false
}

const updateObject = (oldState, updatedProps) => {
    return {
        ...oldState,
        ...updatedProps
    }
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case AuthActionTypes.SIGN_IN_PENDING:
            return updateObject(state, { isLoginPending: true });
        case AuthActionTypes.SIGN_IN_FULFILLED:
            return updateObject(state, {
                isLoginPending: false,
                user: action.payload ? action.payload.user : state.user,
                token: action.payload ? action.payload.token : null,
                refresh_token: action.payload ? action.payload.refreshToken : null,
            });

        default: return state;
    }
}
