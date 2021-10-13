import { IngredientsActionTypes } from "./actionType";
import * as API from "../../../Api/ingredinetApi";
<<<<<<< HEAD
import { closeModel } from "../../../utility/utility";
=======
>>>>>>> 8879fb41a437e547c83d351a05620fdd333852f9

export const getIngredientsList = () => (dispatch) =>
  dispatch({
    type: IngredientsActionTypes.GET_INGREDIENTS,
    payload: API.getIngredinetsList()
<<<<<<< HEAD
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
      dispatch(getIngredientsList())
    }),
  });
};

export const updateIngredient = ({name, id}) => dispatch =>  {
    dispatch({
        type: IngredientsActionTypes.UPDATE_INGREDIENT,
        payload: API.updateIngredientData(name, id)
        .then(response => {
            closeModel();
            return response.data.ingredients;
        })
    })
}

export const closeIngredientModal = () => (dispatch) => {
  dispatch({
    type: IngredientsActionTypes.CLOSE_INGREDIENT_MODAL,
  });
};
=======
    .then(response => {
        return response.data.ingredients;
    })
    .catch((error) => {
        console.log(error);
        // errorHandler(error);
        return error;
      })
  });
>>>>>>> 8879fb41a437e547c83d351a05620fdd333852f9
