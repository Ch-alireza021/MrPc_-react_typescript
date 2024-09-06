import { TableBody } from "@mui/material";
import { productsDataIF, SelectHeader } from "../../utils";
import { ProductsTableCell } from "./ProductsTableCell";

export const AdminProductsTableBody = ({rows,setSelectComp}:{rows:productsDataIF[],setSelectComp:(arg0: SelectHeader)=> void;}) => {
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
              setSelectComp
            }}
          />
        );
      })}
    </TableBody>
  );
};
