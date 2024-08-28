import { ChangeEvent, SetStateAction } from "react";
import { OrderIF, OrdersOrderBy } from "./interface";
export type setPage= (value: SetStateAction<number>)=> void
export const handleChangeRowsPerPage = (
  event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  setRowsPerPage: { (value: SetStateAction<number>): void },
  setPage:setPage
) => {
  setRowsPerPage(parseInt(event.target.value, 10));
  setPage(0);
};

export const handleRequestSort = (
  _event: React.MouseEvent<unknown>,
  property: OrdersOrderBy,
  orderBy: string,
  order: string,
  setOrderBy: { (value: SetStateAction<OrdersOrderBy>): void },
  setOrder: { (value: SetStateAction<OrderIF>): void }
) => {
  const isAsc = orderBy === property && order === "asc";
  setOrder(isAsc ? "desc" : "asc");
  setOrderBy(property);
};

