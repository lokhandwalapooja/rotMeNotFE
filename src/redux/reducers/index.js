import { combineReducers } from 'redux';
import { recipeReducer } from './recipes/recipeReducer';
import {authReducer} from './users/authReducer';
import {historyReducer} from './users/historyReducer';

const reducers = combineReducers({
        recipeReducer,
        authReducer,
        historyReducer
});

export default reducers;
