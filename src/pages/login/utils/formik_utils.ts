import { PATH, URL_LOGIN } from "../../../config";
import { api } from "../../../services";
import { loginFunc } from "../../../services/cookies";
import { MyFormsValues } from "./interface";
import * as Yup from "yup";

export const initialValues: MyFormsValues = {
  username: "",
  password: "",
};
export const validationSchema: Yup.ObjectSchema<MyFormsValues> = Yup.object({
  username: Yup.string().required(),
  password: Yup.string().required(),
});

export const handleSubmite = async (values: MyFormsValues,navigate:(arg0:string,arg1:any)=>void) => {
  console.log(values);
  try {
    const response = await api.post(URL_LOGIN, {
      username: values.username,
      password: values.password,
    });
    const recivedData = response.data;
    const role = loginFunc(recivedData);
    if (role === "USER") {
      navigate(PATH.HOME, { replace: true });
    } else {
      // navigate(PATH.ADMIN, { replace: true });
      navigate("/admin/dashboard", {
        state: { message: "Failed to submit form" },
      });
    }
  } catch (error) {
    console.error("Login failed:", error);
  }
};
