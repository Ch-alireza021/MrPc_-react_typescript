import * as Yup from "yup";
import { MyFormsValues } from "../interface";

export const validationSchema: Yup.ObjectSchema<MyFormsValues> = Yup.object({
    firstname: Yup.string().required("نام الزامیست"),
    lastname: Yup.string()
      .min(3, "نام خانوادگی باید حداقل سه کارکتر داشته باشد")
      .required("نام خانوادگی الزامیست"),
    username: Yup.string()
      .min(8, "نام کار بری باید حداقل 8 کارکتر داشته باشد")
      .required("یک نام کاربری وارد کنید"),
    password: Yup.string()
      .required("رمز عبور الزامیست")
      .min(8, "رمز عبور باید حداقل 8 کاراکتر باشد")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/,
        "رمز عبور باید حداقل دارای یک حرف بزرگ، یک حرف کوچک، یک رقم و یک کاراکتر خاص باشد."
      ),
    confirmPassword: Yup.string()
      .required("تایید رمز عبور الزامیست ")
      .oneOf(
        [Yup.ref("password")],
        "رمزعبورها ها باید مطابقت داشته باشند"
      ),
    phoneNumber: Yup.string()
      .required("شماره تلفن الزامیست")
      .matches(/^[0-9]{10}$/, "شماره تلفن باید 10 رقم باشد"),
    address: Yup.string()
      .required("آدرس الزامیست")
      .min(10, "آدرس باید حداقل 10 کارکتر داشته باشد"),
  });

  export const initialValues: MyFormsValues = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    address: "",
  };