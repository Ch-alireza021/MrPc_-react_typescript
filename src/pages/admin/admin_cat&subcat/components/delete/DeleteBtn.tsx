import { BasicModal } from "../../../../../components";
import { GeneralButton } from "../../../../../theme";
import { SbcategoryDataIF } from "../../utils";
import { Delete } from "@mui/icons-material";
import { DeleteComp } from "./DeleteComp";
import { useState } from "react";

export const DeleteBtn = ({
  row,
  type,
}: {
  row: SbcategoryDataIF;
  type: "subcategory" | "category";
}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <GeneralButton
        onClick={() => setOpen(true)}
        text={"حذف"}
        endIcon={<Delete />}
      />
      <BasicModal open={open} setOpen={setOpen}>
        <DeleteComp {...{ type, setOpen, row }} />
      </BasicModal>
    </>
  );
};
