import { InputLabel, Stack, TextField } from "@mui/material";
import { styleTextField } from "../../../../utils";
import { AAPTextfeildPropsIF } from "../../utils/interface";

export const AAPTextfeild: React.FC<AAPTextfeildPropsIF> = ({ formik, data }) => {
  const errorMessage = formik.touched[data.name] && formik.errors[data.name];

  return (
    <Stack gap={2}>
      <TextField
        type={data.type}
        label={data.label}
        fullWidth
        name={data.name}
        id={data.name}
        error={Boolean(errorMessage)}
        onChange={formik.handleChange}
        value={formik.values[data.name]}
        onBlur={formik.handleBlur}
        sx={{ ...styleTextField, bgcolor: "#eeee" }}
      />
      <InputLabel htmlFor={data.name}>
        {typeof errorMessage === "string" ? errorMessage : null}
      </InputLabel>
    </Stack>
  );
};
