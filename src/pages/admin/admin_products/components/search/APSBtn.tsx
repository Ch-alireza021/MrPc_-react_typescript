import { Button } from "@mui/material";
import { buttonStyles } from "../../utils";
import { SetStateAction } from "react";
// -----------------------------------------------
//      APSBtn ==> Admin products search button
export const APSBtn = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: SetStateAction<boolean>) => void;
}) => {
  return (
    <Button
      variant="contained"
      color="success"
      sx={{
        height: "37px",
        ...buttonStyles,
      }}
      onClick={() => {
        setIsOpen((pre) => !pre);
      }}
    >
        {isOpen ? "لغو" : "جست و جو"}
    </Button>
  );
};
