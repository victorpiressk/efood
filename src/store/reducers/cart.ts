import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<MenuItem>) => {
      state.items.push(action.payload)
    },

    removeItem: (state, action: PayloadAction<number>) => {
      const index = state.items.findIndex((item) => item.id === action.payload)
      if (index >= 0) {
        state.items.splice(index, 1)
      }
    },

    openCart: (state) => {
      state.isOpen = true
    },

    closeCart: (state) => {
      state.isOpen = false
    },

    clearCart: (state) => {
      state.items = []
    }
  }
})

export const { addItem, removeItem, openCart, closeCart, clearCart } =
  cartSlice.actions

export default cartSlice.reducer
