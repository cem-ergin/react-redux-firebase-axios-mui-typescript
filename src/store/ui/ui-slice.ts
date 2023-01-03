import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface UiState {
  showMenuDrawer: boolean
  showCartDrawer: boolean
  showSuccessSnackbar: boolean
  showFailureSnackbar: boolean
}

const initialState: UiState = {
  showMenuDrawer: false,
  showCartDrawer: false,
  showSuccessSnackbar: false,
  showFailureSnackbar: false,
}

const uiSlice = createSlice({
  name: "item",
  initialState: initialState,
  reducers: {
    toggleMenuDrawer(state) {
      state.showMenuDrawer = !state.showMenuDrawer
    },
    toggleCartDrawer(state) {
      state.showCartDrawer = !state.showCartDrawer
    },
    showSuccessSnackbar(state) {
      state.showSuccessSnackbar = true
    },
    hideSuccessSnackbar(state) {
      state.showSuccessSnackbar = false
    },
    showFailureSnackbar(state) {
      state.showFailureSnackbar = true
    },
    hideFailureSnackbar(state) {
      state.showFailureSnackbar = false
    },
  },
})

export const uiActions = uiSlice.actions
export default uiSlice
