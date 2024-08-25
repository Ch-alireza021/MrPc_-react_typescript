import { URL_PRODUCT } from "../../config";
import {
  OrdersOrderBy,
  OrderIF,
} from "../../pages/admin/admin_products/utils/interface";
import { api } from "../interceptors";
interface GetProductsIF {
  order: OrderIF;
  orderBy: OrdersOrderBy;
  page: number;
  rowsPerPage: number;
}

export const getProducts = async ({
  order,
  orderBy,
  page,
  rowsPerPage,
}: GetProductsIF) => {
  const respons = await api.get(
    `${URL_PRODUCT}?page=${page}&limit=${rowsPerPage}&sort=${
      order === "asc" ? "" : "-"
    }${orderBy}`
  );
  return respons.data;
};
