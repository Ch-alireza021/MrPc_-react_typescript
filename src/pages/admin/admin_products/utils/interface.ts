import { ReactNode } from "react";

export interface productsDataIF {
  _id: string;
  thumbnail: ReactNode;
  name: string;
  category: string;
  subcategory: string;
  price: number;
  updatedAt: string;
  quantity: number;
}
export type OrdersOrderBy =
  | "name"
  | "category"
  | "subcategory"
  | "price"
  | "updatedAt"
  | "quantity";
export type OrderIF = "asc" | "desc";
export interface EnhancedTablePropsIF {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: OrdersOrderBy
  ) => void;
  order: OrderIF;
  orderBy: string;
}

export interface HeadCellIF {
  disablePadding?: boolean;
  id: keyof productsDataIF;
  label: string;
  numeric: boolean;
}

export interface ProductsTableCellIF {
  row: productsDataIF;
  labelId: string;
  index: number;
}


