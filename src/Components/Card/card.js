import React from "react";
import Rating from "../Rating/rating";
import { useDispatch } from "react-redux";
import { openRecipeModal } from "../../redux/actions/recipeActions/recipeAction";

const Card = (props) => {
  const dispatch = useDispatch();

  const {recipe} = props;

  return (
    <>
      <div className="card">
        <div
          className="cardData"
          data-toggle="modal"
          data-target="#loginModal"
          data-backdrop="static"
          data-keyboard="false"
          onClick={() => dispatch(openRecipeModal({recipe, isRecipeReadOnly: true}))}
        >
          <img
            src={recipe.img}
            alt=""
            className="img-fluid card-img-top recipeCardImage"
          />
          <div className="card-body">
            <h4 className="card-title">{recipe.recipeName}</h4>
            <div className="recipe-data">
              <small className="text-muted">{`Recipe by ${recipe.submittedBy.name} on ${recipe.createdAt}`}</small>
              <small className="text-muted">{recipe.cuisine.name}</small>
            </div>
            <div className="recipe-data mt-2">
              <small className="text-muted">{recipe.calories}</small>
              <small className="text-muted">{`${recipe.time} mints`}</small>
            </div>
            <div className="recipe-data mt-2">
              <small className="text-muted">
                <i className="fas fa-dollar-sign fa-1x mr-1 mb-2" />
                {recipe.cost}
              </small>
              {recipe.isHealthy ?
              <small className="font-weight-bold veg">
                <i className="fas fa-check fa-1x mr-1 mb-2 veg" />
                 Healthy 
              </small>
              : null}
            </div>
          </div>
        </div>
        <div className="card-footer">
          <div className="card-actions">
            <i className="fas fa-edit fa-1x mb-2 clickIcons" />
            <i className="fas fa-trash fa-1x mb-2 clickIcons" />
            <Rating readOnly={true} value={recipe.ratings} />
            {/* <i className="fas fa-circle fa-1x mb-2 veg" /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
