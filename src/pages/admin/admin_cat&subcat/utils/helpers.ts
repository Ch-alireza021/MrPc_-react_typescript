import { SetStateAction } from "react";
import { TableDetailsIF } from "../../admin_products/utils";
import { CategoryOrderBy } from "./interface";

export const handleRequestSort = (
    _event: React.MouseEvent<unknown>,
    property: CategoryOrderBy,
    orderBy: string,
    order: string,
    setTableDetails: { (value: SetStateAction<TableDetailsIF>): void }
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setTableDetails((pre) => ({
      ...pre,
      order: isAsc ? "desc" : "asc",
      orderBy: property,
    }));
  };