import { createSlice } from "@reduxjs/toolkit";
import {
  initialValues,
  ValuesIF,
} from "../../pages/admin/admin_products/components";

const data: (keyof ValuesIF)[] = [
  "productName",
  "_id",
  "quantity",
  "price",
  "brand",
  "category",
  "subcategory",
  "description",
  "addImages",
  "addThumbnail",
];

export const editProductReducer = createSlice({
  name: "editProductReducer",
  initialState: { initialValues, isEditing: false },
  reducers: {
    setProductData: (state, action) => {
      state.isEditing = true;
      data.forEach((i) => {
        if (i === "productName") {
          state.initialValues.productName = action.payload.name;
        } else if (i === "addImages") {
          state.initialValues.addImages = action.payload.images;
        } else if (i === "addThumbnail") {
          state.initialValues.addThumbnail = action.payload.thumbnail;
        } else {
          state.initialValues[i] = action.payload[i] || null;
        }
      });
    },
    setProductImagesData: (state, action) => {
      console.log("first", action.payload);
      state.initialValues.images = action.payload;
    },
    setProductThumbnaileData: (state, action) => {
      state.initialValues.thumbnail = action.payload;
    },
    setEditingFalse: (state) => {
      state.isEditing = false;
      state.initialValues = {
        images: [],
        thumbnail: null,
        productName: "",
        quantity: "",
        price: "",
        brand: "",
        category: "",
        subcategory: "",
        addSubcategory: "",
        addCategory: "",
        description: "",
      };
    },
  },
});

export const {
  setProductData,
  setProductImagesData,
  setProductThumbnaileData,
  setEditingFalse,
} = editProductReducer.actions;

export default editProductReducer.reducer;
