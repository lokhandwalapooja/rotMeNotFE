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

export const signUpValidation = (values) => {
  const errors = {};

  if (values) {
    if (!values.first_name) {
      errors.first_name = "First Name is required.";
    }
    if (!values.last_name) {
      errors.last_name = "Last Name is required.";
    }
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
    if(!values.confirm_password) {
      errors.confirm_password = "Confirm Password is required";
    } else if(values.password !== values.confirm_password) {
      errors.confirm_password = "Password does not match"; 
    }
  } else {
    errors.first_name = "First Name is required.";
    errors.last_name = "Last Name is required.";
    errors.email = "Email is required.";
    errors.password = "Password is required.";
  }
   
  return errors; 
}

export const ingredientValidation = (values) => {
  const errors = {};

  if (values) {
    if (!values.name) {
      errors.name = "Name is required.";
    }
  } else {
    errors.name = "Name is required.";
  }
   
  return errors;
};