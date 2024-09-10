import { URL_CATEGORY, URL_SUBCATEGORY } from "../../../../../../config";
import { AAPTPropsData, AddSelectOptionDatasIF } from "../utils/interface";

export const textFieldData: AAPTPropsData[] = [
  { type: "text", label: "نام کالا", name: "productName" },
  { type: "number", label: "موجودی", name: "quantity" },
  { type: "number", label: "قیمت", name: "price" },
  {
    type: "text",
    label: "برند",
    name: "brand",
  },
];
export const textFieldAddSACData: AAPTPropsData[] = [
  { type: "text", label: "نام دسته بندی", name: "addCategory" },
  { type: "text", label: "نام زیرمجموعه", name: "addSubcategory" },
];

export const addSelectOptionDatas: AddSelectOptionDatasIF[] = [
  {
    title: "دسته بندی",
    URL: (_category) => `${URL_CATEGORY}?limit=1000`,
    responseData: URL_CATEGORY,
    showValue: "category",
    onChange: (value, formik) => {
      formik.setFieldValue("category", value);
    },
    id: "addCategory",
  },
  {
    title: "زیر مجموعه",
    URL: (category) =>
      `${URL_SUBCATEGORY}?limit=1000${category ? `&category=${category}` : ""}`,
    responseData: URL_SUBCATEGORY,
    showValue: "subcategory",
    onChange: (value, formik) => {
      formik.setFieldValue("subcategory", value);
    },
    id: "addSubcategory",
  },
];
