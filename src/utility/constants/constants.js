export const routes = {
  ROOT: "/",
  RECIPIES_LIST: "/recipes-list",
  RECIPE: "/recipes-list/recipe",
  MY_RECIPIES: "/my-recipes",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  INGREDIENTS: "/ingredients",
  ABOUT: "/about"
};

export const colourOptions = [
  { value: "red", label: "red" },
  { value: "yellow", label: "yellow" },
  { value: "white", label: "white" },
  { value: "black", label: "black" },
  { value: "brown", label: "brown" },
];

export const Cuisine = [
  { value: 1, label: "Indian" },
  { value: 2, label: "Continental" },
  { value: 3, label: "Chinese" },
  { value: 4, label: "Italian" },
  { value: 5, label: "Koriean" },
];

export const Veg = [
  { value: 1, label: "Vegetarian" },
  { value: 2, label: "Non-Vegetarian" },
];

export const Ingredients = [
  { value: 1, label: "tomato puree" },
  { value: 2, label: "eggs" },
  { value: 3, label: "onion" },
  { value: 4, label: "cumin" },
  { value: 5, label: "salt" },
  { value: 6, label: "pepper" },
  { value: 7, label: "oil" },
  { value: 8, label: "sugar" },
  { value: 9, label: "potato" },
  { value: 10, label: "ata" },
];

export const StatusOptions = [
  { value: "published", label: "Published" },
  { value: "pending", label: "Pending" },
  { value: "rejected", label: "Rejected" },
];

export const RecipeStatus = {
  PUBLISHED: "published",
  PENDING: "pending",
  REJECTED: "rejected",
}

export const TostType = {
  SUCCESS: "success",
  ERROR: "error",
  WARNING: "warning",
  INFO: "info",
};

export const Roles = {
  ADMIN: "admin",
  USER: "user",
};

export const primaryColor = '#3292a6';