import { ASSearch } from "../admin_products/components/search/ASSearch";
import { Paper, Table, TableContainer } from "@mui/material";
import { ACASTHeader } from "./components/table/header";
import { getSubcategory } from "../../../services";
import { useTableDetails } from "../../../hooks";
import { useQuery } from "@tanstack/react-query";
import { Loading } from "../../../components";
import { handleRequestSort } from "./utils";
import { subcategoryData } from "./config";
import { ACASTBody, ASEABtn } from "./components";
import {
  EnhancedTableToolbar,
  AdminProductsPagination,
} from "../admin_products/components";
import { useSelector } from "react-redux";
import { RootState } from "../../../features/rootReducers";

const ASubcategories = () => {
  const { tableDetails, setTableDetails } = useTableDetails();
  const { orderBy, order } = tableDetails;
  const formValues = useSelector((state: RootState) => state?.sPState);
  const {category,subcategory}=formValues
  // ----------------------------------------
  const { data, isLoading } = useQuery({
    queryKey: ["ACSubcategory", tableDetails,category,subcategory],
    queryFn: async () =>
      await getSubcategory({
        tableDetails,category,subcategory
      }),
  });
  // ----------------------------------------
  const dataArr = data?.data?.subcategories;
  const total = Number(data?.total) || 0;
  if (isLoading) return <Loading />;

  return (
    <>
      <Paper sx={{ width: "100%", mb: 2, borderRadius: "1rem" }}>
        <EnhancedTableToolbar title={" زیر مجموعه"}>
          <ASSearch isOpen={true} />
          <ASEABtn  />
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
              onRequestSort={(event, property) =>
                handleRequestSort(
                  event,
                  property,
                  orderBy,
                  order,
                  setTableDetails
                )
              }
              headerData={"subcategory"}
            />
            <ACASTBody rows={dataArr} data={subcategoryData} />
          </Table>
        </TableContainer>
        <AdminProductsPagination
          {...{ total, tableDetails, setTableDetails }}
        />
      </Paper>
    </>
  );
};
export default ASubcategories;
