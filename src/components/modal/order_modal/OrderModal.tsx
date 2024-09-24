import * as React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { GeneralButton } from "../../../theme";
import { BasicModal } from "../basic_modal";
import { Box, Typography } from "@mui/material";
import { ViweOrder } from "../../../pages/admin/admin_orders/components";
export interface Row {
  _id: string;
  [key: string]: any;
}

export const OrderModal = (props: { row: Row }) => {
  const [open, setOpen] = React.useState(false);
  const { row } = props;
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 

  return (
    <div>
      <GeneralButton
        onClick={handleOpen}
        endIcon={<VisibilityIcon />}
        text={" برسی سفارش"}
      />
      <BasicModal
        open={open}
        setOpen={setOpen}
      >
       <ViweOrder {...{row,setOpen}}/>
      </BasicModal>
    </div>
  );
};

