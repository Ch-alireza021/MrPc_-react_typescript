import { Box, Button, Card } from "@mui/material";
import { AddImages } from "./components";
import { FormikProps, useFormik } from "formik";
import { handleFormikSubmite, initialValues, validationSchema } from "./utils";
import { ValuesIF } from "./utils/interface";

export const AddNewProduct = () => {
  const formik: FormikProps<ValuesIF> = useFormik({
    initialValues,
    onSubmit: async (values) => handleFormikSubmite(values),
    validationSchema,
  });
  return (
    <Card sx={{ padding: "1rem" }}>
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        display="grid"
        gridTemplateColumns={`repeat(2, 1fr)`}
        gap={2}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <AddImages {...{ formik }} />
        </Box>
        <Button type="submit">ذخیره</Button>
      </Box>
    </Card>
  );
};
