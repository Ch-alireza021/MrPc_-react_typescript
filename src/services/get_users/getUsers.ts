import { URL_USER } from "../../config";
import { api } from "../interceptors";

export const getUsers = async ({
  page,
  limit,
}: {
  page: number;
  limit: number;
}) => {
  const respons = await api.get(`${URL_USER}?page=${page}&limit=${limit}`);
  return respons.data;
};
