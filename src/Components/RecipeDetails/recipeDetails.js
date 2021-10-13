import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeRecipeModal } from "../../redux/actions/recipeActions/recipeAction";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Cuisine } from "../../utility/constants/constants";
import ReactSelect from "../../Components/Select/ReactSelect";
import Rating from "../Rating/rating";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, ContentState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const RecipeDetails = (props) => {
  const recipeData = useSelector((state) => state.recipeReducer.recipe);
  const isRecipeReadOnly = useSelector(
    (state) => state.recipeReducer.isRecipeReadOnly
  );

  const dispatch = useDispatch();

  const [editorState, setEditorState] = useState(() =>
    EditorState.createWithContent(
      ContentState.createFromText(recipeData?.description)
    )
  );

  useEffect(() => {
    console.log(editorState);
  }, [editorState]);

  const setCusineValue = (cuisine) => {
    return {
      value: cuisine.id,
      label: cuisine.name,
    };
  };

  let initialFormValues = {
    recipeName: recipeData.recipeName,
    calories: recipeData.calories,
    cost: recipeData.cost,
    cuisine: setCusineValue(recipeData.cuisine),
    description: recipeData.description,
    submittedBy: recipeData.submittedBy.name,
    isHealthy: recipeData.isHealthy,
    time: recipeData.time,
    ratings: recipeData.ratings,
  };

  return (
    <div className="modal recipeDetails" id="loginModal">
      <div className="modal-dialog mw-100 w-50">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Recipe Details</h5>
            <button
              className="close"
              data-dismiss="modal"
              onClick={() => dispatch(closeRecipeModal())}
            >
              &times;
            </button>
          </div>
          <Formik
            enableReinitialize={true}
            initialValues={initialFormValues}
            onSubmit={(values, { resetForm }) => {}}
            // validationSchema={validateAccountInfoForm}
          >
            {(formik_props) => {
              const errors = formik_props.errors;
              const touched = formik_props.touched;
              console.log(errors, "erros");
              return (
                <>
                  <div className="modal-body">
                    <Form>
                      <div
                        className="form-row mb-3"
                        style={{ justifyContent: "center" }}
                      >
                        <img
                          src={recipeData.img}
                          alt=""
                          className="img-fluid card-img-top"
                          style={{
                            height: "200px",
                            width: "200px",
                            borderRadius: "100px",
                          }}
                        />
                      </div>
                      <div className="form-row form-group">
                        <div className="col">
                          <label for="username">Recipe Name</label>
                          <Field
                            name="recipeName"
                            className="form-control"
                            type="text"
                            id="name"
                            readOnly={isRecipeReadOnly}
                          />
                        </div>
                        <div className="col">
                          <label for="cost">Cost</label>
                          <Field
                            name="cost"
                            className="form-control"
                            type="text"
                            id="cost"
                            readOnly={isRecipeReadOnly}
                          />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="col">
                          <label for="calories">Cuisine</label>
                          <ReactSelect
                            options={Cuisine}
                            name={"cuisine"}
                            value={formik_props.values.cuisine}
                            className="filters"
                            placeholder="Search Cusine"
                            readOnly={isRecipeReadOnly}
                          />
                        </div>
                        <div className="col">
                          <label for="calories">Calories</label>
                          <Field
                            name="calories"
                            className="form-control"
                            type="text"
                            id="calories"
                            readOnly={isRecipeReadOnly}
                          />
                        </div>
                        <div className="col">
                          <label for="calories">Time</label>
                          <Field
                            name="time"
                            className="form-control"
                            type="text"
                            id="calories"
                            readOnly={isRecipeReadOnly}
                          />
                        </div>
                      </div>
                      <div className="form-row ">
                        <table class="table">
                          <thead>
                            <tr>
                              <th scope="col">Ingredinet</th>
                              <th scope="col">Quantity</th>
                            </tr>
                          </thead>
                          <tbody>
                            {recipeData.ingredients.map((i) => {
                              return (
                                <tr>
                                  <td>{i.ingredientName}</td>
                                  <td>{i.quantity}</td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                      <div className="form-row ">
                        <div className="col">
                          <label for="isHealthy"></label>
                          <div className="form-check">
                            <label className="form-check-label mr-2">
                              <input
                                type="checkbox"
                                checked={formik_props.values.isHealthy}
                                name="isHealthy"
                                className="form-check-input"
                                readOnly={isRecipeReadOnly}
                              />
                              Is Healthy
                            </label>
                          </div>
                        </div>
                        <div className="col">
                          <label for="ratings"></label>
                          <div className="form-check">
                            <label
                              className="form-check-label mr-2"
                              style={{ marginLeft: "170px" }}
                            >
                              <Rating
                                readOnly={isRecipeReadOnly}
                                name="rating"
                                value={formik_props.values.ratings}
                                className="form-check-input"
                              />{" "}
                              <span className="ratings">Rating</span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="form-row form-control mt-4">
                        <div className="col">
                          <h6>Recipe Description</h6>
                          {/* <div style={{ minHeight: '200px' }}> */}
                          <Editor
                            editorClassName="editorClass"
                            editorState={editorState}
                            onEditorStateChange={setEditorState}
                            readOnly={isRecipeReadOnly}
                          />

                          {/* </div> */}
                        </div>
                      </div>
                    </Form>
                  </div>
                  <div className="modal-footer">
                    {/* FOR USER LOGIN */}
                    <button className="btn btn-primary" data-dismiss="modal">
                      Close
                    </button>

                    {/* FOR ADMIN LOGIN */}
                    {/* <button className="btn btn-danger" data-dismiss="modal">
                      Reject
                    </button>
                    <button className="btn btn-success" data-dismiss="modal">
                      Approve
                    </button> */}
                  </div>
                </>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
