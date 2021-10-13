import React, { useState, useEffect } from "react";
import Card from "../../Components/Card/card";
import ReactSelect from "../../Components/Select/ReactSelect";
import {
  Cuisine,
  Ingredients,
  Status,
} from "../../utility/constants/constants";
import RecipeDetails from "../../Components/RecipeDetails/recipeDetails";
import { useSelector, useDispatch } from "react-redux";
import {
  getRecipeList,
  filterRecipeList,
} from "../../redux/actions/recipeActions/recipeAction";

const IngredientsContainer = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // code to run on component did mount
    // dispatch(getIngredientList());
  }, []);

  useEffect(() => {
    // dispatch(filterRecipeList(recipeSearchObject));
  }, []);

  const isOpenModal = useSelector(
    (state) => state.recipeReducer.openIngredientModal
  );
  const ingredientList = useSelector((state) => state.recipeReducer.ingredientList);

  const filterRecipes = (name, value) => {
    // setRecipeSearchObject((state) => ({
    //   recipeName: name === "recipeName" ? value : state.recipeName,
    //   status: name === "status" ? value.value : state.status,
    //   cuisine: name === "cuisine" ? value.value : state.cuisine,
    //   ingredients:
    //     name === "ingredients" ? value.map((v) => v.value) : state.ingredients,
    // }));
  };

  return (
    <>
      <header id="ingredient-page-header">
        <div className="container">
          <div className="row">
            <div className="col-md-6 m-auto text-center">
              {/* <h1>Ingredients</h1> */}
              {/* <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas,
                temporibus?
              </p> */}
            </div>
          </div>
        </div>
      </header>

      {/* SEARCH SECTION */}
      <div style={{ margin: "10px" }}>
        <div className="form-inline ml-1  mt-4">
          <input
            type="text"
            name="recipeName"
            className="form-control mr-3 mt-3"
            placeholder="Search Recipe"
            onChange={(e) => filterRecipes(e.target.name, e.target.value)}
          />
        </div>
      </div>
      {/* <!-- BLOG SECTION --> */}
      <section id="blog" className="py-3 recipes-block">
        <div className="container recipes_list">
          <div className="row">
            <div className="col">
              <div className="card-columns"></div>
            </div>
          </div>
        </div>
        {/* {isOpenModal ? <RecipeDetails /> : null} */}
      </section>
    </>
  );
};

export default IngredientsContainer;
