import React, { useState, useEffect } from "react";
import Card from "../../Components/Card/card";
import ReactSelect from "../../Components/Select/ReactSelect";
import {
  Cuisine,
  Ingredients,
  routes,
  Status,
} from "../../utility/constants/constants";
import RecipeDetails from "../../Components/RecipeDetails/recipeDetails";
import { useSelector, useDispatch } from "react-redux";
import {
  getRecipeList,
  filterRecipeList,
  openRecipeModal,
  getMyRecipies
} from "../../redux/actions/recipeActions/recipeAction";

const RecipeContainer = (props) => {
  const dispatch = useDispatch();

  const [recipeSearchObject, setRecipeSearchObject] = useState({
    recipeName: "",
    status: "",
    cuisine: "",
    ingredients: [],
  });

  useEffect(() => {
    // code to run on component did mount
    if(props.history.location.pathname === routes.MY_RECIPIES) {
      dispatch(getMyRecipies());
    } else {
    dispatch(getRecipeList());
    }
  }, [props.history.location.pathname]);

  useEffect(() => {
    dispatch(filterRecipeList(recipeSearchObject));
  }, [recipeSearchObject]);

  const isOpenModal = useSelector(
    (state) => state.recipeReducer.openRecipeModal
  );
  const recipeList = useSelector((state) =>
    props.history.location.pathname === routes.MY_RECIPIES ? 
    state.recipeReducer.myRecipeList :
    state.recipeReducer.recipeList);

  const recipies = () => {
    return recipeList?.map((r) => {
      return <Card recipe={r} />;
    });
  };

  const filterRecipes = (name, value) => {
    setRecipeSearchObject((state) => ({
      recipeName: name === "recipeName" ? value : state.recipeName,
      status: name === "status" ? value.value : state.status,
      cuisine: name === "cuisine" ? value.value : state.cuisine,
      ingredients:
        name === "ingredients" ? value?.map((v) => v.value) : state.ingredients,
    }));
  };

  return (
    <>
      <header id="page-header">
        <div className="container">
          <div className="row">
            <div className="col-md-6 m-auto text-center">
              <h1>Read Our Blog</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas,
                temporibus?
              </p>
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
          <ReactSelect
            options={Status}
            name="status"
            className="filters mr-3 mt-3"
            placeholder="Approved"
            onSelectChange={filterRecipes}
          />
          <ReactSelect
            options={Cuisine}
            name="cuisine"
            className="filters mr-3 mt-3"
            placeholder="Search Cusine"
            onSelectChange={filterRecipes}
          />
          <ReactSelect
            isMulti={true}
            name="ingredients"
            options={Ingredients}
            className="multi-filters mr-3 mt-3"
            placeholder="Search Ingredient"
            onSelectChange={filterRecipes}
          />
          <button
            className="clickIcons btn btn-primary"
            data-toggle="modal"
            data-target="#recipeModal"
            data-backdrop="static"
            data-keyboard="false"
            onClick={() =>
              dispatch(openRecipeModal({ recipe: {}, isRecipeReadOnly: false }))
            }
            style={{ marginTop: "14px", marginLeft: "10px" }}
          >
            Add Recipe
          </button>
          {/* <button className="btn btn-outline-primary">Search</button> */}
        </div>
      </div>
      {/* <!-- BLOG SECTION --> */}
      <section id="blog" className="py-3 recipes-block">
        <div className="container recipes_list">
          <div className="row">
              {recipies()}
            </div>
        </div>
        {isOpenModal ? <RecipeDetails /> : null}
      </section>
    </>
  );
};

export default RecipeContainer;
