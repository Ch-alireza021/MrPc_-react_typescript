import { ChangeEvent, SetStateAction } from "react";
import { OrdersOrderBy, SelectHeader, TableDetailsIF } from "./interface";
import { SearchProductsState } from "../../../../features";
export type setPage = (value: SetStateAction<number>) => void;
export const handleChangeRowsPerPage = (
  event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  setTableDetails: (value: SetStateAction<TableDetailsIF>) => void
) => {
  setTableDetails((pre) => ({
    ...pre,
    rowsPerPage: parseInt(event.target.value, 10),
    page: 0,
  }));
};

export const handleRequestSort = (
  _event: React.MouseEvent<unknown>,
  property: OrdersOrderBy,
  orderBy: string,
  order: string,
  setTableDetails: (value: SetStateAction<TableDetailsIF>) => void
) => {
  const isAsc = orderBy === property && order === "asc";
  setTableDetails((pre) => ({
    ...pre,
    order: isAsc ? "desc" : "asc",
    orderBy: property,
  }));
};

export const switchTab = ({
  selectComp,
  setTableDetails,
}: {
  selectComp: SelectHeader;
  setTableDetails: (value: SetStateAction<TableDetailsIF>) => void;
}) => {
  if (selectComp === "card") {
    setTableDetails((pre) => ({ ...pre, rowsPerPage: 30 }));
  } else if (selectComp === "table") {
    setTableDetails((pre) => ({ ...pre, rowsPerPage: 5 }));
  }
};

export const creatUrl=(formValues: SearchProductsState)=>{
  return  Object.entries(formValues)
  .filter(([key, value]) => key !== "req" && value)
  .map(([key, value]) => `${key}=${value}`)
  .join("&");
}
