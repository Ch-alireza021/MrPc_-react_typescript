import { URL_CATEGORY, URL_SUBCATEGORY } from "../../../../config";
import { productsDataIF } from "../utils";
import { HoverReveal } from "../../../../components";
import { AdminProductImage, CASName } from "../components";
import { fCurrency, fDate } from "../../../../utils";

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
    render: (row: { updatedAt: string }) =>
      fDate(row?.updatedAt)
  },
  { key: "quantity", render: (row: { quantity: number }) => row?.quantity },
];
