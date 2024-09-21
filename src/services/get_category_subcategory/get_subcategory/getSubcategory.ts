import { OrdersOrderBy } from "../../../pages/admin/admin_products/utils";
import { OrderIF } from "../../../pages/admin/admin_orders/utils";
import { URL_SUBCATEGORY } from "../../../config";
import { api } from "../../interceptors";
interface GetIF {
  order: OrderIF;
  orderBy: OrdersOrderBy;
  page: number;
  rowsPerPage: number;
}

export const getSubcategory = async ({
  tableDetails,
  category,
  subcategory,
}: {
  tableDetails: GetIF;
  category: string;
  subcategory: string;
}) => {
  console.log({ category }, { subcategory });
  const { order, orderBy, page, rowsPerPage } = tableDetails;
  const respons = await api.get(
    `${URL_SUBCATEGORY}?page=${page + 1}&limit=${rowsPerPage}&sort=${
      order === "asc" ? "" : "-"
    }${orderBy}
     ${category.length && !subcategory.length  ? `&category=${category}` : ""}
   ${subcategory.length ? `&_id=${subcategory}` : ""}`
  );
  return respons.data;
};
