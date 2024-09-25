import { TableRow, TableCell } from "@mui/material";
import { DataIF, UsersTableCellIF } from "../utils";
import { FC } from "react";

const cellData: Array<keyof DataIF> = [
  "firstname",
  "lastname",
  "phoneNumber",
  "createdAt",
  "username",
  "address",
];

export const UsersTableCell: FC<UsersTableCellIF> = ({
  row,
  labelId,
  index,
}) => {
  return (
    <TableRow>
      {cellData.map((cell, indexCell) => {
        let cellContent;

        if (cell === "firstname") {
          cellContent = `${index + 1} - ${row.firstname}`;
        } else if (cell === "createdAt") {
          cellContent = new Intl.DateTimeFormat("fa-IR").format(
            new Date(row.createdAt)
          );
        } else {
          cellContent = row?.[cell];
        }

        return (
          <TableCell
            key={cell + indexCell}
            align="left"
            component={index === 0 ? "th" : "td"}
            id={cell === "firstname" ? labelId : undefined}
            scope={cell === "firstname" ? "row" : undefined}
            padding={cell === "firstname" ? "none" : undefined}
          >
            {cellContent}
          </TableCell>
        );
      })}
    </TableRow>
  );
};
