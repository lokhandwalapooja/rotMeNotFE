import { RecipeActionTypes, MiscActionTypes } from "./actionType";
import RecipeListJsonData from "../../../Stubs/RecipeLists.json";
// import store from "../../store/store";

// function getHistory() {
//   const storeState = store.getState();
//   const history = storeState.historyReducer.history;
//   return history;
// }

export const getRecipeList = (data) => (dispatch) =>
  dispatch({
    type: RecipeActionTypes.GET_RECIPES_LIST,
    payload: data,
  });

export const getRecipe = (id) => {
  return (dispatch, getState) => {
    const data = getState().deviceReducer?.recipeList ? getState().deviceReducer?.recipeList : RecipeListJsonData;
    let index = data.findIndex((f) => f.id === id);
    const equipment = data[index];
     
    dispatch({
      type: RecipeActionTypes.GET_EQUIPMENT,
      payload: equipment,
    });
  };
};

export const openRecipeModal = ({recipe, isRecipeReadOnly}) => (dispatch) =>
  dispatch({
    type: RecipeActionTypes.RECIPE_SELECTED,
    payload: {recipe, isRecipeReadOnly},
  });

  export const closeRecipeModal = () => (dispatch) =>
  dispatch({
    type: RecipeActionTypes.CLOSE_RECIPE_MODAL,
  });