import React from "react";
import { TableDetailsIF } from "../../pages/admin/admin_products/utils";

export const useTableDetails = () => {
  const [tableDetails, setTableDetails] = React.useState<TableDetailsIF>({
    order: "desc",
    orderBy: "createdAt",
    page: 0,
    rowsPerPage: 5,
  });
  return { tableDetails, setTableDetails };
};
