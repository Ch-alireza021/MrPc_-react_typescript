import { Box, Typography } from "@mui/material";
import { theme } from "../../../theme";
import { Input as BaseInput } from "@mui/base/Input";
import { FormikProps } from "formik";
import {
  InputElement,
  InputRoot,
} from "../../../theme/styles/login_style_folder/login_style";

interface UserNameIF<T> {
  formik: FormikProps<T>;
}

export const UserName = <T extends { username: string }>({
  formik,
}: UserNameIF<T>) => {
  return (
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
  );
};
