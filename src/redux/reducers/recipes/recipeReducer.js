import { RecipeActionTypes } from "../../actions/recipeActions/actionType";
import RecipeList from "../../../Stubs/RecipeLists.json";

export const initialState = {
  recipeList: null,
  recipe: null,
  openRecipeModal: false,
  isRecipeReadOnly: true,
  myRecipeList: null,
  filteredRecipeList: null,
  isLoading: false
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
      return updateObject(state, {
        isLoading: false,
        recipeList: action.payload,
      });

    case RecipeActionTypes.GET_MY_RECIPES_LIST_PENDING:
      return updateObject(state, { isLoading: true });
    case RecipeActionTypes.GET_MY_RECIPES_LIST_FULFILLED:
      return updateObject(state, {
        isLoading: false,
        myRecipeList: action.payload,
      });

    case RecipeActionTypes.APPROVE_RECIPE_PENDING:
      return updateObject(state, { isLoading: true });
    case RecipeActionTypes.APPROVE_RECIPE_FULFILLED:
      updateObject(state, { isLoading: false });

    case RecipeActionTypes.REJECT_RECIPE_PENDING:
      return updateObject(state, { isLoading: true });
    case RecipeActionTypes.REJECT_RECIPE_FULFILLED:
      updateObject(state, { isLoading: false });

    case RecipeActionTypes.GET_RECIPE:
      return updateObject(state, { recipe: action.payload });

    case RecipeActionTypes.ADD_RECIPE_PENDING:
      return updateObject(state, { isLoading: true });
    case RecipeActionTypes.ADD_RECIPE_FULFILLED:
      return updateObject(state, { isLoading: false, recipeList: action.payload });

    case RecipeActionTypes.EDIT_RECIPE_PENDING:
      return updateObject(state, { isLoading: true });
    case RecipeActionTypes.EDIT_RECIPE_FULFILLED:
      return updateObject(state, {
        isLoading: false,
        recipeList: action.payload,
      });

    case RecipeActionTypes.RECIPE_SELECTED:
      return updateObject(state, {
        recipe: action.payload.recipe,
        openRecipeModal: true,
        isRecipeReadOnly: action.payload.isRecipeReadOnly,
      });

    case RecipeActionTypes.CLOSE_RECIPE_MODAL:
      return updateObject(state, { openRecipeModal: false });

    case RecipeActionTypes.FILTER_RECIPE_LIST:
      return updateObject(state, { filteredRecipeList: action.payload });
    default:
      return state;
  }
};
