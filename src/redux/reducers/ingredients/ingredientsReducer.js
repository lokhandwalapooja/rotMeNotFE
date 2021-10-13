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

<<<<<<< HEAD
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

=======
>>>>>>> 8879fb41a437e547c83d351a05620fdd333852f9
    case IngredientsActionTypes.GET_INGREDIENT:
      return updateObject(state, { recipe: action.payload });

    case IngredientsActionTypes.CLOSE_INGREDIENT_MODAL:
<<<<<<< HEAD
      return updateObject(state, {
        openIngredientModal: false,
        ingredient: {},
      });
=======
      return updateObject(state, { openRecipeModal: false });
>>>>>>> 8879fb41a437e547c83d351a05620fdd333852f9

    default:
      return state;
  }
};
