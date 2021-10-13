import { combineReducers } from 'redux';
import { recipeReducer } from './recipes/recipeReducer';
import {authReducer} from './users/authReducer';
import {historyReducer} from './users/historyReducer';
import {ingredientsReducer} from './ingredients/ingredientsReducer';

const reducers = combineReducers({
        recipeReducer,
        authReducer,
        historyReducer,
        ingredientsReducer
});

export default reducers;
