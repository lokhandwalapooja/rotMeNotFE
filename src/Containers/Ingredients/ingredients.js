import cloneDeep from "clone-deep";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getIngredientsList,
  // addIngredient,
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

  const dispatch = useDispatch();
  const [data, setData] = useState(defaultTableData);

  useEffect(() => {
    dispatch(getIngredientsList());
  }, []);

  const isOpenModal = useSelector(
    (state) => state.ingredientsReducer.openIngredientModal
  );
  const ingredientsList = useSelector(
    (state) => state.ingredientsReducer.ingredientsList
  );

  useEffect(() => {
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
      </section>
    </>
  );
};

export default IngredientsContainer;
