import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../../services";
import { Loading } from "../../../components";
import { DataIF, OrderIF } from "./utils";
import {
  UsersHeaders,
  UsersTableCell,
} from "./components";
import { handleChangeRowsPerPage } from "./utils";
import { EnhancedTableToolbar } from "../admin_products/components";
interface UserViewProps {}
const UserViwe: React.FC<UserViewProps> = () => {
  const [order, setOrder] = React.useState<OrderIF>("desc");
  const [orderBy, setOrderBy] = React.useState<keyof DataIF>("createdAt");
  const [page, setPage] = React.useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(5);
  const { data, isLoading } = useQuery({
    queryKey: ["getUsers", page, rowsPerPage, orderBy, order],
    queryFn: async () =>
      await getUsers({ page: page + 1, limit: rowsPerPage, orderBy, order }),
  });
  if (isLoading) return <Loading />;

  const rows = data?.data?.users || [];
  const total = data?.total || 0;
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
  
  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2, borderRadius: "1rem" ,p:'0 1rem'}}>
      <EnhancedTableToolbar title={'کاربران'}/>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size="medium"
          >
            <UsersHeaders
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {rows?.map((row: DataIF, index: number) => {
                const labelId = `enhanced-table-checkbox-${index}`;
                return (
                  <UsersTableCell
                  key={index}
                    {...{
                      row,
                      labelId,
                      index,
                    }}
                  />
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={total}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={(event) =>
            handleChangeRowsPerPage(event, setRowsPerPage, setPage)
          }
          labelRowsPerPage="تعداد ردیف در صفحه"
        />
      </Paper>
    </Box>
  );
};

export default UserViwe;
