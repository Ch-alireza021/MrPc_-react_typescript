import { URL_CATEGORY, URL_SUBCATEGORY } from "../../../../config";
import { productsDataIF } from "../utils";
import { HoverReveal } from "../../../../components";
import { AdminProductImage, CASName } from "../components";

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
  { key: "price", render: (row: { price: number }) => row?.price },
  {
    key: "updatedAt",
    render: (row: { updatedAt: string }) =>
      new Intl.DateTimeFormat("fa-IR").format(new Date(row?.updatedAt)),
  },
  { key: "quantity", render: (row: { quantity: number }) => row?.quantity },
];
