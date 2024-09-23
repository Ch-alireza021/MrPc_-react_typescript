import { Add, Edit } from "@mui/icons-material";
import { Button, alpha } from "@mui/material";
import { useState } from "react";
import { BasicModal } from "../../../../../components";
import { AESForm } from "./AESForm";
import { SbcategoryDataIF } from "../../utils";

export const ASEABtn = ({ row }: { row?: SbcategoryDataIF }) => {
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
        <AESForm  row={row} setOpen={setOpen}/>
      </BasicModal>
    </>
  );
};
