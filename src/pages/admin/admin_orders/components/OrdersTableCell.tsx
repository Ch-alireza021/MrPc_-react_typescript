import { TableRow, TableCell } from "@mui/material";
import { OrderDataIF, UsersTableCellIF } from "../utils";
import { FC } from "react";
import { GetUser, OrderModal } from "../../../../components";

const cellData: Array<keyof OrderDataIF> = [
  "user",
  "totalPrice",
  "createdAt",
  "order",
];
export const OrdersTableCell: FC<UsersTableCellIF> = ({
  row,
  labelId,
  index,
}) => {
  return (
    <TableRow
      hover
      tabIndex={-1}
      key={row._id}
      sx={{ cursor: "pointer" }}
    >
      {cellData.map((cell, indexCell) => {
      return (
          <TableCell
            key={cell + indexCell}
            align="left"
            component={index === 0 ? "th" : "td"}
            id={cell === "user" ? labelId : undefined}
            scope={cell === "user" ? "row" : undefined}
          >
            {cell === "user" ? (
              <GetUser id={row?.user} />
            ) : cell === "createdAt" ? (
              new Intl.DateTimeFormat("fa-IR").format(new Date(row.createdAt))
            ) : cell === "order" ? (
              <OrderModal {...{ row }} />
            ) : (
              row?.[cell]
            )}
          </TableCell>
        );
      })}
    </TableRow>
  );
};
