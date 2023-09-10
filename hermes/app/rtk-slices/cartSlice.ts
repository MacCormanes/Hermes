import { auth, db } from "@/firebase/firebase.utils";
import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { RootState } from "../store/store";

export type CartProduct = {
  id: number;
  name: string;
  thumbnail: string;
  imageUrls: string[];
  price: number;
  quantity: number;
  size: string;
  realProductURL: string;
};

type InitialState = {
  cartItems: CartProduct[];
  total: number;
  cartCount: number;
  customerDetailsPage: boolean;
};

const initialState: InitialState = {
  cartItems: [],
  total: 0,
  cartCount: 0,
  customerDetailsPage: true,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    removeItemToCart: (state, action: PayloadAction<CartProduct>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartCount = state.cartCount - action.payload.quantity;
      state.total =
        state.total - action.payload.quantity * action.payload.price;
    },
    setCustomerDetailsPage: (state) => {
      state.customerDetailsPage = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserCart.fulfilled, (state, action) => {
      state.cartItems = action.payload.cartItems;
      state.cartCount = action.payload.cartCount;
      state.total = action.payload.total;
    });
    builder.addCase(addCartToUserCart.fulfilled, (state, action) => {
      state.cartItems = action.payload.cartItems;
      state.cartCount = action.payload.cartCount;
      state.total = action.payload.total;
    });
    builder.addCase(decrementItemToUserCart.fulfilled, (state, action) => {
      state.cartItems = action.payload.cartItems
      state.cartCount = action.payload.cartCount;
      state.total = action.payload.total;
    });
  },
});

export const fetchUserCart = createAsyncThunk(
  "cart/fetchUserCart",
  async () => {
    console.log("fetchUserCart ran");

    const userRef = doc(db, "users", `${auth.currentUser?.uid}`);
    const docSnap = await getDoc(userRef);
    if (docSnap.exists() && docSnap.data().cart.length > 0) {
      const cartItemsArray = docSnap.data().cart;
      const total = cartItemsArray.reduce(
        (acc: number, item: CartProduct) => acc + item.price * item.quantity,
        0
      );
      const cartCount = cartItemsArray.reduce(
        (acc: number, item: CartProduct) => acc + item.quantity,
        0
      );
      return {
        cartItems: cartItemsArray,
        total: total,
        cartCount: cartCount,
      };
    } else {
      return {
        cartItems: [],
        total: 0,
        cartCount: 0,
      };
    }
  }
);

const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState;
}>();

export const addCartToUserCart = createAppAsyncThunk(
  "cart/addCartToUserCart",
  async (product: CartProduct, { getState }) => {
    console.log("addCartToUserCart Thunk Ran");

    const state: RootState = getState();

    const currentCartItemsArray = state.cart.cartItems;
    const currentCartCount = state.cart.cartCount;
    const currentTotal = state.cart.total;

    const existingCartItem = currentCartItemsArray.find(
      (item) => item.id === product.id
    );

    if (existingCartItem) {
      const newCartCount = currentCartCount + 1;
      const newTotal = currentTotal + product.price;
      const newCartItemsArray = currentCartItemsArray.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );

      const userRef = doc(db, 'users', `${auth.currentUser?.uid}`)
      await setDoc(userRef, {
        cart: newCartItemsArray
      }, {merge: true})

      return {
        cartItems: newCartItemsArray,
        total: newTotal,
        cartCount: newCartCount,
      };
    } else {
      const newCartCount = currentCartCount + 1;
      const newTotal = currentTotal + product.price;
      const newCartItemsArray = [
        ...currentCartItemsArray,
        { ...product, quantity: 1 },
      ];

      const userRef = doc(db, 'users', `${auth.currentUser?.uid}`)
      await setDoc(userRef, {
        cart: newCartItemsArray
      }, {merge: true})

      return {
        cartItems: newCartItemsArray,
        total: newTotal,
        cartCount: newCartCount,
      };
    }
  }
);

export const decrementItemToUserCart = createAppAsyncThunk(
  'cart/decrementItemToUserCart', 
  async (product: CartProduct, {getState}) => {
    console.log('decrementItemToUserCart Thunk Ran')

    const state: RootState = getState();

    const currentCartItemsArray = state.cart.cartItems;
    const currentCartCount = state.cart.cartCount;
    const currentTotal = state.cart.total;

    const itemToDecrement = currentCartItemsArray.find(
        (item) => item.id === product.id
      );

    if (itemToDecrement) {
      if (itemToDecrement.quantity > 1) {
        const newCartItemsArray = currentCartItemsArray.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
          );
        const newTotal = currentTotal - itemToDecrement.price;
        const newCartCount = currentCartCount - 1;

        const userRef = doc(db, 'users', `${auth.currentUser?.uid}`)
        await setDoc(userRef, {
          cart: newCartItemsArray
        }, {merge: true})

      return {
        cartItems: newCartItemsArray,
        total: newTotal,
        cartCount: newCartCount,
      };
      } else {
        const indexToRemove = currentCartItemsArray.findIndex(
          (item) => item.id === product.id
        );
        if (indexToRemove !== -1) {
          const newCartItemsArray = currentCartItemsArray.splice(indexToRemove, 1);
          const newTotal = currentTotal - itemToDecrement.price;
          const newCartCount = currentCartCount - 1;

          const userRef = doc(db, 'users', `${auth.currentUser?.uid}`)
          await setDoc(userRef, {
            cart: newCartItemsArray
          }, {merge: true})

          return {
            cartItems: newCartItemsArray,
            total: newTotal,
            cartCount: newCartCount,
          };
        }
      }
    }
    
    return {
      cartItems: currentCartItemsArray,
      total: currentTotal,
      cartCount: currentCartCount,
    }
  }
)

export const {
  removeItemToCart,
  setCustomerDetailsPage,
} = cartSlice.actions;

export default cartSlice.reducer;
