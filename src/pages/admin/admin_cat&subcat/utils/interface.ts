import { ReactNode } from "react";
import { OrderIF } from "../../admin_orders/utils";
import { ShowSnackbarType } from "../../../../hooks";

export interface CategoryIF {
  icon: string | File;
  name: string;
  _id: string;
  createdAt: string;
  edit?: ReactNode;
}
export interface SubcategoryIF {
  icon: string;
  name: string;
  category: string;
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
  headerData: "category" | "subcategory";
}
export interface ACASTCellIF {
  row: CategoryIF;
  labelId: string;
  index: number;
  data: CategoryDataIF[] | SubategoryDataIF[];
}

export interface CategoryDataIF {
  key: keyof CategoryIF;
  render: (arg0?: any) => string | ReactNode;
}
export interface SubategoryDataIF {
  key: keyof SubcategoryIF;
  render: (arg0?: any) => string | ReactNode;
}
// -------------------------------
export interface AECFormDataIF {
  label: string;

  id: keyof CategoryIF;
}
// -------------------------------
export interface ACASEBtnIF {
  row?: CategoryIF;
  data: AECFormDataIF[];
}

// ------------------------------------------
// AECForm ==> admin edit category form
// ------------------------------------------
export interface AECFormIF {
  row?: CategoryIF;
  data: AECFormDataIF[];
  setOpen: (arg0: boolean) => void;
}
// ---------
export interface ECOnSuccessIF {
  setOpen: (arg0: boolean) => void;
  showSnackbar: ShowSnackbarType;
  queryClient: any;
  isEdit:boolean;
}
// ---------
export interface ECOnErrorIF {
  error: {
    message: string;
    response?: {
      data?: {
        error: { message: string };
      };
      status: number;
    };
  } | Error;
  showSnackbar: ShowSnackbarType;
  isEdit: boolean;
}