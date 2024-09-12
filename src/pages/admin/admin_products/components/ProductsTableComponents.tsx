import { Paper, TableContainer } from "@mui/material";
import {
  EnhancedTableToolbar,
  AdminProductsTable,
  AdminProductsPagination,
} from "./product_table";
import { FC } from "react";
import { ProductsTableComponentsIF } from "../utils";

export const ProductsTableComponents: FC<ProductsTableComponentsIF> = ({
  rows,
  tableDetails,
  setTableDetails,
  total,
  setSelectComp,
}) => {
  return (
    <Paper sx={{ width: "100%", mb: 2, borderRadius: "1rem" }}>
      <EnhancedTableToolbar title={"محصولات"} />
      <TableContainer sx={{ padding: "1rem" }}>
        <AdminProductsTable
          {...{ tableDetails, setTableDetails, rows, setSelectComp }}
        />
      </TableContainer>
      <AdminProductsPagination {...{ tableDetails, setTableDetails, total }} />
    </Paper>
  );
};
