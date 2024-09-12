import { useQuery } from "@tanstack/react-query";
import { Loading } from "../../../components";
import { Paper, Table, TableContainer } from "@mui/material";
import {
  EnhancedTableToolbar,
  AdminProductsPagination,
} from "../admin_products/components";
import { ACASTHeader } from "./components/table/header";
import { ACASTBody } from "./components";
import { getCategory } from "../../../services";
import { useTableDetails } from "../../../hooks";
import { handleRequestSort } from "./utils";

const ACategories = () => {
  const { tableDetails, setTableDetails } = useTableDetails();
  const { orderBy, order } = tableDetails;
// ----------------------------------------
  const { data, isLoading } = useQuery({
    queryKey: ["ACSubcategory", tableDetails],
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
      <EnhancedTableToolbar title={"دسته بندی"} />
      <TableContainer sx={{ padding: "1rem" }}>
        <Table
          sx={{ minWidth: 750 }}
          aria-labelledby="tableTitle"
          size="medium"
        >
          <ACASTHeader
            order={order}
            orderBy={orderBy}
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
          <ACASTBody rows={dataArr} />
        </Table>
      </TableContainer>
      <AdminProductsPagination {...{ total, tableDetails, setTableDetails }} />
    </Paper>
  );
};
export default ACategories;
