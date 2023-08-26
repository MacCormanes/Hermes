import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartSlice from "../rtk-slices/cartSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import userSlice from "../rtk-slices/userSlice";
/*
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer} from 'redux-persist'
*/

export const rootReducer = combineReducers({
  cart: cartSlice,
  user: userSlice,
})

export const store = configureStore({
  reducer: rootReducer,
  /*
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
  */
});

/*
const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['user']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
*/

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>()
