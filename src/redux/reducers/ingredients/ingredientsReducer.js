import { IngredientsActionTypes } from "../../actions/IngredientsAction/actionType";
import RecipeList from "../../../Stubs/RecipeLists.json";

export const initialState = {
  ingredientsList: null,
  ingredient: null,
  openIngredientModal: false,
  isIngredientLoading: false,
  isLoading: false
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

    case IngredientsActionTypes.ADD_INGREDIENT_CLICKED:
      return updateObject(state, {
        openIngredientModal: true,
      });

    case IngredientsActionTypes.ADD_INGREDIENT_PENDING:
      return updateObject(state, {
        isIngredientLoading: true,
      });
    case IngredientsActionTypes.ADD_INGREDIENT_FULFILLED:
      return updateObject(state, {
        isIngredientLoading: false,
        openIngredientModal: false,
      });

    case IngredientsActionTypes.UPDATE_INGREDIENT_PENDING:
      return updateObject(state, {
        isIngredientLoading: true,
      });
    case IngredientsActionTypes.UPDATE_INGREDIENT_FULFILLED:
      return updateObject(state, {
        ingredientsList: action.payload,
        isIngredientLoading: false,
        openIngredientModal: false,
        ingredient: {},
      });

    case IngredientsActionTypes.EDIT_INGREDIENT_CLICKED:
      return updateObject(state, {
        ingredient: action.payload,
        openIngredientModal: true,
      });

    case IngredientsActionTypes.GET_INGREDIENT:
      return updateObject(state, { recipe: action.payload });

    case IngredientsActionTypes.CLOSE_INGREDIENT_MODAL:
      return updateObject(state, {
        openIngredientModal: false,
        ingredient: {},
      });

    default:
      return state;
  }
};
