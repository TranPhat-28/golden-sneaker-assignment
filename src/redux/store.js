import { configureStore } from '@reduxjs/toolkit'
import cartItemReducer from '../redux/features/cartItemSlice'

const preloadedState = {
  cartItem: {
    itemList: JSON.parse(localStorage.getItem('goldenCart')) || []
  }
}

export const store = configureStore({
  reducer: {
    cartItem: cartItemReducer,
  },
  preloadedState: preloadedState
})