import { URL_CATEGORY, URL_SUBCATEGORY } from "../../../../config";
import { productsDataIF, SearchSelectOptionDatasIF, ShowHeaderIF } from "../utils";
import { HoverReveal } from "../../../../components";
import { AdminProductImage } from "../components/product_table";
import { fCurrency, fDate } from "../../../../utils";
import { CASName, APEBtn } from "../components";
import { setCategory, setReq, setSubcategory } from "../../../../features";

export const productCellData = [
  {
    key: "thumbnail",
    render: (row: productsDataIF) => <AdminProductImage row={row} />,
  },
  {
    key: "name",
    render: (row: { name: string }) => <HoverReveal> {row?.name} </HoverReveal>,
  },
  {
    key: "category",
    render: (row: { category: string }) => (
      <CASName {...{ URL: URL_CATEGORY, id: row?.category }} />
    ),
  },
  {
    key: "subcategory",
    render: (row: { subcategory: string }) => (
      <CASName {...{ URL: URL_SUBCATEGORY, id: row?.subcategory }} />
    ),
  },
  { key: "price", render: (row: { price: number }) => fCurrency(row?.price) },
  {
    key: "updatedAt",
    render: (row: { updatedAt: string }) => fDate(row?.updatedAt),
  },
  { key: "quantity", render: (row: { quantity: number }) => row?.quantity },
  { key: "edit", render: (row: productsDataIF) => <APEBtn {...{ row }} /> },
];
// --------------------------------------------
export const searchTextFeildData = [
  {
    id: "quantity",
    label: "تعداد",
  },
  {
    id: "price",
    label: "قیمت",
  },
];
// --------------------------------------------
export const searchSelectOptionDatas: SearchSelectOptionDatasIF[] = [
  {
    title: "دسته بندی",
    URL: (_formValues) => `${URL_CATEGORY}?limit=1000`,
    responseData: URL_CATEGORY,
    showValue: "category",
    onChange: (value, dispatch) => {
      dispatch(setReq(false));
      dispatch(setCategory(value));
      dispatch(setSubcategory(""));
    },
  },
  {
    title: "زیر مجموعه",
    URL: (formValues) =>
      `${URL_SUBCATEGORY}?limit=1000${
        formValues.category ? `&category=${formValues.category}` : ""
      }`,
    responseData: URL_SUBCATEGORY,
    showValue: "subcategory",
    onChange: (value, dispatch) => {
      dispatch(setReq(false));
      dispatch(setSubcategory(value));
    },
  },
];
// --------------------------------------------

export const headerrows: ShowHeaderIF[] = [
  { text: " جدول محصولات", key: "table" },
  { text: "  کارت محصولات", key: "card" },
  { text: "اضافه کردن محصول جدید", key: "addNew" },
];
