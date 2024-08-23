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
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof DataIF
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: OrderIF;
  orderBy: string;
  rowCount: number;
}

export interface HeadCellIF {
    disablePadding: boolean;
    id: keyof DataIF;
    label: string;
    numeric: boolean;
  }