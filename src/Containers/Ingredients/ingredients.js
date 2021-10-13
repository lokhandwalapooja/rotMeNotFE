import cloneDeep from "clone-deep";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getIngredientsList,
  // addIngredient,
<<<<<<< HEAD
  editIngredientClicked,
  addIngredientClicked,
} from "../../redux/actions/IngredientsAction/ingredientsAction";
import IngredientTable from "../../Components/Table/MUITable";
import AddOrUpdateIngredient from "./addOrUpdateIngredient";
import moment from 'moment';

const IngredientsContainer = (props) => {
  const defaultTableData = {
    columns: [
      {
        label: "Name",
        field: "name",
        // width: 100,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Name",
        },
      },
      {
        label: "Updated On",
        field: "updatedAt",
        // width: 100,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Updated On",
        },
      },
      {
        label: "Action",
        field: "action",
        // width: 100,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Action",
        },
      },
    ],
    rows: [],
  };
=======
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
>>>>>>> 8879fb41a437e547c83d351a05620fdd333852f9

  const dispatch = useDispatch();
  const [data, setData] = useState(defaultTableData);

  useEffect(() => {
    dispatch(getIngredientsList());
  }, []);

  const isOpenModal = useSelector(
<<<<<<< HEAD
    (state) => state.ingredientsReducer.openIngredientModal
=======
    (state) => state.recipeReducer.openIngredientModal
>>>>>>> 8879fb41a437e547c83d351a05620fdd333852f9
  );
  const ingredientsList = useSelector(
    (state) => state.ingredientsReducer.ingredientsList
  );

  useEffect(() => {
<<<<<<< HEAD
    if (ingredientsList) {
      let updatedIngredients = cloneDeep(data);
      let ingredientsListWithAction = cloneDeep(ingredientsList);
      ingredientsListWithAction = ingredientsListWithAction.map((i) => {
        return {
          name: i.name,
          updatedAt: moment(i.updatedAt).format("MM/DD/YYYY"),
          action: (
            <span>
              <i
                className="fas fa-edit fa-1x mb-2 clickIcons"
                data-toggle="modal"
                data-target="#ingredientModal"
                data-backdrop="static"
                data-keyboard="false"
                onClick={() => dispatch(editIngredientClicked(i))}
              />
            </span>
          ),
        };
      });
      updatedIngredients.rows = ingredientsListWithAction;
      setData(updatedIngredients);
    }
  }, [ingredientsList]);
=======
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
>>>>>>> 8879fb41a437e547c83d351a05620fdd333852f9

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
<<<<<<< HEAD
          {/* <button className="btn btn-primary" style={{float: 'right'}}>{"Add"}</button> */}
          <div className="row">
            <IngredientTable
              data={data}
              title={"INGREDIENTS"}
              addButton={true}
              addClicked={() => dispatch(addIngredientClicked())}
              dataTarget="#ingredientModal"
            />
          </div>
        </div>
        {isOpenModal ? <AddOrUpdateIngredient /> : null}
=======
          <div className="row">
            <IngredientTable data={data}/>
          </div>
        </div>
        {/* {isOpenModal ? <RecipeDetails /> : null} */}
>>>>>>> 8879fb41a437e547c83d351a05620fdd333852f9
      </section>
    </>
  );
};

export default IngredientsContainer;
