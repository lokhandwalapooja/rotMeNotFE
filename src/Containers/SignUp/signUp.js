import React from "react";
import { routes } from "../../utility/constants/constants";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { signUpValidation } from "../../utility/validation/validation";
import { useDispatch } from "react-redux";
import { signUp } from "../../redux/actions/userAction/userActions";
import cloneDeep from "clone-deep";

const SingUp = (props) => {
  const { history } = props;
  const dispatch = useDispatch();

  let initialFormValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  const submit = (user) => {
    const data = cloneDeep(user);
    delete data.user.confirm_password;
    dispatch(signUp(data));
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
            onSubmit={(values) => submit({ user: { ...values } })}
            validate={(values) => signUpValidation(values)}
          >
            {(formik_props) => {
              const errors = formik_props.errors;
              const touched = formik_props.touched;
              console.log(errors, "erros");
              return (
                <div className="card-body">
                  <Form>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fas fa-user"></i>
                        </span>
                      </div>
                      <Field
                        name="first_name"
                        type="text"
                        className="form-control"
                        placeholder="FIRST NAME"
                      />
                    </div>
                    <div className="form-group error">
                      <ErrorMessage name="first_name" />
                    </div>

                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fas fa-user"></i>
                        </span>
                      </div>
                      <Field
                        name="last_name"
                        type="text"
                        className="form-control"
                        placeholder="LAST NAME"
                      />
                    </div>
                    <div className="form-group error">
                      <ErrorMessage name="last_name" />
                    </div>

                    <div className="input-group">
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
                      <ErrorMessage name="password" />
                    </div>

                    <div className="input-group">
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
                    <div className="form-group error">
                      <ErrorMessage name="confirm_password" />
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
