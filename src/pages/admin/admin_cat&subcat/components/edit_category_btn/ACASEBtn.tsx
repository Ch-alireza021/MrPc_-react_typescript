import Button from "@mui/material/Button";
import VisibilityIcon from "@mui/icons-material/Edit";
import { alpha } from "@mui/material";
import { BasicModal } from "../../../../../components";
import { useState } from "react";
import { AECForm } from "./AECForm";
import { CategoryIF } from "../../utils";
import { AECFormDataIF } from "../../config";

// Define the interface with both row and data props
export interface ACASEBtnIF {
  row: CategoryIF;
  data: AECFormDataIF[];
}

export const ACASEBtn = ({ row, data }: ACASEBtnIF) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
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
        onClick={() => setOpen(true)}
        endIcon={<VisibilityIcon />}
      >
        ویرایش
      </Button>
      <BasicModal open={open} setOpen={setOpen}>
        <AECForm data={data} row={row} />
      </BasicModal>
    </>
  );
};
