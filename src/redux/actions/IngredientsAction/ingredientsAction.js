import { IngredientsActionTypes } from "./actionType";
import * as API from "../../../Api/ingredinetApi";

export const getIngredientsList = () => (dispatch) =>
  dispatch({
    type: IngredientsActionTypes.GET_INGREDIENTS,
    payload: API.getIngredinetsList()
    .then(response => {
        return response.data.ingredients;
    })
    .catch((error) => {
        console.log(error);
        // errorHandler(error);
        return error;
      })
  });
