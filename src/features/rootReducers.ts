import { combineReducers } from "@reduxjs/toolkit";
import searchProducts, {
  SearchProductsState,
} from "./searchProducts/searchProducts";
import editProductReducer from "./editProducts/editProduct";
import { ValuesIF } from "../pages/admin/admin_products/components";

export interface RootState {
  sPState: SearchProductsState;
  ePState: { initialValues: ValuesIF; isEditing: boolean };
}
// ePState ==> edit product state
const rootReducers = combineReducers({
  sPState: searchProducts,
  ePState: editProductReducer,
});
export default rootReducers;
