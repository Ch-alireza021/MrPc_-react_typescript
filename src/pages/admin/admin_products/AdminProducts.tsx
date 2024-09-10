import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../../services";
import { Box } from "@mui/material";
import { OrderIF, OrdersOrderBy, SelectHeader } from "./utils";
import React, { useEffect } from "react";
import { Loading } from "../../../components";
import { useSelector } from "react-redux";
import { RootState } from "../../../features/rootReducers";
import {
  AddNewProduct,
  AdminProductsHeaderComp,
  ProductsTableComponents,
} from "./components";
import { AdminProductsCardComp } from "./components/products_card";

const AdminProducts = () => {
  const [order, setOrder] = React.useState<OrderIF>("asc");
  const [orderBy, setOrderBy] = React.useState<OrdersOrderBy>("quantity");
  const [page, setPage] = React.useState<number>(0);
  const [selectComp, setSelectComp] = React.useState<SelectHeader>("table");
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(5);
  const formValues = useSelector((state: RootState) => state?.sPState);
  const url = Object.entries(formValues)
    .filter(([key, value]) => key !== "req" && value)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
  useEffect(() => {
    setPage(0);
  }, [rowsPerPage, formValues?.req]);
  useEffect(() => {
    if (selectComp === "card") {
      setRowsPerPage(30);
    }else if (selectComp === "table") {
      setRowsPerPage(5);
    }
  }, [selectComp]);
  // --------------------------------------------------
  const { data, isLoading } = useQuery({
    queryKey: [
      "adminProducts",
      order,
      orderBy,
      page,
      rowsPerPage,
      formValues?.req,
    ],
    queryFn: async () =>
      await getProducts({
        order,
        orderBy,
        page: page + 1,
        rowsPerPage,
        url,
        req: formValues?.req,
      }),
  });
  if (isLoading) return <Loading />;
  const rows = data?.data?.products || [];
  const total = data?.total || 0;
  const total_pages = data?.total_pages || 0;

  // --------------------------------------------------
  return (
    <Box sx={{ width: "100%" }}>
      <AdminProductsHeaderComp {...{ selectComp, setSelectComp }} />
      {selectComp === "table" && (
        <ProductsTableComponents
          {...{
            order,
            orderBy,
            setOrderBy,
            setOrder,
            rows,
            setPage,
            total,
            rowsPerPage,
            page,
            setRowsPerPage,
            setSelectComp
          }}
        />
      )}
      {selectComp === "card" && (
        <AdminProductsCardComp {...{ rows, page, setPage, total_pages }} />
      )}
      {selectComp === "addNew" && <AddNewProduct {...{setSelectComp}} />}
    </Box>
  );
};

export default AdminProducts;
