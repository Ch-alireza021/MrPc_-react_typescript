import { CategoryDataIF, CategoryIF } from "../../pages/admin";

export interface TableCellIF {
  row: CategoryIF;
  labelId: string;
  index: number;
  data: CategoryDataIF[];
}
