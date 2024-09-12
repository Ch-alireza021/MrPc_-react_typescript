import { ReactNode } from "react";
import { OrderIF } from "../../admin_orders/utils";

export interface CategoryIF {
  icon: string;
  name: string;
  _id: string;
  createdAt: string;
  edit?: ReactNode;
}

export type CategoryOrderBy = "name" | "createdAt";
export interface EnhancedTablePropsIF {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: CategoryOrderBy
  ) => void;
  order: OrderIF;
  orderBy: string;
}
export interface ACASTCellIF {
    row: CategoryIF;
    labelId: string;
    index: number;
    data:CategoryDataIF[]
  }

  export interface CategoryDataIF {
    key:keyof CategoryIF;
    render: (arg0?: any) => string|ReactNode;
  }