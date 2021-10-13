import { AuthActionTypes } from "./actionType";
import * as API from "../../../Api/authAPI";
import store from "../../../redux/store/store";
import storage from "../../../utility/storage";
import { routes } from "../../../utility/constants/constants";

function getHistory() {
  const storeState = store.getState();
  const history = storeState.historyReducer.history;
  return history;
}
const history = getHistory();

export const signIn = (credentials) => (dispatch) =>
  dispatch({
    type: AuthActionTypes.SIGN_IN,
    payload: API.login(credentials)
      .then((response) => {
        if (
          response.data.success === true ||
          response.data.success === "true"
        ) {
          storage.set("token", response.data.token);
          storage.set("refresh_token", response.data.refresh_token);
          storage.set("user", response.data.user);
        }
        return response.data;
      })
      .catch((error) => {
        console.log(error);
        // errorHandler(error);
        return error;
      }),
  });

export const signUp = (data) => dispatch => 
dispatch({
    type: AuthActionTypes.SIGN_UP,
    payload: API.signUp(data)
      .then((response) => {
        if (
          response.data.success === true ||
          response.data.success === "true"
        ) {
          storage.set("token", response.data.token);
          storage.set("refresh_token", response.data.refresh_token);
          storage.set("user", response.data.user);
        }
        return response.data;
      })
      .catch((error) => {
        console.log(error);
        // errorHandler(error);
        return error;
      }),
  });

export const logout = (message) => (dispatch) => {
  storage.remove("token");
  storage.remove("user");
  storage.remove("refresh_token");
  window.location.replace(routes.SIGN_IN);
};
