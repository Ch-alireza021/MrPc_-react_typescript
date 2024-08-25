import {
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
  Box,
} from "@mui/material";
import { EnhancedTablePropsIF, OrdersOrderBy, header } from "../utils";
import { visuallyHidden } from "@mui/utils";

export const AdminProductsHeaders = (props: EnhancedTablePropsIF) => {
  const { order, orderBy, onRequestSort } = props;

  const createSortHandler =
    (property: OrdersOrderBy) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };
  const sort: OrdersOrderBy[] = [
    "name",
    "category",
    "subcategory",
    "price",
    "updatedAt",
    "quantity",
  ];
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
            {sort.includes(headCell.id as OrdersOrderBy) ? (
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id as OrdersOrderBy)}
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
