import { URL_USER } from "../../config";
import { api } from "../interceptors";

export const getUser = async ({ id }: { id: string }) => {
  const respons = await api.get(`${URL_USER}/${id}`);
  return respons?.data?.data?.user
  ;
};
