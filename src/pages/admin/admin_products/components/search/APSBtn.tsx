import { Button, Box } from "@mui/material";
import { buttonStyles } from "../../utils";
import searchStyle from "./search.module.css";
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
      <Box className={isOpen ? searchStyle?.showText : searchStyle.hidText}>
        لغو
      </Box>
      <Box className={isOpen ? searchStyle?.hidText : searchStyle.showText}>
        جست و جو
      </Box>
    </Button>
  );
};
