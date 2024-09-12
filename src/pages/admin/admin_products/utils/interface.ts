import { ReactNode, SetStateAction } from "react";
import { CategoryOrderBy } from "../../admin_cat&subcat";

export interface productsDataIF {
  _id: string;
  thumbnail: ReactNode;
  name: string;
  category: string;
  subcategory: string;
  price: number;
  updatedAt: string;
  quantity: number;
  edit?: ReactNode;
  images: File[] | [];
}
export type OrdersOrderBy =
  | "name"
  | "category"
  | "subcategory"
  | "price"
  | "updatedAt"
  | "createdAt"
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

export interface AdminProductsTableIF {
  rows: productsDataIF[];
  tableDetails: TableDetailsIF;
  setTableDetails: (value: SetStateAction<TableDetailsIF>) => void;
  setSelectComp: (arg0: SelectHeader) => void;
}

export interface TableDetailsIF {
  order: OrderIF;
  orderBy: OrdersOrderBy;
  page: number;
  rowsPerPage: number;
}
export interface AdminProductsPaginationIF {
  total: number;
  tableDetails: TableDetailsIF;
  setTableDetails: (value: SetStateAction<TableDetailsIF>) => void;
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
  setSelectComp: (arg0: SelectHeader) => void;
}

export type SelectHeader = "table" | "card" | "addNew";
export interface ShowHeaderIF {
  text: string;
  key: SelectHeader;
}
export interface ProductsTableComponentsIF {
  // order: OrderIF;
  // setOrderBy: (value: SetStateAction<OrdersOrderBy>) => void;
  // orderBy: string;
  // setOrder: (value: SetStateAction<OrderIF>) => void;
  // page: number;
  // setPage: (value: SetStateAction<number>) => void;
  // rowsPerPage: number;
  // setRowsPerPage: (value: SetStateAction<number>) => void;
  rows: productsDataIF[];
  total: number;
  tableDetails: TableDetailsIF;
  setTableDetails: (value: SetStateAction<TableDetailsIF>) => void;
  setSelectComp: (arg0: SelectHeader) => void;
}
// --------------------------------------------
export interface SearchSelectOptionDatasIF {
  title: string;
  URL: (formValues: { category?: string }) => string;
  responseData: string;
  showValue: "category" | "subcategory";
  onChange: (value: string, dispatch: (arg0: any) => void) => void;
}
