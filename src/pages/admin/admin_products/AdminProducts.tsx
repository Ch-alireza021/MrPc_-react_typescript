import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../../services";
import {
  Box,
  Paper,
  TableContainer,
  Table,
  TableBody,
  TablePagination,
} from "@mui/material";
import {
  AdminProductsHeaders,
  EnhancedTableToolbar,
  ProductsTableCell,
} from "./components";
import {
  handleRequestSort,
  handleChangeRowsPerPage,
  OrderIF,
  OrdersOrderBy,
  productsDataIF,
} from "./utils";
import React, { useEffect } from "react";
import { Loading } from "../../../components";
import { useSelector } from "react-redux";
import { RootState } from "../../../features/rootReducers";

const AdminProducts = () => {
  const [order, setOrder] = React.useState<OrderIF>("asc");
  const [orderBy, setOrderBy] = React.useState<OrdersOrderBy>("quantity");
  const [page, setPage] = React.useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(5);
  const formValues = useSelector((state: RootState) => state?.sPState);
  const url = Object.entries(formValues)
    .filter(([key, value]) => key !== "req" && value)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
    useEffect(()=>{
      setPage(0)
    },[rowsPerPage,formValues?.req])
    
  const { data, isLoading } = useQuery({
    queryKey: ["adminProducts", order, orderBy, page, rowsPerPage,formValues?.req],
    queryFn: async () =>
      await getProducts({ order, orderBy, page: page + 1, rowsPerPage,url,req:formValues?.req }),
  });
  if (isLoading) return <Loading />;
  const rows = data?.data?.products || [];
  const total = data?.total || 0;
  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2, borderRadius: "1rem" }}>
        <EnhancedTableToolbar />
        <TableContainer sx={{ padding: "1rem" }}>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size="medium"
          >
            <AdminProductsHeaders
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
              {rows?.map((row: productsDataIF, index: number) => {
                const labelId = `enhanced-table-checkbox-${index}`;
                return (
                  <ProductsTableCell
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

export default AdminProducts;
