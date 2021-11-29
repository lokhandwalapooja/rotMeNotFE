import React, { useState, useEffect } from "react";
import Card from "../../Components/Card/card";
import ReactSelect from "../../Components/Select/ReactSelect";
import {
  Cuisine,
  Ingredients,
  primaryColor,
  RecipeStatus,
  Roles,
  routes,
  Status,
  StatusOptions,
} from "../../utility/constants/constants";
import RecipeDetails from "../../Components/RecipeDetails/recipeDetails";
import { useSelector, useDispatch } from "react-redux";
import {
  getRecipeList,
  filterRecipeList,
  openRecipeModal,
  getMyRecipies,
  getFilteredRecipe
} from "../../redux/actions/recipeActions/recipeAction";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import { getIngredientsList } from "../../redux/actions/IngredientsAction/ingredientsAction";

const RecipeContainer = (props) => {

  // Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
display: block;
margin: 0 auto;
border-color: red;
`;

  const dispatch = useDispatch();

  const [recipeSearchObject, setRecipeSearchObject] = useState({
    recipeName: "",
    // status: "",
    cuisine: "",
    ingredients: [],
  });

  const [isSearch, setIsSearch] = useState(
    recipeSearchObject.recipeName !== "" || recipeSearchObject.cuisine !== "" || recipeSearchObject.ingredients.length > 0 
  );

  const [defaultStatus, setDefaultStatus] = useState(StatusOptions[0]);
  const [currentState, setCurrentState] = useState(StatusOptions[0].value);

  const role = useSelector((state) => state.authReducer?.user?.role);
  const isLoading = useSelector((state) => state.recipeReducer.isLoading);

  useEffect(() => {
    // code to run on component did mount
    if(props.history.location.pathname === routes.MY_RECIPIES) {
      dispatch(getMyRecipies());
    } else {
    dispatch(getFilteredRecipe(RecipeStatus.PUBLISHED));
    }
    setDefaultStatus(StatusOptions[0]);
    setRecipeSearchObject({
      recipeName: "",
      // status: "",
      cuisine: "",
      ingredients: []
    })
    dispatch(getIngredientsList());
  }, [props.history.location.pathname]);

  useEffect(() => {
    dispatch(filterRecipeList(recipeSearchObject,  props.history.location.pathname));
    setIsSearch(recipeSearchObject.recipeName !== "" || recipeSearchObject.cuisine !== "" || recipeSearchObject.ingredients.length > 0)
  }, [recipeSearchObject, props.history.location.pathname]);

  const isOpenModal = useSelector(
    (state) => state.recipeReducer.openRecipeModal
  );
  const recipeList = useSelector((state) =>
    props.history.location.pathname === routes.MY_RECIPIES ? 
    state.recipeReducer.myRecipeList :
    isSearch ? state.recipeReducer.filteredRecipeList : state.recipeReducer.recipeList)
  // state.recipeReducer.filteredRecipeList?.length > 0 ? state.recipeReducer.filteredRecipeList : 

  const recipies = () => {
    return recipeList?.map((r) => {
      return <Card recipe={r} />;
    });
  };

  const IngredientsOptions = useSelector((state) =>
    state.ingredientsReducer.ingredientsList?.map((i) => {
      return { value: i._id, label: i.name };
    })
  );

  const filterRecipes = (name, value) => {
    setRecipeSearchObject((state) => ({
      recipeName: name === "recipeName" ? value : state.recipeName,
      // status: name === "status" ? value.value : state.status,
      cuisine: name === "cuisine" ? value.value : state.cuisine,
      ingredients:
        name === "ingredients" ? value?.map((v) => v.value) : state.ingredients,
    }));
  };
 
  return (
    <>
      {/* <header id="page-header">
        <div className="container">
          <div className="row">
            <div className="col-md-6 m-auto text-center">
              {
                props.history.location.pathname === routes.MY_RECIPIES ?
                <h1>Are you an amature cook looking to share your recipes with the world?</h1> :
              <h1>ROT-ME-NOT has hand-picked expert chef for guidence who strive to share their knowledge.</h1> }
            </div>
          </div>
        </div>
      </header> */}

      {/* SEARCH SECTION */}
      {props.history.location.pathname !== routes.MY_RECIPIES  ? 
      <div style={{ margin: "10px" }}>
        <div className="form-inline ml-1  mt-4">
          <input
            type="text"
            name="recipeName"
            className="form-control mr-3 mt-3"
            placeholder="Search Recipe"
            onChange={(e) => filterRecipes(e.target.name, e.target.value)}
          />
          {props.history.location.pathname !== routes.MY_RECIPIES ?
          <ReactSelect
            options={StatusOptions}
            name="status"
            className="filters mr-3 mt-3"
            placeholder="Status"
            readOnly = {role === Roles.USER}
            value={defaultStatus}
            onSelectChange={(name, value) => 
              {
              setCurrentState(value.value);
              dispatch(getFilteredRecipe(value.value))}}
          /> : null }
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
            options={IngredientsOptions}
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
    : null}
      {/* <!-- BLOG SECTION --> */}
      <section id="blog" className="py-3 recipes-block">
        <div className="container recipes_list">
          <div className="row" style={isLoading ? {display: 'flex', justifyContent: 'space-around'} : null}>
           {isLoading ? 
            <div>
            <ClipLoader color={primaryColor} loading={isLoading} size={150} />
            </div>
            :
              recipies() }
            </div>
        </div>
        {isOpenModal ? <RecipeDetails currentState={currentState} pathname={props.history.location.pathname}/> : null}
      </section>
    </>
  );
};

export default RecipeContainer;
