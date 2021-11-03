import { RecipeActionTypes } from "../../actions/recipeActions/actionType";
import RecipeList from '../../../Stubs/RecipeLists.json';

export const initialState = {
  recipeList: null,
  recipe: null,
  openRecipeModal: false,
  isRecipeReadOnly: true,
  myRecipeList: null
};

const updateObject = (oldState, updatedProps) => {
  return {
    ...oldState,
    ...updatedProps,
  };
};

export const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    

    case RecipeActionTypes.GET_RECIPES_LIST_PENDING:
      return updateObject(state, { isLoading: true });
    case RecipeActionTypes.GET_RECIPES_LIST_FULFILLED:
      return updateObject(state, { isLoading: false ,recipeList: action.payload });

      case RecipeActionTypes.GET_MY_RECIPES_LIST_PENDING:
        return updateObject(state, { isLoading: true });
      case RecipeActionTypes.GET_MY_RECIPES_LIST_FULFILLED:
        return updateObject(state, { isLoading: false ,myRecipeList: action.payload });

        
    case RecipeActionTypes.GET_RECIPE:
      return updateObject(state, { recipe: action.payload });

    case RecipeActionTypes.ADD_RECIPE_PENDING:
      return updateObject(state, {isLoading: true});
    case RecipeActionTypes.ADD_RECIPE_FULFILLED:
      return updateObject(state, {recipeList: action.payload});

    case RecipeActionTypes.RECIPE_SELECTED:
      return updateObject(state, { recipe: action.payload.recipe , openRecipeModal: true, isRecipeReadOnly: action.payload.isRecipeReadOnly});

    case RecipeActionTypes.CLOSE_RECIPE_MODAL:
      return updateObject(state, {openRecipeModal: false});

      case RecipeActionTypes.FILTER_RECIPE_LIST:
        return updateObject(state, {recipeList: action.payload})
    default:
      return state;
  }
};
