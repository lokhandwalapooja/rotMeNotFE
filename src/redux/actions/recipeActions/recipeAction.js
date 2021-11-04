import { RecipeActionTypes, MiscActionTypes } from "./actionType";
import RecipeListJsonData from "../../../Stubs/RecipeLists.json";
import * as API from "../../../Api/recipeApi";
import { closeModel, ReactTostify } from "../../../utility/utility";
import { Roles, TostType } from "../../../utility/constants/constants";
// import store from "../../store/store";

// function getHistory() {
//   const storeState = store.getState();
//   const history = storeState.historyReducer.history;
//   return history;
// }

export const getRecipeList = () => (dispatch, getState) =>
 { 
  const user = getState().authReducer.user;
  dispatch({
    type: RecipeActionTypes.GET_RECIPES_LIST,
    payload: user.role === Roles.ADMIN ? API.getAllRecipes()
    .then(response => {        
      return response.data.recipes;
    })
    .catch(error => {
      console.log(error);
    }) : API.getPublishedRecipes()
      .then(response => {        
        return response.data.recipes;
      })
      .catch(error => {
        console.log(error);
      })
  })}

  export const getMyRecipies = () => (dispatch) =>
   dispatch({
     type: RecipeActionTypes.GET_MY_RECIPES_LIST,
     payload: API.getMyRecipes()
     .then(response => {        
       return response.data.recipes;
     })
     .catch((error) => {
       console.log(error);
     })
    });
     
export const getRecipe = (id) => {
  return (dispatch, getState) => {
    const data = getState().recipeReducer?.recipeList;
    let index = data.findIndex((f) => f.id === id);
    const equipment = data[index];

    dispatch({
      type: RecipeActionTypes.GET_EQUIPMENT,
      payload: equipment,
    });
  };
};

export const addRecipe = (data) => {
  return (dispatch, getState) => {
    const recipeList = getState().recipeReducer?.recipeList;
    dispatch({
      type: RecipeActionTypes.ADD_RECIPE,
      payload: API.addRecipe(data)
      .then(response => {
        recipeList.push(response.data.recipe);
        closeModel();
        return recipeList
      })
      .catch(error => {
        console.log(error);
      }),
    });
  }
}

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

export const giveRating = (id, value) => (dispatch) => {
  dispatch({
    type: RecipeActionTypes.GIVE_RATING,
    payload: API.giveRating(id, value)
    .then(response => {
      ReactTostify(response.data.Message, TostType.SUCCESS);
      dispatch(getRecipeList())
    })
    .catch(error => {
      console.log(error);
    })
  })
}

export const filterRecipeList = (recipeObject) => (dispatch, getState) => {
  let FilteredRecipeList = null;
  let recipeList = getState().recipeReducer?.recipeList;
  // getState().recipeReducer.recipeList;
  
  FilteredRecipeList = recipeList?.filter((recipe) => {
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
            recipeObject.ingredients.indexOf(i.id) > -1
      )).length === recipeObject.ingredients.length;
  });
  
  dispatch({
    type: RecipeActionTypes.FILTER_RECIPE_LIST,
    payload: FilteredRecipeList,
  });
};

export const deleteRecipe = (id) => (dispatch) => {
  dispatch({
    type: RecipeActionTypes.DELETE_RECIPE,
    payload: API.deleteRecipe(id)
    .then(response => {
      dispatch(getRecipeList());
    })
    .catch(error => {
      console.log(error);
    })
  })
}