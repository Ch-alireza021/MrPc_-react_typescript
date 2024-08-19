import { Grid, IconButton, Typography } from "@mui/material";
import { FC } from "react";
import { theme } from "../../theme";
import {
  InputRoot,
  InputElement,
  InputAdornment,
} from "../../theme/styles/login_style_folder/login_style";
import { PasswordSignUpIF } from "../../utils";
import { Input as BaseInput } from "@mui/base/Input";
import { VisibilityOff, Visibility } from "@mui/icons-material";

export const PasswordSignUp: FC<PasswordSignUpIF> = ({
  formik,
  label,
  name,
  type,
  isShowPassword,
  setIsShowPassword,
}) => {
  // -------------
  //     COLOR
  const gray = theme.palette.customGray.main;
  const warning = theme.palette.warning.main;
  // -------------

  const errorMessage = formik.touched[name] && formik.errors[name];

  return (
    <Grid
      item
      md={6}
      sx={{
        width: "300px",
        display: "flex",
        flexDirection: "column",
        gap: "5px",
      }}
    >
      <Typography color={errorMessage ? warning : gray} paddingLeft={"10px"}>
        {typeof errorMessage === "string" ? errorMessage : label}
      </Typography>
      <BaseInput
        slots={{
          root: InputRoot,
          input: InputElement,
        }}
        id={name}
        name={name}
        onChange={formik.handleChange}
        value={formik.values?.[name]}
        onBlur={formik.handleBlur}
        type={isShowPassword?.name ? "text" : "password"}
        endAdornment={
          <InputAdornment>
            <IconButton
              size="small"
              aria-label="toggle password visibility"
                onClick={() => setIsShowPassword((prev: { name: any; }) =>({...prev,[name]:!(prev?.name)}))}
            >
              {isShowPassword ? (
                <VisibilityOff fontSize="small" />
              ) : (
                <Visibility fontSize="small" />
              )}
            </IconButton>
          </InputAdornment>
        }
      />
    </Grid>
  );
};
