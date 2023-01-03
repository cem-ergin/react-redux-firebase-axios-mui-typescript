import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CategoryState {
  categories: string[];
}

const initialState: CategoryState = {
  categories: [],
};

export type SetCategoriesAction = PayloadAction<string[]>;

const categorySlice = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {
    setCategories(state, action: SetCategoriesAction) {
      state.categories = action.payload;
    },
  },
});

export const categoryActions = categorySlice.actions;
export default categorySlice;
