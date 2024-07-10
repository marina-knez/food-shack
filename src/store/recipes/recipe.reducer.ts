import { AnyAction } from "redux";
import { FormFields, CurrentCategory } from "./recipe.types";
import { CategoryItem } from "../categories/category.types";
import { setRecentlyViewed, setRecentlyAdded, setCurrentCategory, setFormFields } from "./recipe.action";

export type RecipesState = {
  readonly currentCategory: CurrentCategory | null;
  readonly recentlyViewed: CategoryItem[];
  readonly recentlyAdded: CategoryItem[];
  readonly formFields: FormFields;
};

const RECIPES_INITIAL_STATE: RecipesState = {
  currentCategory: null,
  recentlyViewed: [],
  recentlyAdded: [],
  formFields: {
    title: '',
    description: '',
    img: '',
    noOfPeople: 0,
    time: 0,
    difficulty: '',
    ingredients: [{ item: '', quantity: 0, unit: '' }],
    instructions: ['']
  }
};

export const recipesReducer = (state = RECIPES_INITIAL_STATE, action: AnyAction): RecipesState => {
  if (setRecentlyViewed.match(action)) {
    return { ...state, recentlyViewed: action.payload };
  }

  if (setRecentlyAdded.match(action)) {
    return { ...state, recentlyAdded: action.payload };
  }

  if (setCurrentCategory.match(action)) {
    return { ...state, currentCategory: action.payload };
  }

  if (setFormFields.match(action)) {
    return { ...state, formFields: action.payload };
  }

  return state;
};
