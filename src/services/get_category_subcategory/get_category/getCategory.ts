import { URL_CATEGORY } from "../../../config";

import { OrderIF } from "../../../pages/admin/admin_orders/utils";
import { OrdersOrderBy } from "../../../pages/admin/admin_products/utils";
import { api } from "../../interceptors";
interface GetIF {
  order: OrderIF;
  orderBy: OrdersOrderBy;
  page: number;
  rowsPerPage: number;
}

export const getCategory = async ({
  tableDetails,
}: {
  tableDetails: GetIF;
}) => {
  const { order, orderBy, page, rowsPerPage } = tableDetails;
  const respons = await api.get(
    `${URL_CATEGORY}?page=${page + 1}&limit=${rowsPerPage}&sort=${
      order === "asc" ? "" : "-"
    }${orderBy}`
  );
  return respons.data;
};
