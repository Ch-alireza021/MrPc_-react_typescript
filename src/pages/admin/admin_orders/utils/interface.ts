import { ReactNode } from "react";
import { Row } from "../../../../components";

export interface OrderDataIF {
  user: string;
  _id: string;
  createdAt: string;
  totalPrice: number;
  order?: ReactNode;
}
export type OrdersOrderBy = "createdAt" | "totalPrice";
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
  disablePadding: boolean;
  id: keyof OrderDataIF;
  label: string;
  numeric: boolean;
}

export interface UsersTableCellIF {
  row: OrderDataIF;
  labelId: string;
  index: number;
}

export type selectedType = "unchecked" | "checked";
export interface SelectedCompIF {
  selected: selectedType;
  setSelected: (arg0: selectedType) => void;
}
export interface OrderDataBtn {
  text: string;
  key: selectedType;
}

export interface ViweOrderIF {
  row: Row;
  setOpen: (arg0: boolean) => void;
}