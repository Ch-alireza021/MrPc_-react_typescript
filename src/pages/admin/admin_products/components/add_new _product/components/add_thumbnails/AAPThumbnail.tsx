import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Box, Button } from "@mui/material";
import { buttonStyles } from "../../../../utils";
import { handleImageChange, handleThumbnailChange, VisuallyHiddenInput } from "../../utils";
import { FormikHelpers, FormikProps } from "formik";
import { ValuesIF } from "../../utils/interface";
import { AAPIHover } from "../add_images/AAPIHover";
interface AddImagesProps {
  formik: FormikProps<ValuesIF> & FormikHelpers<ValuesIF>;
}

export const AAPThumbnail: React.FC<AddImagesProps> = ({ formik }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Button
        sx={buttonStyles}
        variant="contained"
        component="label"
        startIcon={<CloudUploadIcon />}
      >
        تصویر کوچک کالا
        <VisuallyHiddenInput
          id="thumbnail"
          type="file"
          name="thumbnail"
          onChange={(event) => handleThumbnailChange(event, formik)}
        />
      </Button>
      <AAPIHover {...{ image: formik?.values?.thumbnail }} />
    </Box>
  );
};
