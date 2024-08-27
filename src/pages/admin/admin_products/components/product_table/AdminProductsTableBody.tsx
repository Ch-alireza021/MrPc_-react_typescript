import { TableBody } from "@mui/material";
import { productsDataIF } from "../../utils";
import { ProductsTableCell } from "./ProductsTableCell";

export const AdminProductsTableBody = ({rows}:{rows:productsDataIF[]}) => {
  return (
    <TableBody>
      {rows?.map((row: productsDataIF, index: number) => {
        const labelId = `enhanced-table-checkbox-${index}`;
        return (
          <ProductsTableCell
            key={index}
            {...{
              row,
              labelId,
              index,
            }}
          />
        );
      })}
    </TableBody>
  );
};
