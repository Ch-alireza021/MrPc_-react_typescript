import { VisibilityOff, Visibility } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { theme } from "../../../theme";
import { useState } from "react";
import { Input as BaseInput } from "@mui/base/Input";
// import {
//   IconButton,
//   InputAdornment,
//   InputElement,
//   InputRoot,
// } from "../../";
import { FormikProps } from "formik";
import {
  IconButton,
  InputAdornment,
  InputElement,
  InputRoot,
} from "../../../theme/styles/login_style_folder/login_style";

interface PasswordProps<T> {
  formik: FormikProps<T>;
}

export const Password = <T extends { password: string }>({
  formik,
}: PasswordProps<T>) => {
  const [isShow, setIsShow] = useState<boolean>(false);

  return (
    <Box>
      <Typography
        color={
          formik.touched.password && formik.errors.password
            ? "red"
            : theme.palette.customGray.main
        }
        fontSize={"14px"}
      >
        رمز عبور را وارد کنید
      </Typography>

      <BaseInput
        slots={{
          root: InputRoot,
          input: InputElement,
        }}
        id="password"
        name="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        onBlur={formik.handleBlur}
        type={isShow ? "text" : "password"}
        endAdornment={
          <InputAdornment>
            <IconButton
              size="small"
              aria-label="toggle password visibility"
              onClick={() => setIsShow((prev) => !prev)}
            >
              {isShow ? (
                <VisibilityOff fontSize="small" />
              ) : (
                <Visibility fontSize="small" />
              )}
            </IconButton>
          </InputAdornment>
        }
      />
    </Box>
  );
};
