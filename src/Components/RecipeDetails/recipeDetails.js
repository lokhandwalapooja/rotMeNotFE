import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  approveRecipe,
  closeRecipeModal,
  editRecipe,
  giveRating,
  rejectRecipe,
  submitUserRecipe,
} from "../../redux/actions/recipeActions/recipeAction";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import {
  Cuisine,
  Ingredients,
  primaryColor,
  RecipeStatus,
  Roles,
  routes,
} from "../../utility/constants/constants";
import ReactSelect from "../../Components/Select/ReactSelect";
import Rating from "../Rating/rating";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, ContentState, convertFromHTML } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useDropzone } from "react-dropzone";
import { toBase64 } from "../../utility/utility";
import cloneDeep from "clone-deep";
import { getIngredientsList } from "../../redux/actions/IngredientsAction/ingredientsAction";
import { addRecipe } from "../../redux/actions/recipeActions/recipeAction";
import draftToHtml from "draftjs-to-html";
import ClipLoader from "react-spinners/ClipLoader";
import { usePopperTooltip } from "react-popper-tooltip";
import "react-popper-tooltip/dist/styles.css";
import { recipeValidation } from "../../utility/validation/validation";
import { stateToHTML } from "draft-js-export-html";

const RecipeDetails = (props) => {
  const recipeData = useSelector((state) => state.recipeReducer.recipe);
  const isRecipeReadOnly = useSelector(
    (state) => state.recipeReducer.isRecipeReadOnly
  );
  const [imageBase64, setImageBase64] = useState(null);

  const role = useSelector((state) => state.authReducer?.user?.role);

  const isLoading = useSelector((state) => state.recipeReducer.isLoading);

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

  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible,
  } = usePopperTooltip();

  const setDiscription = (setFieldValue) => {
    setFieldValue("description", stateToHTML(editorState.getCurrentContent()));
    console.log(stateToHTML(editorState.getCurrentContent()));
     
  };

  useEffect(() => {
    dispatch(getIngredientsList());
  }, []);

  const IngredientsOptions = useSelector((state) =>
    state.ingredientsReducer.ingredientsList?.map((i) => {
      return { value: i._id, label: i.name };
    })
  );

  const setCusineValue = (cuisine) => {
    let index = Cuisine?.findIndex(
      (f) => f.value.toString() === cuisine.toString()
    );

    return Cuisine[index];
  };

  const removeIngredient = (formik_props, i) => {
    let ingredients = cloneDeep(formik_props.values.ingredients);
    ingredients.splice(i, 1);
    formik_props.setFieldValue("ingredients", ingredients);
  };

  const submitRecipe = (values) => {
    let data = cloneDeep(values);
    data.cuisineId = data.cuisineId.value?.toString();
    data.ingredients = data.ingredients.map((i) => {
      return { ingredient: i.ingredient.value, quantity: i.quantity };
    });
    if (recipeData?._id) {
      data["id"] = recipeData._id;
      delete data.submittedBy;

      dispatch(editRecipe(data));
    } else {
      if (role === Roles.ADMIN) {
        dispatch(addRecipe(data));
      } else if (role === Roles.USER) {
        dispatch(submitUserRecipe(data));
      }
    }
  };

  const setIngredients = (ingredients) => {
    if (IngredientsOptions) {
      return ingredients.map((i) => {
        let index = IngredientsOptions?.findIndex(
          (f) => f.value === i.ingredient
        );
        return {
          ingredient: {
            value: IngredientsOptions[index]?.value,
            label: IngredientsOptions[index]?.label,
          },
          quantity: i.quantity,
        };
      });
    } else {
      return [{ ingredient: "", quantity: "" }];
    }
  };

  const convertHTMLToState = (description) => {
     
    if(description && description !== "") {
    const blocksFromHTML = convertFromHTML(description);
    const state = ContentState.createFromBlockArray(
      blocksFromHTML.contentBlocks,
      blocksFromHTML.entityMap
    );
    console.log(EditorState.createWithContent(state));
    
    return EditorState.createWithContent(state);
    }
  };

  let initialFormValues = {
    img: recipeData.img ? recipeData.img : imageBase64,
    name: recipeData?.name,
    calories: recipeData?.calories,
    cost: recipeData?.cost,
    cuisineId: recipeData.cuisineId ? setCusineValue(recipeData.cuisineId) : "",
    description: recipeData?.description,
    submittedBy: recipeData?.submittedUser,
    isHealthy: recipeData?.isHealthy,
    timeToPrepare: recipeData?.timeToPrepare,
    ratings: recipeData?.ratings,
    ingredients:
      recipeData?.ingredients?.length > 0
        ? setIngredients(recipeData?.ingredients)
        : [
            { ingredient: "", quantity: "" },
            { ingredient: "", quantity: "" },
          ],
  };

  return (
    <div className="modal recipeDetails" id="recipeModal">
      <div className="modal-dialog mw-100 w-50">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {recipeData?._id ? "Update Recipe" : "Recipe Details"}
            </h5>
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
            validate={(values) => recipeValidation(values)}
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
                          <>
                            <img
                              {...getRootProps()}
                              name="img"
                              src={
                                imageBase64
                                  ? imageBase64
                                  : formik_props.values.img
                              }
                              alt=""
                              className="img-fluid card-img-top"
                              style={{
                                height: "200px",
                                width: "200px",
                                borderRadius: "100px",
                                cursor: "pointer",
                              }}
                            />
                            <input {...getInputProps()} />
                          </>
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
                      <div
                        className="form-group error"
                        style={{ textAlign: "center" }}
                      >
                        <ErrorMessage name="img" />
                      </div>
                      <div className="form-row form-group">
                        <div className="col">
                          <label for="username">
                            Recipe Name<span className="error">*</span>
                          </label>
                          <Field
                            name="name"
                            className="form-control"
                            type="text"
                            id="name"
                            readOnly={isRecipeReadOnly}
                          />
                          <div className="form-group error">
                            <ErrorMessage name="name" />
                          </div>
                        </div>
                        <div className="col">
                          <label for="cost">
                            Cost<span className="error">*</span>
                          </label>
                          <Field
                            name="cost"
                            className="form-control"
                            type="text"
                            id="cost"
                            readOnly={isRecipeReadOnly}
                          />
                          <div className="form-group error">
                            <ErrorMessage name="cost" />
                          </div>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="col">
                          <label for="calories">
                            Cuisine<span className="error">*</span>
                          </label>
                          <ReactSelect
                            options={Cuisine}
                            name={"cuisineId"}
                            value={formik_props.values.cuisineId}
                            setFieldValue={formik_props.setFieldValue}
                            className="filters"
                            placeholder="Search Cusine"
                            readOnly={isRecipeReadOnly}
                          />
                          <div className="form-group error">
                            <ErrorMessage name="cuisineId" />
                          </div>
                        </div>
                        <div className="col">
                          <label for="calories">
                            Calories<span className="error">*</span>
                          </label>
                          <Field
                            name="calories"
                            className="form-control"
                            type="text"
                            id="calories"
                            readOnly={isRecipeReadOnly}
                          />
                          <div className="form-group error">
                            <ErrorMessage name="calories" />
                          </div>
                        </div>
                        <div className="col">
                          <label for="calories">
                            Time(mints)<span className="error">*</span>
                          </label>
                          <Field
                            name="timeToPrepare"
                            className="form-control"
                            type="number"
                            id="calories"
                            readOnly={isRecipeReadOnly}
                          />
                          <div className="form-group error">
                            <ErrorMessage name="timeToPrepare" />
                          </div>
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
                                {!isRecipeReadOnly ? (
                                  <i
                                    className="fas fa-plus fa-2x"
                                    aria-hidden="true"
                                  ></i>
                                ) : null}
                              </a>
                            </span>
                            <div>
                              Cooking Metrics Scale
                              <i
                                className="fas fa-info fa-1x"
                                style={{
                                  color: primaryColor,
                                  marginLeft: "5px",
                                  marginBottom: "5px",
                                  paddingTop: "12px",
                                }}
                                aria-hidden="true"
                                ref={setTriggerRef}
                              />
                            </div>
                            {visible && (
                              <div
                                ref={setTooltipRef}
                                {...getTooltipProps({
                                  className: "tooltip-container",
                                })}
                              >
                                <img
                                  src="img/metric_cooking.png"
                                  alt="metrics image"
                                  style={{ width: "600px" }}
                                />
                                <div
                                  {...getArrowProps({
                                    className: "tooltip-arrow",
                                  })}
                                />
                              </div>
                            )}
                            <table className="table table-bordered table-responsive-md table-striped text-center">
                              <thead>
                                <tr>
                                  <th className="text-center">
                                    Ingredient<span className="error">*</span>
                                  </th>
                                  <th className="text-center">
                                    Quantity<span className="error">*</span>
                                  </th>
                                  {!isRecipeReadOnly ? (
                                    <th className="text-center">Remove</th>
                                  ) : null}
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
                                                value={ingredient?.ingredient}
                                                className="filters"
                                                placeholder="Ingredient"
                                                readOnly={isRecipeReadOnly}
                                              />
                                              <div className="form-group error">
                                                <ErrorMessage
                                                  name={`ingredients.${i}.ingredient`}
                                                />
                                              </div>
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
                                              <div className="form-group error">
                                                <ErrorMessage
                                                  name={`ingredients.${i}.quantity`}
                                                />
                                              </div>
                                            </td>
                                            {!isRecipeReadOnly ? (
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
                                            ) : null}
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
                        {isRecipeReadOnly &&
                        props.pathname !== routes.MY_RECIPIES ? (
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
                                  setFormikRating={formik_props.setFieldValue}
                                  submitRating={(value) =>
                                      dispatch(
                                      giveRating(
                                        recipeData._id,
                                        value,
                                        props.currentState
                                      )
                                    )}
                                />{" "}
                                <span className="ratings">Rating</span>
                              </label>
                            </div>
                          </div>
                        ) : null}
                      </div>
                      <div className="form-row form-control mt-4">
                        <div className="col">
                          <h6>
                            Recipe Description<span className="error">*</span>
                          </h6>
                          {/* <div style={{ minHeight: '200px' }}> */}
                          <Editor
                            editorClassName="editorClass"
                            editorState={editorState}
                            onEditorStateChange={setEditorState}
                            onContentStateChange={() =>
                              setDiscription(formik_props.setFieldValue)
                            }
                            readOnly={isRecipeReadOnly}
                          />
                          <div className="form-group error">
                            <ErrorMessage name="description" />
                          </div>
                          {/* </div> */}
                        </div>
                      </div>
                      <div className="modal-footer">
                        {/* <button className="btn btn-primary" data-dismiss="modal">
                      Close
                    </button> */}

                        {/* FOR ADMIN LOGIN */}
                        {role === Roles.ADMIN &&
                        isRecipeReadOnly &&
                        recipeData.status === RecipeStatus.PENDING ? (
                          <>
                            {isLoading ? (
                              <ClipLoader
                                color={primaryColor}
                                loading={isLoading}
                                size={30}
                              />
                            ) : (
                              <>
                                <button
                                  className="btn btn-danger"
                                  onClick={() =>
                                    dispatch(rejectRecipe(recipeData._id))
                                  }
                                >
                                  Reject
                                </button>
                                <button
                                  className="btn btn-success"
                                  onClick={() =>
                                    dispatch(approveRecipe(recipeData._id))
                                  }
                                >
                                  Approve
                                </button>
                              </>
                            )}
                            {/* {isLoading ? (
                              <ClipLoader
                                color={primaryColor}
                                loading={isLoading}
                                size={30}
                              />
                            ) : ( */}

                            {/* )} */}
                          </>
                        ) : !isRecipeReadOnly ? (
                          isLoading ? (
                            <ClipLoader
                              color={primaryColor}
                              loading={isLoading}
                              size={30}
                            />
                          ) : (
                            <button type="submit" className="btn btn-primary">
                              Submit
                            </button>
                          )
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
