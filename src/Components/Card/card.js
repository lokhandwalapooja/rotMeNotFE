import React from "react";
import Rating from "../Rating/rating";
import { useDispatch } from "react-redux";
import {
  deleteRecipe,
  openRecipeModal,
} from "../../redux/actions/recipeActions/recipeAction";
import { useSelector } from "react-redux";
import moment from "moment";
import { Roles } from "../../utility/constants/constants";

const Card = (props) => {
  const dispatch = useDispatch();

  const role = useSelector((state) => state.authReducer?.user?.role);

  const { recipe } = props;

  return (
    <>
      <div className="card" style={{ margin: 15 }}>
        <div
          className="cardData"
          data-toggle="modal"
          data-target="#recipeModal"
          data-backdrop="static"
          data-keyboard="false"
          onClick={() =>
            dispatch(openRecipeModal({ recipe, isRecipeReadOnly: true }))
          }
        >
          <img
            src={recipe.img}
            alt=""
            className="img-fluid card-img-top recipeCardImage"
          />
          <div className="card-body">
            <h4 className="card-title">{recipe.name}</h4>
            <div className="recipe-data">
              <small className="text-muted">{`Recipe by ${
                recipe.submittedUser
              } on ${moment(recipe.createdAt).format("MM/DD/YYYY")}`}</small>
              <small className="text-muted">{recipe.cuisine?.name}</small>
            </div>
            <div className="recipe-data mt-2">
              <small className="text-muted">{`${recipe.calories} Kcal`}</small>
              <small className="text-muted">{`${recipe.timeToPrepare} mints`}</small>
            </div>
            <div className="recipe-data mt-2">
              <small className="text-muted">
                <i className="fas fa-dollar-sign fa-1x mr-1 mb-2" />
                {recipe.cost}
              </small>
              {recipe.isHealthy ? (
                <small className="font-weight-bold veg">
                  <i className="fas fa-check fa-1x mr-1 mb-2 veg" />
                  Healthy
                </small>
              ) : null}
            </div>
          </div>
        </div>
        <div className="card-footer">
          <div className="card-actions">
            {role === Roles.ADMIN ? (
              <>
                <i
                  className="fas fa-edit fa-1x mb-2 clickIcons"
                  data-toggle="modal"
                  data-target="#recipeModal"
                  data-backdrop="static"
                  data-keyboard="false"
                  onClick={() =>
                    dispatch(
                      openRecipeModal({ recipe, isRecipeReadOnly: false })
                    )
                  }
                />
                <i
                  className="fas fa-trash fa-1x mb-2 clickIcons"
                  onClick={() => dispatch(deleteRecipe(recipe._id))}
                />
              </>
            ) : null}
            <Rating readOnly={true} value={recipe.ratings} />
            {/* <i className="fas fa-circle fa-1x mb-2 veg" /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
