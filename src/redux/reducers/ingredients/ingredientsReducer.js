import { IngredientsActionTypes } from "../../actions/IngredientsAction/actionType";
import RecipeList from "../../../Stubs/RecipeLists.json";

export const initialState = {
  ingredientsList: null,
  ingredient: null,
  openIngredientModal: false,
  isIngredientLoading: false,
};

const updateObject = (oldState, updatedProps) => {
  return {
    ...oldState,
    ...updatedProps,
  };
};

export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case IngredientsActionTypes.GET_INGREDIENTS_PENDING:
      return updateObject(state, { isIngredientLoading: true });
    case IngredientsActionTypes.GET_INGREDIENTS_FULFILLED:
      return updateObject(state, {
        isIngredientLoading: false,
        ingredientsList: action.payload,
      });

    case IngredientsActionTypes.GET_INGREDIENT:
      return updateObject(state, { recipe: action.payload });

    case IngredientsActionTypes.CLOSE_INGREDIENT_MODAL:
      return updateObject(state, { openRecipeModal: false });

    default:
      return state;
  }
};
