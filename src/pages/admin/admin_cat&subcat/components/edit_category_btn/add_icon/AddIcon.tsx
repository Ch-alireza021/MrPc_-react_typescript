import { VisuallyHiddenInput } from "../../../../admin_products/components";
import { buttonStyles } from "../../../../admin_products/utils";
import { ChangeEvent, SetStateAction, useEffect } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Box, Button, CardMedia } from "@mui/material";
import { CategoryIF, getIcon } from "../../../utils";

export const AddIcon = ({
  formValues,
  setFormValues,
}: {
  formValues: CategoryIF;
  setFormValues: (value: SetStateAction<CategoryIF>) => void;
}) => {
  useEffect(() => {
    getIcon({ formValues, setFormValues });
  }, []);
  const handleIconChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (fileList) {
      const imagesArray = Array.from(fileList).filter((file) =>
        file.type.startsWith("image/")
      );
      if (imagesArray.length > 0) {
        setFormValues((pre) => ({ ...pre, icon: imagesArray?.[0] }));
      }
    }
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Button
        sx={buttonStyles}
        variant="contained"
        component="label"
        startIcon={<CloudUploadIcon />}
      >
        آیکون
        <VisuallyHiddenInput
          id="thumbnail"
          type="file"
          name="thumbnail"
          onChange={(event) => handleIconChange(event)}
        />
      </Button>
      {typeof formValues.icon !== "string" && (
        <CardMedia
          sx={{
            width: "100px",
            height: "100px",
          }}
          component="img"
          image={URL.createObjectURL(formValues.icon)}
          alt="add icon"
        />
      )}
    </Box>
  );
};
