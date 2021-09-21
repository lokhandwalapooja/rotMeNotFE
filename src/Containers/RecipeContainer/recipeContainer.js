import React, { useEffect } from "react";
import Card from "../../Components/Card/card";
import ReactSelect from "../../Components/Select/ReactSelect";
import {
  Cuisine,
  Ingredients,
  Status,
} from "../../utility/constants/constants";
import RecipeDetails from "../../Components/RecipeDetails/recipeDetails";
import { useSelector, useDispatch } from "react-redux";
import { getRecipeList } from "../../redux/actions/recipeActions/recipeAction";

const RecipeContainer = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // code to run on component did mount
    dispatch(getRecipeList());
  }, []);

  const isOpenModal = useSelector(
    (state) => state.recipeReducer.openRecipeModal
  );
  const recipeList = useSelector((state) => state.recipeReducer.recipeList);

  const recipies = () => {
    return recipeList?.map((r) => {
      return <Card recipe={r} />;
    });
  };

  return (
    <>
      <header id="page-header">
        <div className="container">
          <div className="row">
            <div className="col-md-6 m-auto text-center">
              <h1>Wondering what to cook?</h1>
              <p>
                Ms. Sassy Egg is here to help you
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* SEARCH SECTION */}
      <div className="form-inline" style={{ backgroundColor: "#2125290a" }}>
        <div className="form-inline ml-5 mr-5 mt-4 py-3 float-right d-flex flex-row">
          <input
            type="text"
            className="form-control mr-3"
            placeholder="Search Recipe"
          />
          <ReactSelect
            options={Status}
            className="filters mr-3"
            placeholder="Approved"
          />
          <ReactSelect
            options={Cuisine}
            className="filters mr-3"
            placeholder="Search Cusine"
          />
          <ReactSelect
            isMulti={true}
            options={Ingredients}
            className="multi-filters mr-3"
            placeholder="Search Ingredient"
          />
          {/* <button className="btn btn-outline-primary">Search</button> */}
        </div>
      </div>
      {/* <!-- BLOG SECTION --> */}
      <section id="blog" className="py-3 recipes-block">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card-columns">{recipies()}</div>
            </div>
          </div>
        </div>
        {isOpenModal ? <RecipeDetails /> : null}
      </section>
    </>
  );
};

export default RecipeContainer;