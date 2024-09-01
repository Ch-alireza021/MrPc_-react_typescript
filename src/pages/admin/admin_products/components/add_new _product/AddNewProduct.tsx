import { Box, Button, Card, Grid } from "@mui/material";
import {
  AAPCASComp,
  AAPTextfeild,
  AAPThumbnail,
  AddImages,
} from "./components";
import { FormikProps, useFormik } from "formik";
import { handleFormikSubmite, initialValues, validationSchema } from "./utils";
import { ValuesIF } from "./utils/interface";
import { textFieldData } from "./config";
import { MyEditor } from "./components/ckEditor/MyEditor";
export const AddNewProduct = () => {
  const formik: FormikProps<ValuesIF> = useFormik<ValuesIF>({
    initialValues,
    onSubmit: async (values) => handleFormikSubmite(values),
    validationSchema,
  });

  return (
    <Card sx={{ padding: "1rem" }}>
      <Box component="form" onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8} md={8}>
            <AddImages {...{ formik }} />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <AAPThumbnail {...{ formik }} />
          </Grid>
          {textFieldData?.map((data, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <AAPTextfeild {...{ formik, data }} />
            </Grid>
          ))}
          <AAPCASComp {...{ formik }} />
          <Grid item xs={12} >
            <MyEditor />
          </Grid>
          <Button type="submit">ذخیره</Button>
        </Grid>
      </Box>
    </Card>
  );
};
