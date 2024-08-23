import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../../services";
import { Loading } from "../../../components";
import { DataIF, OrderIF } from "./utils";
import { UsersHeaders } from "./components";
import { EnhancedTableToolbar } from "./components/EnhancedTableToolbar";
import { handleChangeRowsPerPage, handleClick, handleSelectAllClick } from "./utils";

const UserViwe = () => {
  const [order, setOrder] = React.useState<OrderIF>("desc");
  const [orderBy, setOrderBy] = React.useState<keyof DataIF>("createdAt");
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(5);

  const { data, isError,isLoading } = useQuery({
    queryKey: ["getUsers", page, rowsPerPage, orderBy, order],
    queryFn: async () =>
      await getUsers({ page: page + 1, limit: rowsPerPage, orderBy, order }),
  });
  if (isLoading) return <Loading />;
  if (isError) return { isError };
  const rows = data?.data?.users || [];
  const total_pages = data?.total_pages || 0;
  const handleRequestSort = (
    _event: React.MouseEvent<unknown>,
    property: keyof DataIF
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const isSelected = (_id: string) => selected.indexOf(_id) !== -1;
  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2, borderRadius: "1rem" }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size="medium"
          >
            <UsersHeaders
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={(event) =>
                handleSelectAllClick(event, rows, setSelected)
              }
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {rows?.map((row: DataIF, index: number) => {
                const isItemSelected = isSelected(row._id);
                const labelId = `enhanced-table-checkbox-${index}`;
                return (
                  <TableRow
                    hover
                    onClick={(event) =>
                      handleClick(event, row._id, selected, setSelected)
                    }
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
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {index + 1 + " - " + row.firstname}
                    </TableCell>
                    <TableCell align="left">{row.lastname}</TableCell>
                    <TableCell align="left">{row.phoneNumber}</TableCell>
                    <TableCell align="left">
                      {new Intl.DateTimeFormat("fa-IR").format(
                        new Date(row.createdAt)
                      )}
                    </TableCell>
                    <TableCell align="left">{row.username}</TableCell>
                    <TableCell align="left">{row.address}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={total_pages || 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={(event) => handleChangeRowsPerPage(event, setRowsPerPage, setPage)
          }
          labelRowsPerPage="تعداد ردیف در صفحه"
        />
      </Paper>
    </Box>
  );
};

export default UserViwe;
