import { TableHead, TableRow, TableCell, Checkbox, TableSortLabel, Box } from "@mui/material";
import { EnhancedTablePropsIF, DataIF, header } from "../utils";
import { visuallyHidden } from "@mui/utils";

export const UsersHeaders=(props: EnhancedTablePropsIF)=> {
    const {
      order,
      orderBy,
      onRequestSort,
    } = props;
    const createSortHandler =
      (property: keyof DataIF) => (event: React.MouseEvent<unknown>) => {
        onRequestSort(event, property);
      };
  
    return (
      <TableHead>
        <TableRow>
       
          {header.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={ "left"}
              padding={headCell.disablePadding ? "none" : "normal"}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc" ? "sorted descending" : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }