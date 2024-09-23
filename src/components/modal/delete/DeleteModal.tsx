

import { alpha, Button } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

export const deleteStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
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
export interface DeleteModalIF {
  onClose: ()=>void;
  response: (arg0:boolean)=>void;
  data: any;
  onOpen: boolean;
}
export const DeleteModal = ({
  onClose,
  response,
  data,
  onOpen,
}: DeleteModalIF) => {
  return (
    <div>
      <Modal
        onClose={onClose}
        open={onOpen}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...deleteStyle, width: 400 }}>
          <h3 id="parent-modal-title">آیا {data?.name} حذف شود؟</h3>
          <Box display={"flex"} gap={2}>
            <Button onClick={() => response(false)}>انصراف</Button>
            <Button onClick={() => response(true)}>تایید</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
