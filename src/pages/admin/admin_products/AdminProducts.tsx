import { AdminProductsCardComp } from "./components/products_card";
import { creatUrl, SelectHeader, switchTab } from "./utils";
import { RootState } from "../../../features/rootReducers";
import { useQuery } from "@tanstack/react-query";
import { useTableDetails } from "../../../hooks";
import { getProducts } from "../../../services";
import { Loading } from "../../../components";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import { Box } from "@mui/material";
import {
  AddNewProduct,
  AdminProductsHeaderComp,
  ProductsTableComponents,
} from "./components";

const AdminProducts = () => {
  const { tableDetails, setTableDetails } = useTableDetails();
  const { order, orderBy, page, rowsPerPage } = tableDetails;
  // -------------------------------------------------------------------
  const [selectComp, setSelectComp] = React.useState<SelectHeader>("table");
  const formValues = useSelector((state: RootState) => state?.sPState);
  const url = creatUrl(formValues);
  useEffect(() => {
    setTableDetails((pre) => ({ ...pre, page: 0 }));
  }, [rowsPerPage, formValues?.req]);
  useEffect(() => {
    switchTab({ selectComp, setTableDetails });
  }, [selectComp]);
  // --------------------------------------------------
  const { data, isLoading } = useQuery({
    queryKey: ["adminProducts", tableDetails, formValues?.req],
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
            tableDetails,
            setTableDetails,
            rows,
            total,
            setSelectComp,
          }}
        />
      )}
      {selectComp === "card" && (
        <AdminProductsCardComp
          {...{ rows, page: tableDetails.page, setTableDetails, total_pages }}
        />
      )}
      {selectComp === "addNew" && <AddNewProduct {...{ setSelectComp }} />}
    </Box>
  );
};

export default AdminProducts;
