import { Paper, TableContainer } from "@mui/material";
import {
  EnhancedTableToolbar,
  AdminProductsTable,
  AdminProductsPagination,
} from "./product_table";
import { FC } from "react";
import { ProductsTableComponentsIF } from "../utils";

export const ProductsTableComponents: FC<ProductsTableComponentsIF> = ({
  order,
  orderBy,
  setOrderBy,
  setOrder,
  rows,
  setPage,
  total,
  rowsPerPage,
  page,
  setRowsPerPage,
}) => {
  return (
    <Paper sx={{ width: "100%", mb: 2, borderRadius: "1rem" }}>
      <EnhancedTableToolbar />
      <TableContainer sx={{ padding: "1rem" }}>
        <AdminProductsTable
          {...{ order, orderBy, setOrderBy, setOrder, rows }}
        />
      </TableContainer>
      <AdminProductsPagination
        {...{ setPage, total, rowsPerPage, page, setRowsPerPage }}
      />
    </Paper>
  );
};
