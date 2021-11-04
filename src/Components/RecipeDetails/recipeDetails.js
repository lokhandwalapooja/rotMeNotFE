import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeRecipeModal, giveRating } from "../../redux/actions/recipeActions/recipeAction";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import { Cuisine, Ingredients, Roles } from "../../utility/constants/constants";
import ReactSelect from "../../Components/Select/ReactSelect";
import Rating from "../Rating/rating";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, ContentState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useDropzone } from "react-dropzone";
import { toBase64 } from "../../utility/utility";
import cloneDeep from "clone-deep";
import { getIngredientsList } from "../../redux/actions/IngredientsAction/ingredientsAction";
import { addRecipe } from "../../redux/actions/recipeActions/recipeAction";
import draftToHtml from "draftjs-to-html";

const RecipeDetails = (props) => {
  const recipeData = useSelector((state) => state.recipeReducer.recipe);
  const isRecipeReadOnly = useSelector(
    (state) => state.recipeReducer.isRecipeReadOnly
  );
  const [imageBase64, setImageBase64] = useState(null);

  const role = useSelector((state) => state.authReducer?.user?.role);

  const onDrop = useCallback(async (acceptedFiles) => {
    // Do something with the files
    setImageBase64(await toBase64(acceptedFiles[0]));
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const dispatch = useDispatch();

  const [editorState, setEditorState] = useState(() =>
    EditorState.createWithContent(
      ContentState.createFromText(
        recipeData.description ? recipeData.description : ""
      )
    )
  );

  useEffect(() => {
    console.log(draftToHtml(editorState));
  }, [editorState]);

  useEffect(() => {
    dispatch(getIngredientsList());
  }, []);

  const IngredientsOptions = useSelector((state) =>
    state.ingredientsReducer.ingredientsList?.map((i) => {
      return { value: i._id, label: i.name };
    })
  );

  const setCusineValue = (cuisine) => {
    return {
      value: cuisine.id,
      label: cuisine.name,
    };
  };

  const removeIngredient = (formik_props, i) => {
    let ingredients = cloneDeep(formik_props.values.ingredients);
    ingredients.splice(i, 1);
    formik_props.setFieldValue("ingredients", ingredients);
  };

  const submitRecipe = (values) => {
    const data = cloneDeep(values);
    data.cuisineId = data.cuisineId.value?.toString();
    data.ingredients = data.ingredients.map((i) => {
      return { ingredient: i.ingredient.value, quantity: i.quantity };
    });
    dispatch(addRecipe(data));
  };

  let initialFormValues = {
    img: recipeData.img ? recipeData.img : imageBase64,
    name: recipeData?.name,
    calories: recipeData?.calories,
    cost: recipeData?.cost,
    cuisineId: recipeData.cuisine ? setCusineValue(recipeData.cuisine) : "",
    description: recipeData?.description,
    submittedBy: recipeData?.submittedBy?.name,
    isHealthy: recipeData?.isHealthy,
    timeToPrepare: recipeData?.timeToPrepare,
    ratings: recipeData?.ratings,
    ingredients: [
      { ingredient: "", quantity: "" },
      { ingredient: "", quantity: "" },
    ],
  };

  return (
    <div className="modal recipeDetails" id="recipeModal">
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
            onSubmit={(values) => {
              submitRecipe(values);
            }}
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
                        {formik_props.values.img ? (
                          <img
                            name="img"
                            src={formik_props.values.img}
                            alt=""
                            className="img-fluid card-img-top"
                            style={{
                              height: "200px",
                              width: "200px",
                              borderRadius: "100px",
                            }}
                          />
                        ) : (
                          <div
                            {...getRootProps()}
                            style={{
                              height: "100px",
                              cursor: "pointer",
                            }}
                          >
                            <input {...getInputProps()} />
                            {isDragActive ? (
                              <p>Drop the files here ...</p>
                            ) : (
                              <p>
                                Drag 'n' drop some files here, or click to
                                select files
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                      <div className="form-row form-group">
                        <div className="col">
                          <label for="username">Recipe Name</label>
                          <Field
                            name="name"
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
                            name={"cuisineId"}
                            value={formik_props.values.cuisine}
                            setFieldValue={formik_props.setFieldValue}
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
                          <label for="calories">Time(mints)</label>
                          <Field
                            name="timeToPrepare"
                            className="form-control"
                            type="number"
                            id="calories"
                            readOnly={isRecipeReadOnly}
                          />
                        </div>
                      </div>
                      {/* <!-- Editable table --> */}
                      <div className="card" style={{ marginTop: "20px" }}>
                        <div className="card-body">
                          <div id="table" className="table-editable">
                            <span className="table-add float-right mb-3 mr-2">
                              <a
                                href="#!"
                                className="text-success"
                                onClick={() =>
                                  formik_props.setFieldValue("ingredients", [
                                    ...formik_props.values.ingredients,
                                    { ingredient: "", quantity: "" },
                                  ])
                                }
                              >
                                <i
                                  className="fas fa-plus fa-2x"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </span>
                            <table className="table table-bordered table-responsive-md table-striped text-center">
                              <thead>
                                <tr>
                                  <th className="text-center">Ingredient</th>
                                  <th className="text-center">Quantity</th>
                                  <th className="text-center">Remove</th>
                                </tr>
                              </thead>
                              <tbody>
                                <FieldArray name="ingredients">
                                  {() =>
                                    formik_props.values.ingredients?.map(
                                      (ingredient, i) => {
                                        // const ticketErrors =
                                        //   (errors.ingredients?.length &&
                                        //     errors.tickets[i]) ||
                                        //   {};
                                        // const ticketTouched =
                                        //   (touched.ingredients?.length &&
                                        //     touched.tickets[i]) ||
                                        //   {};
                                        return (
                                          <tr>
                                            <td
                                              className="pt-3-half"
                                              contenteditable="true"
                                            >
                                              <ReactSelect
                                                options={IngredientsOptions}
                                                name={`ingredients.${i}.ingredient`}
                                                setFieldValue={
                                                  formik_props.setFieldValue
                                                }
                                                value={ingredient.ingredient}
                                                className="filters"
                                                placeholder="Ingredient"
                                                readOnly={isRecipeReadOnly}
                                              />
                                            </td>
                                            <td
                                              className="pt-3-half"
                                              contenteditable="true"
                                            >
                                              <Field
                                                name={`ingredients.${i}.quantity`}
                                                className="form-control"
                                                type="text"
                                                id="calories"
                                                placeholder="Quantity"
                                                readOnly={isRecipeReadOnly}
                                              />
                                            </td>
                                            <td>
                                              <span className="table-remove">
                                                <button
                                                  type="button"
                                                  className="btn btn-danger btn-rounded btn-sm my-0"
                                                  onClick={() =>
                                                    removeIngredient(
                                                      formik_props,
                                                      i
                                                    )
                                                  }
                                                >
                                                  Remove
                                                </button>
                                              </span>
                                            </td>
                                          </tr>
                                        );
                                      }
                                    )
                                  }
                                </FieldArray>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      {/* <div className="form-row ">
                        <table className="table">
                          <thead>
                            <tr>
                              <th scope="col">Ingredinet</th>
                              <th scope="col">Quantity</th>
                            </tr>
                          </thead>
                          <tbody>
                            {recipeData.ingredients?.map((i) => {
                              return (
                                <tr>
                                  <td>{i.ingredientName}</td>
                                  <td>{i.quantity}</td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div> */}
                      <div className="form-row ">
                        <div className="col">
                          <label for="isHealthy"></label>
                          <div className="form-check">
                            <label className="form-check-label mr-2">
                              <Field
                                type="checkbox"
                                checked={formik_props.values.isHealthy}
                                name="isHealthy"
                                className="form-check-input"
                                // disabled={isRecipeReadOnly}
                                // readOnly={isRecipeReadOnly}
                              />
                              Is Healthy
                            </label>
                          </div>
                        </div>
                        {isRecipeReadOnly ? (
                          <div className="col">
                            <label for="ratings"></label>
                            <div className="form-check">
                              <label
                                className="form-check-label mr-2"
                                style={{ marginLeft: "170px" }}
                              >
                                <Rating
                                  name="rating"
                                  value={formik_props.values.ratings}
                                  className="form-check-input"
                                  onRatingChange={() => dispatch(giveRating(recipeData._id, formik_props.values.ratings))}
                                />{" "}
                                <span className="ratings">Rating</span>
                              </label>
                            </div>
                          </div>
                        ) : null}
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
                      <div className="modal-footer">
                        {/* <button className="btn btn-primary" data-dismiss="modal">
                      Close
                    </button> */}

                        {/* FOR ADMIN LOGIN */}
                        {role === Roles.ADMIN && isRecipeReadOnly ? (
                          <>
                            <button
                              className="btn btn-danger"
                              data-dismiss="modal"
                            >
                              Reject
                            </button>
                            <button
                              className="btn btn-success"
                              data-dismiss="modal"
                            >
                              Approve
                            </button>
                          </>
                        ) : !isRecipeReadOnly ? (
                          <button type="submit" className="btn btn-primary">
                            Submit
                          </button>
                        ) : (
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-dismiss="modal"
                            onClick={() => dispatch(closeRecipeModal())}
                          >
                            Close
                          </button>
                        )}
                      </div>
                    </Form>
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
