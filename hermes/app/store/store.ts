import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartSlice from "../rtk-slices/cartSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import userSlice from "../rtk-slices/userSlice";
import categoriesSlice from "../rtk-slices/categoriesSlice";
import logger from "redux-logger";

export const rootReducer = combineReducers({
  cart: cartSlice,
  user: userSlice,
  categories: categoriesSlice,
})


export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>()

