import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type CartProduct = {
  id: number;
  name: string;
  thumbnail: string;
  imageUrls: string[];
  price: number;
  quantity: number;
  realProductURL: string;
};

type InitialState = {
  cartItems: CartProduct[],
  total: number,
  cartCount: number
}

const initialState: InitialState = {
  cartItems: [],
  total: 0,
  cartCount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<CartProduct>) => {
      const existingCartItem = state.cartItems.find( item => item.id === action.payload.id)

      if(existingCartItem) {
        state.cartCount++;
        state.total = state.total + action.payload.price
        state.cartItems = state.cartItems.map((item) => 
          item.id === action.payload.id ? {...item, quantity: item.quantity + 1} : item
        )
      } else {
        state.cartCount++;
        state.total = state.total + action.payload.price
        state.cartItems.push({...action.payload, quantity: 1})
      }
    },
    decrementItemToCart: (state, action: PayloadAction<CartProduct>) => {
      const itemToDecrement = state.cartItems.find( item => item.id === action.payload.id)

      if (itemToDecrement) {
        if (itemToDecrement.quantity > 1) {
          itemToDecrement.quantity--
          state.total -= itemToDecrement.price
          state.cartCount--
        } else {
          const indexToRemove = state.cartItems.findIndex(item => item.id === action.payload.id)
          if(indexToRemove !== -1) {
            state.cartItems.splice(indexToRemove, 1)
            state.cartCount--
            state.total -= itemToDecrement.price
          }
        }
      }
    },
    removeItemToCart: (state, action: PayloadAction<CartProduct>) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id)
      state.cartCount = state.cartCount - action.payload.quantity
      state.total = state.total - (action.payload.quantity * action.payload.price)
    }
  },
});

export const { addItemToCart, decrementItemToCart, removeItemToCart } =
  cartSlice.actions;

export default cartSlice.reducer;
