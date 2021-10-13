import { combineReducers } from 'redux';
import { recipeReducer } from './recipes/recipeReducer';

const reducers = combineReducers({
        recipeReducer,
});

export default reducers;
