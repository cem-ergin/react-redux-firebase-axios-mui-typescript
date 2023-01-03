import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface Item {
  id: number
  title: string
  price: number
  image: string
  description: string
}

export interface Items {
  key: String
  items: Item[]
}

interface ItemState {
  items: Items[]
  isLoading: boolean
}

const initialState: ItemState = {
  items: [],
  isLoading: false,
}

export type SetItemsAction = PayloadAction<{ items: Item[], category: String }>

const itemSlice = createSlice({
  name: "item",
  initialState: initialState,
  reducers: {
    loading(state) {
      state.isLoading = true
    },
    setItems(state, action: SetItemsAction) {
      const items = state.items.find((item) => item.key === action.payload.category)
      if (items) {
        items.items = action.payload.items
      } else {
        const items: Items = {
          key: action.payload.category,
          items: action.payload.items,
        }
        state.items.push(items)
      }
      state.isLoading = false
    },
  },
})

export const itemsActions = itemSlice.actions
export default itemSlice
