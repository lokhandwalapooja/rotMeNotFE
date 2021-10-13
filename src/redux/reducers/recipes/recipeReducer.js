import { RecipeActionTypes } from "../../actions/recipeActions/actionType";
import RecipeList from '../../../Stubs/RecipeLists.json';

export const initialState = {
  token: true,
  recipeList: null,
  recipe: null,
  openRecipeModal: false,
  isRecipeReadOnly: true
};

const updateObject = (oldState, updatedProps) => {
  return {
    ...oldState,
    ...updatedProps,
  };
};

export const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case RecipeActionTypes.GET_RECIPES_LIST:
      return updateObject(state, { recipeList: RecipeList });

    case RecipeActionTypes.GET_RECIPE:
      return updateObject(state, { recipe: action.payload });

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
