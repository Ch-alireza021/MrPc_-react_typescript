import { Input as BaseInput } from "@mui/base/Input";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import { FormikProps, useFormik } from "formik";
import * as Yup from "yup";
import loginStyle from "../../theme/styles/login_style_folder/login_style.module.css";
import { LogoBtn, Password } from "../../components";
import { theme } from "../../theme";
import { PATH } from "../../config";

import {
  Container,
  Content,
  CustomButton,
  CustomLink,
  InputElement,
  InputRoot,
  Wrapper,
} from "../../theme/styles/login_style_folder/login_style";

interface MyFormsValues {
  username: string;
  password: string;
}

const Login = () => {
  const initialValues: MyFormsValues = {
    username: "",
    password: "",
  };

  const validationSchema: Yup.ObjectSchema<MyFormsValues> = Yup.object({
    username: Yup.string().required(),
    password: Yup.string().required(),
  });

  const formik: FormikProps<MyFormsValues> = useFormik({
    initialValues: initialValues,
    onSubmit: async (values) => {
      console.log({ values });
    },
    validationSchema,
  });

  return (
    <>
      <Container>
        <form onSubmit={formik.handleSubmit}>
          <div className={loginStyle.box1}>
            <div className={loginStyle.box2}>
              <div className={loginStyle.box4}></div>
              <div className={loginStyle.box5}></div>
            </div>
            <div className={loginStyle.box3}>
              <Wrapper>
                <Content>
                  <Box display={"flex"} justifyContent={"center"} gap={4}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Typography>MR PC</Typography>
                      <Typography>مستر پی سی </Typography>
                    </Box>
                    <LogoBtn />
                  </Box>
                  <Box>
                    <Typography
                      color={
                        formik.touched.username && formik.errors.username
                          ? "red"
                          : theme.palette.customGray.main
                      }
                      fontSize={"14px"}
                    >
                      نام کاربری را وارد کنید
                    </Typography>
                    <BaseInput
                      slots={{
                        root: InputRoot,
                        input: InputElement,
                      }}
                      id="username"
                      name="username"
                      onChange={formik.handleChange}
                      value={formik.values.username}
                      onBlur={formik.handleBlur}
                      type="text"
                    />
                  </Box>

                  <Password {...{ formik }} />

                  <CustomButton variant="contained" type="submit">
                    ورود
                  </CustomButton>
                  <Box color={theme.palette.customGray.main}>
                    <Typography>
                      برای اولین مرتبه می‌خواهی وارد شوی؟!
                    </Typography>
                    <CustomLink to={PATH.SIGN_UP}>
                      از این قسمت وارد شو
                    </CustomLink>
                  </Box>
                </Content>
              </Wrapper>
            </div>
          </div>
        </form>
      </Container>
    </>
  );
};

export default Login;
