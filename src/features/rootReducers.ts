import { combineReducers } from "@reduxjs/toolkit";
import searchProducts, { SearchProductsState } from "./searchProducts/searchProducts";
export interface RootState {
  sPState: SearchProductsState;
}

const rootReducers = combineReducers({
  sPState:searchProducts,
});
export default rootReducers;
