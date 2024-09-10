import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SearchProductsState {
  category: string;
  subcategory: string;
  quantity: number | null;
  price: number | null;
  req: boolean;
}

const initialState: SearchProductsState = {
  category: "",
  subcategory: "",
  quantity: null,
  price: null,
  req: false,
};

const searchProducts = createSlice({
  name: "searchProducts",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setSubcategory: (state, action: PayloadAction<string>) => {
      state.subcategory = action.payload;
    },
    setQuantity: (state, action: PayloadAction<number>) => {
      state.quantity = action.payload;
    },
    setPrice: (state, action: PayloadAction<number>) => {
      state.price = action.payload;
    },
    setReq: (state, action: PayloadAction<boolean>) => {
      state.req = action.payload;
    },
    setSearchOff: () => {
      return initialState;
    },
  },
});

export const {
  setCategory,
  setSubcategory,
  setQuantity,
  setPrice,
  setReq,
  setSearchOff,
} = searchProducts.actions;

export default searchProducts.reducer;
