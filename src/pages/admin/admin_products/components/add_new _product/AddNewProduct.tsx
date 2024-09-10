import { Box, Button, Card, Grid } from "@mui/material";
import {
  AAPCASComp,
  AAPTextfeild,
  AAPThumbnail,
  AddImages,
  MyEditor,
} from "./components";
import { FormikProps, useFormik } from "formik";
import { getImage, handleFormikSubmite, validationSchema } from "./utils";
import { ValuesIF } from "./utils/interface";
import { textFieldData } from "./config";
import { useSnackbar } from "../../../../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../features/rootReducers";
import { useEffect } from "react";
import { setEditingFalse } from "../../../../../features";
import { SelectHeader } from "../../utils";

export const AddNewProduct = ({
  setSelectComp,
}: {
  setSelectComp: (arg0: SelectHeader) => void;
}) => {
  const { showSnackbar } = useSnackbar();
  const ePState = useSelector((state: RootState) => state?.ePState);
  const isEditing = ePState.isEditing;
  const dispatch = useDispatch();

  const formik: FormikProps<ValuesIF> = useFormik<ValuesIF>({
    initialValues: ePState.initialValues,
    onSubmit: (values, { resetForm }) =>
      handleFormikSubmite(
        values,
        { resetForm },
        showSnackbar,
        doneEditing,
        setSelectComp
      ),
    validationSchema,
  });

  const doneEditing = () => {
    dispatch(setEditingFalse());
  };

  useEffect(() => {
    if (isEditing) {
      getImage({ formik, data: ePState.initialValues });
    }
    return doneEditing();
  }, []);

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
          <Grid item xs={12}>
            <MyEditor {...{ formik }} />
          </Grid>
          <Button type="submit">ذخیره</Button>
        </Grid>
      </Box>
    </Card>
  );
};
