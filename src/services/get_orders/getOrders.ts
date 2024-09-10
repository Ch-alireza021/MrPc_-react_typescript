import { OrdersOrderBy, selectedType } from "../../pages/admin/admin_orders/utils";
import { OrderIF } from "../../pages/admin/users/utils";
import { api } from "../interceptors";

interface GetOrdersIF {
  selected: selectedType;
  page: number;
  order: OrderIF;
  orderBy: OrdersOrderBy;
  limit: number;
  id?: string;
}

export const getOrders = async ({
  selected,
  page,
  order,
  orderBy,
  limit,
  id,
}: GetOrdersIF) => {
  const url = `orders?page=${page}&limit=${limit}&deliveryStatus=${selected==='checked'}&sort=${
    order === "asc" ? "" : "-"
  }${orderBy}${id ? "&user=" + id : ""}`;

  const response = await api.get(url);
  return response.data;
};
