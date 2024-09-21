import { BasicModal } from "../../../../../components";
import { Edit, Add } from "@mui/icons-material";
import Button from "@mui/material/Button";
import { ACASEBtnIF } from "../../utils";
import { alpha } from "@mui/material";
import { AECForm } from "./AECForm";
import { useState } from "react";

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
        endIcon={!row ? <Add /> : <Edit />}
      >
        {row ? "   ویرایش" : "اضافه کردن"}
      </Button>
      <BasicModal open={open} setOpen={setOpen}>
        <AECForm {...{ setOpen, row, data }} />
      </BasicModal>
    </>
  );
};
