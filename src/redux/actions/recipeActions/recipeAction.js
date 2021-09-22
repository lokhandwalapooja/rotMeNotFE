import { RecipeActionTypes, MiscActionTypes } from "./actionType";
import RecipeListJsonData from "../../../Stubs/RecipeLists.json";
// import store from "../../store/store";

// function getHistory() {
//   const storeState = store.getState();
//   const history = storeState.historyReducer.history;
//   return history;
// }

export const getRecipeList = () => (dispatch) =>
  dispatch({
    type: RecipeActionTypes.GET_RECIPES_LIST,
  });

export const getRecipe = (id) => {
  return (dispatch, getState) => {
    const data = getState().deviceReducer?.recipeList
      ? getState().deviceReducer?.recipeList
      : RecipeListJsonData;
    let index = data.findIndex((f) => f.id === id);
    const equipment = data[index];

    dispatch({
      type: RecipeActionTypes.GET_EQUIPMENT,
      payload: equipment,
    });
  };
};

export const openRecipeModal =
  ({ recipe, isRecipeReadOnly }) =>
  (dispatch) =>
    dispatch({
      type: RecipeActionTypes.RECIPE_SELECTED,
      payload: { recipe, isRecipeReadOnly },
    });

export const closeRecipeModal = () => (dispatch) =>
  dispatch({
    type: RecipeActionTypes.CLOSE_RECIPE_MODAL,
  });

export const filterRecipeList = (recipeObject) => (dispatch, getState) => {
  let FilteredRecipeList = null;
  let recipeList = RecipeListJsonData;
  // getState().recipeReducer.recipeList;
  FilteredRecipeList = recipeList.filter((recipe) => {
    return (
      recipe.recipeName
        .trim()
        .toLowerCase()
        .indexOf(recipeObject.recipeName.trim().toLowerCase()) > -1 &&
      recipe.status
        .trim()
        .toLowerCase()
        .indexOf(recipeObject.status.trim().toLowerCase()) > -1 &&
      recipe.cuisine.id
        .toString()
        .trim()
        .toLowerCase()
        .indexOf(recipeObject.cuisine.toString().trim().toLowerCase()) > -1 &&
      recipe.ingredients.filter((i) =>
        i.ingredientId
          .toString()
          .trim()
          .toLowerCase()
          .indexOf(
            recipeObject.ingredients?.map((ing) =>
              ing.toString().trim().toLowerCase()
            )
          ) > -1
      )
    );
  });
  dispatch({
    type: RecipeActionTypes.FILTER_RECIPE_LIST,
    payload: FilteredRecipeList,
  });
};
