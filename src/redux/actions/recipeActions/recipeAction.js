import { RecipeActionTypes, MiscActionTypes } from "./actionType";
import RecipeListJsonData from "../../../Stubs/RecipeLists.json";
import * as API from "../../../Api/recipeApi";
import { closeModel, ReactTostify } from "../../../utility/utility";
import {
  Roles,
  RecipeStatus,
  TostType,
  routes,
} from "../../../utility/constants/constants";
import cloneDeep from "clone-deep";
// import store from "../../store/store";

// function getHistory() {
//   const storeState = store.getState();
//   const history = storeState.historyReducer.history;
//   return history;
// }

export const getRecipeList = () => (dispatch, getState) => {
  const user = getState().authReducer.user;
  dispatch({
    type: RecipeActionTypes.GET_RECIPES_LIST,
    payload:
      user.role === Roles.ADMIN
        ? API.getAllRecipes()
            .then((response) => {
              return response.data.recipes;
            })
            .catch((error) => {
              console.log(error);
            })
        : API.getPublishedRecipes()
            .then((response) => {
              return response.data.recipes;
            })
            .catch((error) => {
              console.log(error);
            }),
  });
};

export const getMyRecipies = () => (dispatch) =>
  dispatch({
    type: RecipeActionTypes.GET_MY_RECIPES_LIST,
    payload: API.getMyRecipes()
      .then((response) => {
        return response.data.recipes;
      })
      .catch((error) => {
        console.log(error);
      }),
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
        .then((response) => {
          recipeList.push(response.data.recipe);
          closeModel();
          return recipeList;
        })
        .catch((error) => {
          console.log(error);
        }),
    });
  };
};

export const submitUserRecipe = (data) => {
  return (dispatch, getState) => {
    const recipeList = getState().recipeReducer?.recipeList;
    dispatch({
      type: RecipeActionTypes.ADD_RECIPE,
      payload: API.submitUserRecipe(data)
        .then((response) => {
          closeModel();
          return recipeList;
        })
        .catch((error) => {
          console.log(error);
        }),
    });
  };
};

export const editRecipe = (data) => {
  return (dispatch, getState) => {
    const recipeList = getState().recipeReducer?.recipeList;
    dispatch({
      type: RecipeActionTypes.EDIT_RECIPE,
      payload: API.editRecipe(data)
        .then((response) => {
          let index = recipeList.findIndex(
            (f) => f._id === response.data.recipe._id
          );
          recipeList[index] = response.data.recipe;
          closeModel();
          return recipeList;
        })
        .catch((error) => {
          console.log(error);
        }),
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

export const giveRating = (id, value, currentState) => (dispatch) => {
   
  dispatch({
    type: RecipeActionTypes.GIVE_RATING,
    payload: API.giveRating(id, value)
      .then((response) => {
        ReactTostify(response.data.Message, TostType.SUCCESS);
         
        dispatch(getFilteredRecipe(currentState));
      })
      .catch((error) => {
        console.log(error);
      }),
  });
};

export const approveRecipe = (id) => (dispatch) => {
  dispatch({
    type: RecipeActionTypes.APPROVE_RECIPE,
    payload: API.approveRecipe(id)
      .then((response) => {
        closeModel();
        ReactTostify(response.data.Message, TostType.SUCCESS);
        dispatch(getFilteredRecipe(RecipeStatus.PENDING));
      })
      .catch((error) => {
        console.log(error);
      }),
  });
};

export const rejectRecipe = (id) => (dispatch) => {
  dispatch({
    type: RecipeActionTypes.REJECT_RECIPE,
    payload: API.rejectRecipe(id)
      .then((response) => {
        closeModel();
        ReactTostify(response.data.Message, TostType.SUCCESS);
        dispatch(getFilteredRecipe(RecipeStatus.PENDING));
      })
      .catch((error) => {
        console.log(error);
      }),
  });
};

export const filterRecipeList = (recipeObject, pathname) => (dispatch, getState) => {
  let FilteredRecipeList = null;
  let recipeList = cloneDeep(
    // pathname === routes.MY_RECIPIES ? getState().recipeReducer?.myRecipeList :
    getState().recipeReducer?.recipeList);
  // getState().recipeReducer.recipeList;
 
  FilteredRecipeList = recipeList?.filter((recipe) => {
     
    return (
      (
        recipe.name
          .trim()
          .toLowerCase()
          .indexOf(recipeObject.recipeName.trim().toLowerCase()) > -1 &&
        // recipe.status
        //   .trim()
        //   .toLowerCase()
        //   .indexOf(recipeObject.status.trim().toLowerCase()) > -1 &&
        recipe.cuisineId
          .toString()
          .trim()
          .toLowerCase()
          .indexOf(recipeObject.cuisine.toString().trim().toLowerCase()) > -1 &&
        recipe.ingredients.filter(
          (i) => recipeObject.ingredients.indexOf(i.ingredient) > -1
        )
      ).length === recipeObject.ingredients.length
    );
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
      .then((response) => {
        dispatch(getRecipeList());
      })
      .catch((error) => {
        console.log(error);
      }),
  });
};

export const getFilteredRecipe = (value) => (dispatch, getState) => {
  const user = getState().authReducer.user;
  if (user.role === Roles.USER) {
    dispatch({
      type: RecipeActionTypes.GET_RECIPES_LIST,
      payload: API.getPublishedRecipes()
        .then((response) => {
          return response.data.recipes;
        })
        .catch((error) => {
          console.log(error);
        }),
    });
  } else if (user.role === Roles.ADMIN) {
    if (value === RecipeStatus.PUBLISHED) {
      dispatch({
        type: RecipeActionTypes.GET_RECIPES_LIST,
        payload: API.getPublishedRecipesList()
          .then((response) => {
            return response.data.recipes;
          })
          .catch((error) => {
            console.log(error);
          }),
      });
    } else if (value === RecipeStatus.REJECTED) {
      dispatch({
        type: RecipeActionTypes.GET_RECIPES_LIST,
        payload: API.getRejectedRecipesList()
          .then((response) => {
            return response.data.recipes;
          })
          .catch((error) => {
            console.log(error);
          }),
      });
    } else if (value === RecipeStatus.PENDING) {
      dispatch({
        type: RecipeActionTypes.GET_RECIPES_LIST,
        payload: API.getPendingRecipesList()
          .then((response) => {
            return response.data.recipes;
          })
          .catch((error) => {
            console.log(error);
          }),
      });
    }
  }
};
