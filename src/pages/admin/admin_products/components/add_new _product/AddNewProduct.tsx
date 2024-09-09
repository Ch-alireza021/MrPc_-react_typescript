import { Box, Button, Card, Grid } from "@mui/material";
import {
  AAPCASComp,
  AAPTextfeild,
  AAPThumbnail,
  AddImages,
  MyEditor,
} from "./components";
import { FormikProps, useFormik } from "formik";
import { handleFormikSubmite, validationSchema } from "./utils";
import { ValuesIF } from "./utils/interface";
import { textFieldData } from "./config";
import { useSnackbar } from "../../../../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../features/rootReducers";
import { useEffect } from "react";
import { URL_BACKEND_IMAGES } from "../../../../../config";
import {
  downloadImages,
  setEditingFalse,
} from "../../../../../features";
import { SelectHeader } from "../../utils";

export const AddNewProduct = ({setSelectComp}:{setSelectComp:(arg0:SelectHeader)=>void}) => {
  const { showSnackbar } = useSnackbar();
  const ePState = useSelector((state: RootState) => state?.ePState);
  const isEditing=ePState.isEditing
const dispatch=useDispatch()

  const formik: FormikProps<ValuesIF> = useFormik<ValuesIF>({
    initialValues: ePState.initialValues,
    onSubmit: (values, { resetForm }) =>
      handleFormikSubmite(values, { resetForm }, showSnackbar,doneEditing,setSelectComp),
    validationSchema,
  });

  const doneEditing=()=>{
    dispatch(setEditingFalse())
  }

  const getImage = async () => {
    const imageUrls = ePState.initialValues.addImages?.map(
      (image) => `${URL_BACKEND_IMAGES}/images/${image}`
    );
    const ThumbnailUrl = [
      `${URL_BACKEND_IMAGES}/thumbnails/${ePState.initialValues.addThumbnail}`,
    ];
    try {
      const files = imageUrls ? await downloadImages(imageUrls) : [];
      const thumbnail = await downloadImages(ThumbnailUrl);
      console.log({ files }, { thumbnail });
      formik.setFieldValue("images", files)
      formik.setFieldValue('thumbnail',thumbnail[0])
    } catch (error) {
      console.error("Error downloading images:", error);
    }
  };

  useEffect(() => {
    if (isEditing) {
      getImage();
    }
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
