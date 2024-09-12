import { TableRow, TableCell } from "@mui/material";
import { FC } from "react";
import { ACASTCellIF } from "../../utils";
export const ACASTCell: FC<ACASTCellIF> = ({
  row,
  labelId,
  index,
  data
 }) => {
  return (
    <TableRow hover tabIndex={-1} key={row._id} sx={{ cursor: "pointer" }}>
      {data.map((cell, indexCell) => {
        return (
          <TableCell
            key={cell?.key + indexCell}
            align="left"
            component={index === 0 ? "th" : "td"}
            id={cell?.key === "name" ? labelId : undefined}
            scope={cell?.key === "name" ? "row" : undefined}
          >
            {cell?.render(row)}
          </TableCell>
        );
      })}
    </TableRow>
  );
};
