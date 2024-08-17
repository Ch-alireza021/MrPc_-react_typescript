import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Collapse from '@mui/material/Collapse';
import { theme } from "../../../theme";

export const InfoComponent = ({
  children,
  text,
}: {
  children: React.ReactNode;
  text: string;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          color: isOpen ? theme.palette.secondary.main : "inherit",
          cursor: "pointer",
          minWidth: "110px",
        }}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Typography>{text}</Typography>
        {isOpen ? <KeyboardArrowDownIcon /> : <ChevronLeftIcon />}
      </Box>
     
        <Collapse in={isOpen}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>{children}</Box>
        </Collapse>
   
    </Box>
  );
};

 
