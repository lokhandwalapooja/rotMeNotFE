export const signInValidation = (values) => {
  const errors = {};

  if (values) {
    if (!values.email) {
      errors.email = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "Password is required.";
    }
  } else {
    errors.email = "Email is required.";
    errors.password = "Password is required.";
  }
   
  return errors;
};
