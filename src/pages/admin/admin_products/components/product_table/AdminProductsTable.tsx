import { Table } from "@mui/material";
import { FC } from "react";
import {
  AdminProductsTableIF,
  handleRequestSort,
} from "../../utils";
import { AdminProductsHeaders } from "./AdminProductsHeaders";
import { AdminProductsTableBody } from "./AdminProductsTableBody";

export const AdminProductsTable: FC<AdminProductsTableIF> = ({
  order,
  orderBy,
  setOrderBy,
  setOrder,
  rows,
}) => {
  return (
    <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size="medium">
      <AdminProductsHeaders
        order={order}
        orderBy={orderBy}
        onRequestSort={(event, property) =>
          handleRequestSort(
            event,
            property,
            orderBy,
            order,
            setOrderBy,
            setOrder
          )
        }
      />
      <AdminProductsTableBody rows={rows} />
    </Table>
  );
};
