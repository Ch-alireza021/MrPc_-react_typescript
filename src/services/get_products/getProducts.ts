import { URL_PRODUCT } from "../../config";
import { api } from "../interceptors";

export const getProducts = async () => {
    const respons = await api.get(`${URL_PRODUCT}?page=${1}&limit=${5}`);
    return respons.data;
  };