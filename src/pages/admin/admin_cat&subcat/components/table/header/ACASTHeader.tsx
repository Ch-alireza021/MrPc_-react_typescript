import {
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
  Box,
} from "@mui/material";

import { visuallyHidden } from "@mui/utils";
import { header } from "../../../utils";
import { CategoryOrderBy, EnhancedTablePropsIF } from "../../../utils/interface";

// -------------------------------------------------------------
// ACASTHeader ==> admin category ans subcategory header
export const ACASTHeader = (props: EnhancedTablePropsIF) => {
  const { order, orderBy, onRequestSort } = props;

  const createSortHandler =
    (property: CategoryOrderBy) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };
  const sort: CategoryOrderBy[] = ["name", "createdAt"];
  return (
    <TableHead>
      <TableRow>
        {header.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={"left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {sort.includes(headCell.id as CategoryOrderBy) ? (
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id as CategoryOrderBy)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>
            ) : (
              <>{headCell.label}</>
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
