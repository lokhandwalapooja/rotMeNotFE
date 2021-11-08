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

export const recipeValidation = (values) => {
  const errors = {};

  if(values) {
    if (!values.name) {
      errors.name = "Name is required.";
    }
    if (!values.cost) {
      errors.cost = "Cost is required.";
    }
    if (!values.cuisineId) {
      errors.cuisineId = "Cuisine is required.";
    }

    // if (!values.description) {
    //   errors.description = "Description is required.";
    // }
    if (!values.img) {
      errors.img = "Image is required.";
    }
    if (!values.timeToPrepare) {
      errors.timeToPrepare = "Time is required.";
    }
    if (!values.calories) {
      errors.calories = "Calories is required.";
    }
    if (values.ingredients) {
      values.ingredients.map((ing,index) => {
        if(!ing.ingredient) {
          errors[`ingredients[${index}].ingredient`] = "Ingredient is Required."
        }
        if(!ing.quantity) {
          errors[`ingredients[${index}].quantity`] = "Quantity is Required."
        }
      })
    }
  } else {
    errors.name = "Name is required.";
    errors.cost = "Cost is required.";
    errors.cuisineId = "Cuisine is required.";
    // errors.description = "Description is required.";
    errors.img = "Image is required.";
    errors.timeToPrepare = "Time is required.";
    errors.ingredients[0].ingredient = "Ingredient is Required.";
    errors.ingredients[1].ingredient = "Ingredient is Required.";
    errors.ingredients[0].quantity = "Quantity is Required."
    errors.ingredients[1].quantity = "Quantity is Required."
  }

  return errors;
}