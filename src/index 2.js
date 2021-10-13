import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./scss/style.scss";
import "./scss/bootstrap.scss";
import authInterceptor from "./utility/interceptors/authInterceptor";
import tokenInterceptor from "./utility/interceptors/tokenInterceptor";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import errorHandler from "./utility/errorHandler/errorHandler";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "./config";

axios.interceptors.request.use(authInterceptor, (error) =>
  Promise.reject(error)
);
axios.interceptors.response.use(tokenInterceptor, errorHandler);

const app = (
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
