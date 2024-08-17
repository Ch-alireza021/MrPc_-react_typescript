import { Box } from "@mui/material";
import { FC, ReactNode } from "react";

interface ScrollHiddenIF {
  children: ReactNode;
}

export const ScrollHidden: FC<ScrollHiddenIF> = ({ children }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: "-17px",
          bottom: "-17px",
          overflow: "scroll",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
