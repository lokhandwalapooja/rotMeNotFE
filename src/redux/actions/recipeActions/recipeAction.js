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
    type: DeviceActionTypes.GET_EQUIPMENT_LIST,
    payload: data,
  });

export const getRecipe = (id) => {
  return (dispatch, getState) => {
    const data = getState().deviceReducer?.recipeList ? getState().deviceReducer?.recipeList : RecipeListJsonData;
    let index = data.findIndex((f) => f.id === id);
    const equipment = data[index];
     
    dispatch({
      type: DeviceActionTypes.GET_EQUIPMENT,
      payload: equipment,
    });
  };
};
