import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartSlice from "./cart/cart-slice";
import categorySlice from "./categories/category-slice";
import itemsSlice from "./items/items-slice";
import uiSlice from "./ui/ui-slice";


const rootReducer = combineReducers({
  items: itemsSlice.reducer,
  ui: uiSlice.reducer,
  categories: categorySlice.reducer,
  cart: cartSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
