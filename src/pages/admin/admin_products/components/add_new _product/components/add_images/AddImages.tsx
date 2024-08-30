import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Box, Button } from "@mui/material";
import { buttonStyles } from "../../../../utils";
import { handleImageChange, VisuallyHiddenInput } from "../../utils";
import { FormikHelpers, FormikProps } from "formik";
import { ValuesIF } from "../../utils/interface";
import { AAPImagesSlider } from "./AAPImageSlider";
interface AddImagesProps {
  formik: FormikProps<ValuesIF> & FormikHelpers<ValuesIF>;
}

export const AddImages: React.FC<AddImagesProps> = ({ formik }) => {
  console.log("value", formik?.values);
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
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
      <AAPImagesSlider {...{ formik }} />
    </Box>
  );
};
