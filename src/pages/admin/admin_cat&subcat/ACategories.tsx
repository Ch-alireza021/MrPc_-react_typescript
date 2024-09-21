import { Paper, Table, TableContainer } from "@mui/material";
import { ACASTHeader } from "./components/table/header";
import { aECFormData, categoryData } from "./config";
import { ACASEBtn, ACASTBody } from "./components";
import { useQuery } from "@tanstack/react-query";
import { useTableDetails } from "../../../hooks";
import { getCategory } from "../../../services";
import { Loading } from "../../../components";
import { handleRequestSort } from "./utils";
import {
  EnhancedTableToolbar,
  AdminProductsPagination,
} from "../admin_products/components";
// -----------------------------------------
// admin categories
const ACategories = () => {
  const { tableDetails, setTableDetails } = useTableDetails();
  const { orderBy, order } = tableDetails;
  // ----------------------------------------
  const { data, isLoading } = useQuery({
    queryKey: ["ACCategory", tableDetails],
    queryFn: async () =>
      await getCategory({
        tableDetails,
      }),
  });
  // ----------------------------------------
  const dataArr = data?.data?.categories;
  const total = Number(data?.total) || 0;
  if (isLoading) return <Loading />;

  return (
    <Paper sx={{ width: "100%", mb: 2, borderRadius: "1rem" }}>
      <EnhancedTableToolbar title={"دسته بندی"}>
        <ACASEBtn data={aECFormData} />
      </EnhancedTableToolbar>
      <TableContainer sx={{ padding: "1rem" }}>
        <Table
          sx={{ minWidth: 750 }}
          aria-labelledby="tableTitle"
          size="medium"
        >
          <ACASTHeader
            order={order}
            orderBy={orderBy}
            headerData={"category"}
            onRequestSort={(event, property) =>
              handleRequestSort(
                event,
                property,
                orderBy,
                order,
                setTableDetails
              )
            }
          />
          <ACASTBody rows={dataArr} data={categoryData} />
        </Table>
      </TableContainer>
      <AdminProductsPagination {...{ total, tableDetails, setTableDetails }} />
    </Paper>
  );
};
export default ACategories;
