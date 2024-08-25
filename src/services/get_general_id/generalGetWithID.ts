import { api } from "../interceptors";

export const generalGetWithId = async (URL: string, id: string) => {
    const respons = await api.get(`${URL}/${id}`);
    return respons.data;
  };