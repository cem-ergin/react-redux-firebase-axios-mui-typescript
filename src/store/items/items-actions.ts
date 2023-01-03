import { Items, itemsActions, SetItemsAction } from "./items-slice";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import axios from 'axios';

const itemsUrl = "https://fakestoreapi.com/products";

type AppThunk = ThunkAction<void, RootState, null, SetItemsAction>;

export const fetchItems = (items: Items[], category: String): AppThunk => {
  return async (dispatch) => {
    const fetchData = async () => {
      let url = itemsUrl;
      if (category !== null) {
        url += `/category/${category}`
      }
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Could not fetch items data!");
      }

      const data = await response.json();
      return data;
    };

    try {
      if (items !== undefined) {
        const myItems = items.find((item) => category != null ? item.key === category : 'all');
        if (myItems !== undefined && myItems.items.length > 0) {
          dispatch(itemsActions.setItems({ items: myItems.items, category: myItems.key }));
          return;
        }
      }
      dispatch(itemsActions.loading());
      const itemsData = await fetchData();
      dispatch(itemsActions.setItems({ items: itemsData, category: category != null ? category : 'all' }));
    } catch (error) {
      //SHOW ERROR SNACKBAR
    }
  };
};
