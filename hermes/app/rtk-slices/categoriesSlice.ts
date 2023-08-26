import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartProduct } from "./cartSlice";

type CategoriesMapType = {
  [title: string]: CartProduct[]
}

type CategoriesType = {
  categoriesMap: CategoriesMapType
}

const initialState: CategoriesType = {
  categoriesMap: {}
}

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategoriesMap: (state, action: PayloadAction<CategoriesMapType>) => {
      state.categoriesMap = action.payload
    } 
  }
})

export const {setCategoriesMap} = categoriesSlice.actions
export default categoriesSlice.reducer