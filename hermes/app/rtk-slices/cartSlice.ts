import { auth, db } from "@/firebase/firebase.utils";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { RootState } from "../store/store";

export type CartProduct = {
  id: string;
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
      state.cartItems = action.payload.cartItems;
      state.cartCount = action.payload.cartCount;
      state.total = action.payload.total;
    });
    builder.addCase(removeItemToUserCart.fulfilled, (state, action) => {
      state.cartItems = action.payload.cartItems;
      state.cartCount = action.payload.cartCount;
      state.total = action.payload.total;
    });
    builder.addCase(changeSizeInUserCart.fulfilled, (state, action) => {
      state.cartItems = action.payload.cartItems;
    });
    builder.addCase(emptyUserCart.fulfilled, (state, action) => {
      state.cartItems = action.payload.cartItems;
      state.cartCount = action.payload.cartCount;
      state.total = action.payload.total;
    });
  },
});

const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState;
}>();

export const fetchUserCart = createAppAsyncThunk(
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

export const addCartToUserCart = createAppAsyncThunk(
  "cart/addCartToUserCart",
  async (
    {
      product,
      size,
      productid,
    }: {
      product: CartProduct;
      size: string;
      productid: string
    },
    { getState }
  ) => {
    console.log("addCartToUserCart Thunk Ran");

    const state: RootState = getState();

    const currentCartItemsArray = state.cart.cartItems;
    const currentCartCount = state.cart.cartCount;
    const currentTotal = state.cart.total;
    
    const newProdId = `${productid}${size}`;

    const existingCartItem = currentCartItemsArray.find(
      (item) => item.id === newProdId
    );

    if (existingCartItem) {
      const newCartCount = currentCartCount + 1;
      const newTotal = currentTotal + product.price;
      const newCartItemsArray = currentCartItemsArray.map((item) =>
        item.id === newProdId
          ? { ...item, quantity: item.quantity + 1, size: size }
          : item
      );

      const userRef = doc(db, "users", `${auth.currentUser?.uid}`);
      await setDoc(
        userRef,
        {
          cart: newCartItemsArray,
        },
        { merge: true }
      );

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
        { ...product, quantity: 1, size: size, id: newProdId },
      ];

      const userRef = doc(db, "users", `${auth.currentUser?.uid}`);
      await setDoc(
        userRef,
        {
          cart: newCartItemsArray,
        },
        { merge: true }
      );

      return {
        cartItems: newCartItemsArray,
        total: newTotal,
        cartCount: newCartCount,
      };
    }
  }
);

export const decrementItemToUserCart = createAppAsyncThunk(
  "cart/decrementItemToUserCart",
  async (product: CartProduct, { getState }) => {
    console.log("decrementItemToUserCart Thunk Ran");

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
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
        const newTotal = currentTotal - itemToDecrement.price;
        const newCartCount = currentCartCount - 1;

        const userRef = doc(db, "users", `${auth.currentUser?.uid}`);
        await setDoc(
          userRef,
          {
            cart: newCartItemsArray,
          },
          { merge: true }
        );

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
          const newCartItemsArray = currentCartItemsArray.splice(
            indexToRemove,
            1
          );
          const newTotal = currentTotal - itemToDecrement.price;
          const newCartCount = currentCartCount - 1;

          const userRef = doc(db, "users", `${auth.currentUser?.uid}`);
          await setDoc(
            userRef,
            {
              cart: newCartItemsArray,
            },
            { merge: true }
          );

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
    };
  }
);

export const removeItemToUserCart = createAppAsyncThunk(
  "cart/removeItemToUserCart",
  async (product: CartProduct, { getState }) => {
    console.log("Removing the selected item to cart.");

    const state: RootState = getState();

    const currentCartItemsArray = state.cart.cartItems;

    const newCartItemsArray = currentCartItemsArray.filter(
      (item) => item.id !== product.id
    );
    const newCartCount = newCartItemsArray.reduce(
      (acc: number, item: CartProduct) => acc + item.quantity,
      0
    );
    const newTotal = newCartItemsArray.reduce(
      (acc: number, item: CartProduct) => acc + item.price * item.quantity,
      0
    );

    const userRef = doc(db, "users", `${auth.currentUser?.uid}`);
    await setDoc(
      userRef,
      {
        cart: newCartItemsArray,
      },
      { merge: true }
    );

    return {
      cartItems: newCartItemsArray,
      total: newTotal,
      cartCount: newCartCount,
    };
  }
);

export const changeSizeInUserCart = createAppAsyncThunk(
  "cart/changeSizeInUserCart",
  async (
    { product, size }: { product: CartProduct; size: string },
    { getState }
  ) => {
    console.log("changeSizeInUserCart Thunk Ran");

    const state: RootState = getState();
    const currentCartItemsArray = state.cart.cartItems;

    const itemToChangeSize = currentCartItemsArray.find(
      (item) => item.id === product.id
    );

    if (itemToChangeSize) {
      const newCartItemsArray = currentCartItemsArray.map((item) =>
        item.id === product.id ? { ...item, size: size } : item
      );

      const userRef = doc(db, "users", `${auth.currentUser?.uid}`);
      await setDoc(
        userRef,
        {
          cart: newCartItemsArray,
        },
        { merge: true }
      );

      return {
        cartItems: newCartItemsArray,
      };
    } else {
      return {
        cartItems: currentCartItemsArray,
      };
    }
  }
);

export const emptyUserCart = createAppAsyncThunk(
  "cart/emptyUserCart",
  async () => {
    console.log("emptyUserCart Thunk Ran");
    
    const newCartItemsArray:any = []
    const newTotal = 0
    const newCartCount = 0

    const userRef = doc(db, "users", `${auth.currentUser?.uid}`);
    await setDoc(
      userRef,
      {
        cart: newCartItemsArray,
      },
      { merge: true }
    );

    return {
      cartItems: newCartItemsArray,
      total: newTotal,
      cartCount: newCartCount,
    };
  }
)

export const { setCustomerDetailsPage } = cartSlice.actions;

export default cartSlice.reducer;
