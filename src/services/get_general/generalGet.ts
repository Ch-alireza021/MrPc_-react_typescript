import { api } from "../interceptors";

export const generalGetWithId = async (URL: string, id: string) => {
  const respons = await api.get(`${URL}/${id}`);
  return respons.data;
};

export const generalGet = async (URL: string) => {
  const respons = await api.get(`${URL}`);
  console.log(respons.data);
  return respons.data;
};
