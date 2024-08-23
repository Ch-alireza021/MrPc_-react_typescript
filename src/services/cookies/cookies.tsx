import Cookies from "js-cookie";
import { UserIF } from "../../config";
declare module "js-cookie" {
  export function get(name: string): string;
  export function set(name: string, value: string, options?: any): void;
  export function remove(name: string, options?: any): void;
}

const ACCESS_TOKEN_KEY = "access_token";
const REFRESH_TOKEN_KEY = "refresh_token";
const USER_DATA = "user_data";
const LOGIN_ROLE = "user_data";

export const saveDataToCookie = (
  accessToken: string,
  refreshToken: string,
  userData: string | null,
  isLogin: string
) => {
  Cookies.set(ACCESS_TOKEN_KEY, accessToken, { expires: 7 }),
    Cookies.set(REFRESH_TOKEN_KEY, refreshToken, { expires: 7 });
  Cookies.set(LOGIN_ROLE, isLogin, { expires: 7 });

  if (userData) {
    Cookies.set(USER_DATA, userData, { expires: 7 });
  }
};

export const setAccessToken = (accessToken: string) => {
  Cookies.set(ACCESS_TOKEN_KEY, accessToken, { expires: 7 });
  return "resolve";
};

export const getAccessToken = () => {
  return Cookies.get(ACCESS_TOKEN_KEY);
};

export const getRefreshToken = (): string | undefined => {
  return Cookies.get(REFRESH_TOKEN_KEY);
};
export const getLoginRole = () => {
  return Cookies.get(LOGIN_ROLE);
};

export const removeCookie = () => {
  Cookies.remove(ACCESS_TOKEN_KEY);
  Cookies.remove(REFRESH_TOKEN_KEY);
  Cookies.remove(LOGIN_ROLE);
  Cookies.remove(USER_DATA);
};

export const loginFunc = (recivedData: {
  data: { user: UserIF };
  token: { accessToken: string; refreshToken: string };
}) => {
  console.log(recivedData);
  const user = recivedData.data.user;
  const accessToken = recivedData.token.accessToken;
  const refreshToken = recivedData.token.refreshToken;
  const loginRole = recivedData.data.user.role;
  if (loginRole === "ADMIN") {
    console.log("ADMIN");
    Cookies.remove(USER_DATA);
    saveDataToCookie(accessToken, refreshToken, null, loginRole);
    return "ADMIN";
  } else {
    console.log("USER");
    const userData: UserIF = {
      address: user.address,
      firstname: user.firstname,
      lastname: user.lastname,
      phoneNumber: user.phoneNumber,
      username: user.username,
      _id: user._id,
      role: user.role,
    };
    saveDataToCookie(
      accessToken,
      refreshToken,
      JSON.stringify(userData),
      loginRole
    );
    return "USER";
  }
};
