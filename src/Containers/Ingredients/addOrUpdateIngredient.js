import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  closeIngredientModal,
  addIngredient,
  updateIngredient,
} from "../../redux/actions/IngredientsAction/ingredientsAction";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ingredientValidation } from "../../utility/validation/validation";

const AddOrUpdateIngredient = (props) => {
  const ingredient = useSelector(
    (state) => state.ingredientsReducer.ingredient
  );
  const isEdit = ingredient?.name;
  const dispatch = useDispatch();

  let initialFormValues = {
    name: ingredient?.name,
  };

  return (
    <div className="modal recipeDetails" id="ingredientModal">
      <div className="modal-dialog mw-100 w-50">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {isEdit ? "Update Ingredient" : "Add Ingredient"}
            </h5>
            <button
              className="close"
              data-dismiss="modal"
              onClick={() => dispatch(closeIngredientModal())}
            >
              &times;
            </button>
          </div>
          <Formik
            enableReinitialize={true}
            initialValues={initialFormValues}
            onSubmit={(values) => dispatch(isEdit ? updateIngredient({name: values.name, id: ingredient._id}) : addIngredient({ ...values }))}
            validate={(values) => ingredientValidation(values)}
          >
            {(formik_props) => {
              const errors = formik_props.errors;
              const touched = formik_props.touched;
              console.log(errors, "erros");
              return (
                <Form>
                  <div className="modal-body">
                    <div className="form-row">
                      <div className="col">
                        <label for="calories">Ingredient</label>
                        <Field
                          name="name"
                          className="form-control"
                          type="text"
                          id="calnameories"
                        />
                        <div className="form-group error">
                          <ErrorMessage name="name" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    {/* FOR USER LOGIN */}
                    <button type="submit" className="btn btn-primary">
                      {isEdit ? "Update" : "Add"}
                    </button>

                    {/* FOR ADMIN LOGIN */}
                    {/* <button className="btn btn-danger" data-dismiss="modal">
                      Reject
                    </button>
                    <button className="btn btn-success" data-dismiss="modal">
                      Approve
                    </button> */}
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default AddOrUpdateIngredient;
