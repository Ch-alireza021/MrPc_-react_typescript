import { URL_USER } from "../../config";
import { api } from "../interceptors";

export const getUsers = async ({
  page,
  limit,
  orderBy,
  order
}: {
  page: number;
  limit: number;
  orderBy:string;
  order:string;
}) => {
  const respons = await api.get(`${URL_USER}?page=${page}&limit=${limit}&sort=${order==='asc'? '':'-'}${orderBy}`);
  return respons.data;
};
