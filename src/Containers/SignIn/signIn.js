import React from "react";
import { routes } from "../../utility/constants/constants";
import "./login.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { signIn } from "../../redux/actions/userAction/userActions";
import { signInValidation } from "../../utility/validation/validation";
import { closeRecipeModal } from "../../redux/actions/recipeActions/recipeAction";
import { useDispatch } from "react-redux";

const Login = (props) => {
  const { history } = props;
  const dispatch = useDispatch();

  let initialFormValues = {
    email: "",
    password: "",
  };

  return (
    <div className="login-container">
      <div className="d-flex justify-content-center h-100">
        <div className="card login-card">
          <div className="card-header">
            <h3>Sign In</h3>
          </div>
          <Formik
            enableReinitialize={true}
            initialValues={initialFormValues}
            onSubmit={(values) => dispatch(signIn({ user: { ...values } }))}
            validate={(values) => signInValidation(values)}
          >
            {(formik_props) => {
              const errors = formik_props.errors;
              const touched = formik_props.touched;
              return (
                <div className="card-body">
                  <Form>
                    <div className="input-group ">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fas fa-user"></i>
                        </span>
                      </div>
                      <Field
                        name="email"
                        type="email"
                        className="form-control"
                        placeholder="EMAIL"
                      />
                    </div>
                    <div className="form-group error">
                      <ErrorMessage name="email" />
                    </div>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fas fa-key"></i>
                        </span>
                      </div>
                      <Field
                        name="password"
                        type="password"
                        className="form-control"
                        placeholder="PASSWORD"
                      />
                    </div>
                    <div className="form-group error">
                      <ErrorMessage name="password" className="error" />
                    </div>
                    {/* <div className="row align-items-center remember">
                      <Field name="remember" type="checkbox" />
                      Remember Me
                    </div> */}
                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn float-right login_btn"
                      >
                        Login
                      </button>
                    </div>
                  </Form>
                </div>
              );
            }}
          </Formik>
          <div className="card-footer">
            <div className="d-flex justify-content-center links">
              Don't have an account?
              <a
                onClick={() => history.push(routes.SIGN_UP)}
                href="javascript:void(0)"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
