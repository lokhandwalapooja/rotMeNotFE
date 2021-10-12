import React from "react";
import { routes } from "../../utility/constants/constants";
import { Formik, Form, Field, ErrorMessage } from "formik";

const SingUp = (props) => {
  const { history } = props;

  let initialFormValues = {
    firstName: "",
    lastName: "",
    password: "",
  };

  return (
    <div className="login-container">
      <div className="d-flex justify-content-center h-100">
        <div className="card signin-card">
          <div className="card-header">
            <h3>Sign Up</h3>
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
                <div className="card-body">
                  <Form>
                    <div className="input-group form-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fas fa-user"></i>
                        </span>
                      </div>
                      <Field
                        name="firstName"
                        type="text"
                        className="form-control"
                        placeholder="FIRST NAME"
                      />
                    </div>
                    <div className="input-group form-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fas fa-user"></i>
                        </span>
                      </div>
                      <Field
                        name="lastName"
                        type="text"
                        className="form-control"
                        placeholder="LAST NAME"
                      />
                    </div>
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
                    </div>
                    <div className="input-group form-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fas fa-key"></i>
                        </span>
                      </div>
                      <Field
                        name="confirm_password"
                        type="password"
                        className="form-control"
                        placeholder="CONFIRM PASSWORD"
                      />
                    </div>
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
              Already a member?
              <a
                onClick={() => history.push(routes.SIGN_IN)}
                href="javascript:void(0)"
              >
                Sign Up
              </a>
            </div>
            {/* <div className="d-flex justify-content-center">
                <a href="#">Forgot your password?</a>
              </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
