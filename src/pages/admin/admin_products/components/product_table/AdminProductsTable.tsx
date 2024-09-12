import { Table } from "@mui/material";
import { FC } from "react";
import { AdminProductsTableIF, handleRequestSort } from "../../utils";
import { AdminProductsHeaders } from "./AdminProductsHeaders";
import { AdminProductsTableBody } from "./AdminProductsTableBody";

export const AdminProductsTable: FC<AdminProductsTableIF> = ({
  tableDetails,
  setTableDetails,
  rows,
  setSelectComp,
}) => {
  const { order, orderBy } = tableDetails;
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
            setTableDetails
          )
        }
      />
      <AdminProductsTableBody {...{ rows, setSelectComp }} />
    </Table>
  );
};
