import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { alpha } from "@mui/material";
import { Portal } from '@mui/base';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 400,
  maxWidth:'70vw',
  bgcolor: "#EFEFEF",
  border: "2px solid #2b2727",
  borderColor: (theme: any) => alpha(theme.palette.grey[500], 0.5),
  borderRadius: "20px",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  display: "flex",
  flexDirection: "column",
  gap: 3,
};

interface BasicModalIF {
  children: React.ReactNode;
  open: boolean;
  setOpen: (value: React.SetStateAction<boolean>) => void;
}
export const BasicModal: React.FC<BasicModalIF> = ({
  children,
  open,
  setOpen,
}) => {
  const handleClose = () => setOpen(false);
  return (
    <Portal >
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{children}</Box>
      </Modal>
    </Portal>
  );
};
