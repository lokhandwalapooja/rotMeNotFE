import React from "react";
import { routes } from "../../utility/constants/constants";
import "./login.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { signInValidation } from "../../utility/validation/validation";

const Login = (props) => {
  const { history } = props;

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
            // onSubmit={(values, { resetForm }) => {}}
            // validationSchema={signInValidation}
          >
            {(formik_props) => {
              const errors = formik_props.errors;
              const touched = formik_props.touched;
              console.log(errors, "erros");
              return (
                <div className="card-body">
                  <Form>
                    <div className="input-group form-group">
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
                      <ErrorMessage  name="email" />
                    </div>
                    <div className="input-group form-group">
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
                      <ErrorMessage  name="password" />
                    </div>
                    <div className="row align-items-center remember">
                      <Field name="remember" type="checkbox" />
                      Remember Me
                    </div>
                    <div className="form-group">
                      <button
                        name="firstName"
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
