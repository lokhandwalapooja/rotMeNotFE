import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, compose, applyMiddleware } from 'redux'
import reducers from '../reducers';
let composeEnhancers;

const configureStore = () => {
    let middlewares = [thunkMiddleware, promiseMiddleware];

    if (process.env.NODE_ENV === 'production') {
        composeEnhancers = compose(applyMiddleware(...middlewares));
    } else {
        middlewares.push(loggerMiddleware);
        composeEnhancers = composeWithDevTools(
            applyMiddleware(...middlewares)
        );
    }
    return createStore(reducers, composeEnhancers);
}

export default configureStore();