import { categoryActions, SetCategoriesAction } from "./category-slice";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";

const categoriesUrl = "https://fakestoreapi.com/products/categories";

export type AppThunk = ThunkAction<void, RootState, null, SetCategoriesAction>;

export const fetchCategories = (): AppThunk => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(categoriesUrl);

      if (!response.ok) {
        throw new Error("Could not fetch categories!");
      }

      const data = await response.json();
      return data;
    };

    try {
      const categoriesData = await fetchData();
      dispatch(categoryActions.setCategories(categoriesData));
    } catch (error) {
      //SHOW ERROR SNACKBAR
    }
  };
};
