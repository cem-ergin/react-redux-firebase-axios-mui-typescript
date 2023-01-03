import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface Item {
  id: number
  title: string
  price: number
  image: string
  description: string
  quantity: number
  totalPrice: number
}

interface CartState {
  items: Item[]
  totalQuantity: number
  totalAmount: number
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
}

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem(state, action: PayloadAction<Item>) {
      const newItem = action.payload
      const existingItem = state.items.find((item) => item.id === newItem.id)
      if (!existingItem) {
        state.items.push({
          ...newItem,
          quantity: 1,
        })
        state.totalAmount += newItem.price
      } else {
        existingItem.quantity++
        existingItem.totalPrice += newItem.price
        state.totalAmount += existingItem.price
      }
    },
    removeItem(state, action: PayloadAction<number>) {
      const itemId = action.payload
      const existingItem = state.items.find((item) => item.id === itemId)
      if (existingItem?.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== itemId)
      } else {
        existingItem!.quantity--
        existingItem!.totalPrice -= existingItem!.price
      }
      state.totalQuantity--
      state.totalAmount -= existingItem!.price
    },
    buyNowAction(state, action: PayloadAction<Item>) {
      const newItem = action.payload
      const existingItem = state.items.find((item) => item.id === newItem.id)
      if (!existingItem) {
        state.items.push({
          ...newItem,
          quantity: 1,
          // id: newItem.id,
          // title: newItem.title,
          // price: newItem.price,
          // image: newItem.image,
          // description: newItem.description,
          // quantity: 1,
          // totalPrice: newItem.price,
        })
        state.totalAmount += newItem.price
      }
    },
    emptyCard(state) {
      state.items = initialState.items
      state.totalAmount = initialState.totalAmount
      state.totalQuantity = initialState.totalQuantity
    },
  },
})

export const cartActions = cartSlice.actions
export default cartSlice
