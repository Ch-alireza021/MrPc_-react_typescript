import { SetStateAction } from "react";

export interface DataIF {
  lastname: string;
  firstname: string;
  _id: string;
  createdAt: string;
  username: string;
  address: string;
  phoneNumber: number;
}

export type OrderIF = "asc" | "desc";
export interface EnhancedTablePropsIF {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof DataIF
  ) => void;
  order: OrderIF;
  orderBy: string;
}

export interface HeadCellIF {
    disablePadding: boolean;
    id: keyof DataIF;
    label: string;
    numeric: boolean;
  }

  export interface UsersTableCellIF {
    row: DataIF;
    labelId: string;
    index: number;
  }