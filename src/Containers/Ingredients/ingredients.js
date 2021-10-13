import cloneDeep from "clone-deep";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getIngredientsList,
  // addIngredient,
} from "../../redux/actions/IngredientsAction/ingredientsAction";
import IngredientTable from "./ingredientsTable";

const IngredientsContainer = (props) => {
  
  const defaultTableData =  {
    columns: [
        {
            label: 'Name',
            field: 'name',
            // width: 100,
            attributes: {
              'aria-controls': 'DataTable',
              'aria-label': 'Name',
            },
          },
        {
        label: 'Updated On',
        field: 'updatedAt',
        // width: 100,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Updated On',
        },
      },{
        label: 'Action',
        field: 'action',
        // width: 100,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Action',
        },
      }
    ],
    rows: [],
  }

  const dispatch = useDispatch();
  const [data, setData] = useState(defaultTableData);

  useEffect(() => {
    dispatch(getIngredientsList());
  }, []);

  const isOpenModal = useSelector(
    (state) => state.recipeReducer.openIngredientModal
  );
  const ingredientsList = useSelector(
    (state) => state.ingredientsReducer.ingredientsList
  );

  useEffect(() => {
    if(ingredientsList) {
      let updatedIngredients = cloneDeep(data);
      let ingredientsListWithAction = cloneDeep(ingredientsList);
      ingredientsListWithAction = ingredientsListWithAction.map(i => {
        return {
          name: i.name,
          updatedAt: i.updatedAt,
          action: <span><i className="fas fa-edit fa-1x mb-2 clickIcons" onClick={() => alert(`${i._id}`)}/></span>
        }
      })
      updatedIngredients.rows = ingredientsListWithAction;
    setData(updatedIngredients);
    }
  }, [ingredientsList]);
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

      {/* <!-- BLOG SECTION --> */}
      <section id="blog" className="py-3 ingredients-block">
        <div className="container ingredient_list">
          <div className="row">
            <IngredientTable data={data}/>
          </div>
        </div>
        {/* {isOpenModal ? <RecipeDetails /> : null} */}
      </section>
    </>
  );
};

export default IngredientsContainer;
