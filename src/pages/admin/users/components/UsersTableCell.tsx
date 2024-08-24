import { TableRow, TableCell, Checkbox } from "@mui/material";
import { DataIF, handleClick, UsersTableCellIF } from "../utils";
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
  selected,
  setSelected,
  isItemSelected,
  labelId,
  index,
}) => {
  return (
    <TableRow
      hover
      onClick={(event) => handleClick(event, row._id, selected, setSelected)}
      role="checkbox"
      aria-checked={isItemSelected}
      tabIndex={-1}
      key={row._id}
      selected={isItemSelected}
      sx={{ cursor: "pointer" }}
    >
      <TableCell padding="checkbox">
        <Checkbox
          color="primary"
          checked={isItemSelected}
          inputProps={{
            "aria-labelledby": labelId,
          }}
        />
      </TableCell>
      {cellData.map((cell,indexCell) => {
        let cellContent;

        if (cell === "firstname") {
          cellContent = `${index + 1} - ${row.firstname}`;
        } else if (cell === "createdAt") {
          cellContent = new Intl.DateTimeFormat("fa-IR").format(new Date(row.createdAt));
        } else {
          cellContent = row?.[cell]; 
        }

        return (
          <TableCell
            key={cell+indexCell}
            align="left"
            component={index === 0 ? "th" : 'td'}
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
