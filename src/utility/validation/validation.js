export const signInValidation = (values) => {
  const errors = {};

  if (values) {
    if (!values.email) {
      errors.email = "This field is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "This field is required.";
    }
  } else {
    errors.email = "This field is required.";
    errors.password = "This field is required.";
  }
  debugger;
  return errors;
};
