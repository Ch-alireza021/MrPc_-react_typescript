import { FC } from "react";
import { IInput } from "../../utils";
import { InputElement, InputRoot, theme } from "../../theme";
import { Grid, Typography } from "@mui/material";

import { FormikProps } from "formik";
import { Input as BaseInput } from "@mui/base/Input";

export const Input2: FC<IInput> = ({ children, color, text }) => {
  // -------------
  //     COLOR
  const gray = theme.palette.customGray.main;
  const warning = theme.palette.warning.main;
  // -------------
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
      <Typography color={color ? warning : gray} paddingLeft={"10px"}>
        {text}
      </Typography>
      {children}
    </Grid>
  );
};

interface InputIF {
    formik: FormikProps<any>;
    label: string;
    name: string;
    type: string;
  }
  
  
  export const Input1: FC<InputIF> = ({ formik, label, name, type }) => {
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
        <Typography
          color={errorMessage ? warning : gray}
          paddingLeft={"10px"}
        >
          {typeof errorMessage === 'string' ? errorMessage : label}
        </Typography>
        <BaseInput
          slots={{
            root: InputRoot,
            input: InputElement,
          }}
          id={name}
          name={name}
          onChange={formik.handleChange}
          value={formik.values[name]}
          onBlur={formik.handleBlur}
          type={type}
        />
      </Grid>
    );
  };
  