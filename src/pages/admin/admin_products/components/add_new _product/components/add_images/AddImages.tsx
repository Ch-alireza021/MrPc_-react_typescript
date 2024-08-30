import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Button, CardMedia } from "@mui/material";
import { buttonStyles } from "../../../../utils";
import { handleImageChange, VisuallyHiddenInput } from "../../utils";
import { FormikHelpers, FormikProps } from "formik";
import { ValuesIF } from "../../utils/interface";

interface AddImagesProps {
  formik: FormikProps<ValuesIF> & FormikHelpers<ValuesIF>;
}

export const AddImages: React.FC<AddImagesProps> = ({ formik }) => {
  console.log("value", formik?.values);
  return (
    <>
      <Button
        sx={buttonStyles}
        variant="contained"
        component="label"
        startIcon={<CloudUploadIcon />}
      >
        تصویر کالا
        <VisuallyHiddenInput
          id="images"
          type="file"
          multiple
          name="images"
          onChange={(event) => handleImageChange(event, formik)}
        />
      </Button>
      {formik?.values?.images?.map(
        (image: Blob | MediaSource, index: number) => (
          <CardMedia
            key={index}
            sx={{
              width: "100px",
              height: "auto",
              maxHeight: "60px",
            }}
            component="img"
            image={URL.createObjectURL(image)}
            alt="add image"
          />
        )
      )}
    </>
  );
};