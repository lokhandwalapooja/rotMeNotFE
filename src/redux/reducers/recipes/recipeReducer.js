import { RecipeActionTypes } from "../../actions/recipeActions/actionType";

export const initialState = {
  token: true,
  recipeList: null,
  recipe: null
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
      return updateObject(state, { recipeList: action.payload });

      case RecipeActionTypes.GET_RECIPE:
        return updateObject(state, { recipe: action.payload });
    default:
      return state;
  }
};
