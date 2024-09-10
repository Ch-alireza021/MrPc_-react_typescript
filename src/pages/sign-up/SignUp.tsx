import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { FormikProps, useFormik } from "formik";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { initialValues, MyFormsValues, validationSchema } from "../../utils";
import { Input1, PasswordSignUp } from "../../components";
import { CustomButton } from "../../theme";
import signUp_style from "../../theme/styles/sign_up_style/sign_up_style.module.css";

const SignUp = () => {
  // const [isVerified, setIsVerified] = useState(false);
  // ----------------------------------------
  //       FORMIK

  const formik: FormikProps<MyFormsValues> = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema,
  });
  // ----------------------------------------------------
  const [isShowPassword, setIsShowPassword] = useState<{
    [key: string]: boolean;
  }>({ confirmPassword: false, password: false });
  // const [isShowPassword, setIsShowPassword] = useState<{
  //   [key: string]: boolean;
  // }>({ confirmPassword: false, password: false });
  // const siteKey = "6Ld2Ra8pAAAAAO5zqpEY2mRV_wk2Jqt1fC2Dv6jn";
  // const secretKey = "6Ld2Ra8pAAAAACOBYqanyF2z1sjKpWmUdtRkv8Pl";
  // ----------------------------------------------------
  const form = [
    { label: "نام", name: "firstname", type: "text" },
    { label: "نام خانوادگی ", name: "lastname", type: "text" },
    { label: "نام کاربری ", name: "username", type: "text" },
    { label: "رمز عبور ", name: "password", type: "password" },
    { label: "رمز عبور تکرار", name: "confirmPassword", type: "password" },
    { label: " شماره تماس ", name: "phoneNumber", type: "text" },
    { label: "آدرس", name: "address", type: "text" },
  ];
  return (
    <div className={signUp_style.container}>
    <Box paddingX={"20px"} paddingY={"30px"} sx={{}}>
      <div className={signUp_style.box1}>
        <div className={signUp_style.box2}>
          <div className={signUp_style.box4}></div>
          <div className={signUp_style.box5}></div>
        </div>
        <div className={signUp_style.box3}>
          <Typography variant="h6" paddingBottom={"30px"}>
            ثبت نام در مستر پی سی
          </Typography>
          <Box>
            <form onSubmit={formik.handleSubmit}>
              <Grid container spacing={2} width={"650px"}>
                {form?.map((i) =>
                  i.type === "password" ? (
                    <PasswordSignUp
                      key={i.name}
                      {...{ ...i, formik, isShowPassword, setIsShowPassword }}
                    />
                  ) : (
                    <Input1 key={i.name} {...{ ...i, formik }} />
                  )
                )}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    padding: "20px",
                    width: "100%",
                  }}
                >
                  <CustomButton type="submit">ادامه</CustomButton>
                </Box>
              </Grid>
            </form>
          </Box>
        </div>
      </div>
    </Box>
    </div>
  );
};

export default SignUp;
