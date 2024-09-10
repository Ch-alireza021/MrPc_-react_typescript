import { TableRow, TableCell } from "@mui/material";
import { ProductsTableCellIF } from "../../utils";
import { FC } from "react";
import { productCellData } from "../../config";


export const ProductsTableCell: FC<ProductsTableCellIF> = ({
  row,
  labelId,
  index,
  setSelectComp
}) => {
  return (
    <TableRow hover tabIndex={-1} key={row._id} sx={{ cursor: "pointer" }}>
      {productCellData.map((cell, indexCell) => {
        return (
          <TableCell
            key={cell?.key + indexCell}
            align="left"
            component={index === 0 ? "th" : "td"}
            id={cell?.key === "thumbnail" ? labelId : undefined}
            scope={cell?.key === "thumbnail" ? "row" : undefined}
          >
            {cell?.render(row,setSelectComp)}
          </TableCell>
        );
      })}
    </TableRow>
  );
};
