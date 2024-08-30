// APEBtn ===>admin products edite button
// ----------------------------------------
import * as React from "react";
import Button from "@mui/material/Button";
import VisibilityIcon from "@mui/icons-material/Edit";
import { alpha } from "@mui/material";
import { productsDataIF } from "../../utils";
export interface Row {
  _id: string;
  [key: string]: any;
}

export const APEBtn = (props: { row: productsDataIF }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  

  return (
    <Button
      variant="contained"
      color="success"
      sx={{
        bgcolor: (theme) => alpha(theme.palette.grey[500], 0.12),
        color: "text.secondary",
        "&:hover": {
          bgcolor: (theme) => alpha(theme.palette.primary.main, 0.16),
        },
      }}
      //   onClick={() => handleCheckOrder(row)}
      onClick={handleOpen}
      endIcon={<VisibilityIcon />}
    >
      ویرایش
    </Button>
  );
};
