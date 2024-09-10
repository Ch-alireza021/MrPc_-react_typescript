import axios from "axios";
import { BASE_URL, URL_REFRESH_TOKEN } from "../../config";
import { getAccessToken, getLoginRole, getRefreshToken, setAccessToken } from "../cookies";
// -----------------------------------------------------------
export const api = axios.create({ baseURL: BASE_URL });
// -----------------------------------------------------------
export const refresh = async (_data: string | undefined) => {
  try {
    const refreshToken = getRefreshToken();
    const response = await api.post(URL_REFRESH_TOKEN, {
      refreshToken: refreshToken,
    });
    return response.data;
  } catch (error:any) {
    throw error.response.message;
  }
};

api.interceptors.request.use(
  async function (config) {
    const isLogin = getLoginRole();
    const token = getAccessToken();
    if (isLogin === "ADMIN") {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    const generatedRefreshToken = getRefreshToken();
    if (
      (error.response.status === 401 || error.response.status === 403) &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      try {
        refresh(generatedRefreshToken).then((data) => {
          setAccessToken(data.token.accessToken);
          originalRequest.headers[
            "Authorization"
          ] = `Bearer ${data.token.accessToken}`;
          return api(originalRequest);
        });
      } catch (refreshError) {}
    }
    console.log("error");
    return Promise.reject(error);
  }
);
