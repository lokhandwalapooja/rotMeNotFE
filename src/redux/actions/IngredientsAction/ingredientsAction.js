import { IngredientsActionTypes } from "./actionType";
import * as API from "../../../Api/ingredinetApi";
import { closeModel, ReactTostify } from "../../../utility/utility";
import { TostType } from "../../../utility/constants/constants";

export const getIngredientsList = () => (dispatch) =>
  dispatch({
    type: IngredientsActionTypes.GET_INGREDIENTS,
    payload: API.getIngredinetsList()
      .then((response) => {
        return response.data.ingredients;
      })
      .catch((error) => {
        console.log(error);
        // errorHandler(error);
        return error;
      }),
  });

export const editIngredientClicked = (ingredient) => (dispatch) => {
  dispatch({
    type: IngredientsActionTypes.EDIT_INGREDIENT_CLICKED,
    payload: ingredient,
  });
};

export const addIngredientClicked = () => (dispatch) => {
  dispatch({
    type: IngredientsActionTypes.ADD_INGREDIENT_CLICKED,
  });
};

export const addIngredient = (data) => (dispatch) => {
  dispatch({
    type: IngredientsActionTypes.ADD_INGREDIENT,
    payload: API.addIngredientData(data).then((response) => {
      closeModel();
      ReactTostify("Ingredient Successfully Added", TostType.SUCCESS);
      dispatch(getIngredientsList());
    }),
  });
};

export const updateIngredient =
  ({ name, id }) =>
  (dispatch) => {
    dispatch({
      type: IngredientsActionTypes.UPDATE_INGREDIENT,
      payload: API.updateIngredientData(name, id).then((response) => {
        closeModel();
        ReactTostify("Ingredient Successfully Updated", TostType.SUCCESS);
        return response.data.ingredients;
      }),
    });
  };

export const closeIngredientModal = () => (dispatch) => {
  dispatch({
    type: IngredientsActionTypes.CLOSE_INGREDIENT_MODAL,
  });
};
