import {
  Box,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TablePagination,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { Loading } from "../../../components";
import { getOrders } from "../../../services";
import React, { useState } from "react";
import {
  EnhancedTableToolbar,
  OrdersHeaders,
  OrdersTableCell,
} from "./components";
import {
  handleChangeRowsPerPage,
  handleRequestSort,
  OrderDataIF,
  OrderIF,
  OrdersOrderBy,
  selectedType,
} from "./utils";

const AdminOrdersPage = () => {
  const [order, setOrder] = React.useState<OrderIF>("desc");
  const [orderBy, setOrderBy] = React.useState<OrdersOrderBy>("createdAt");
  const [page, setPage] = React.useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(5);
  const [selected, setSelected] = useState<selectedType>(
    "unchecked"
  );
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [
      "getOrders",
      selected,
      page,
      order,
      orderBy,
      rowsPerPage,
    ],
    queryFn: async () =>
      await getOrders({
        selected,
        page: page + 1,
        order,
        orderBy,
        limit: rowsPerPage,
      }),
  });
  if (isLoading) return <Loading />;
  if (isError) return <Box>{error.message}</Box>;
  const rows = data?.data?.orders || [];
  const total = data?.total || 0;
  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2, borderRadius: "1rem" }}>
        <EnhancedTableToolbar {...{selected, setSelected}} />
        <TableContainer sx={{ padding: "1rem" }}>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size="medium"
          >
            <OrdersHeaders
              order={order}
              orderBy={orderBy}
              onRequestSort={(event, property) =>
                handleRequestSort(
                  event,
                  property,
                  orderBy,
                  order,
                  setOrderBy,
                  setOrder
                )
              }
            />
            <TableBody>
              {rows?.map((row: OrderDataIF, index: number) => {
                const labelId = `enhanced-table-checkbox-${index}`;
                return (
                  <OrdersTableCell
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

export default AdminOrdersPage;
