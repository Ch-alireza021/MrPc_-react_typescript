import React, { useState } from "react";
import { Box } from "@mui/material";
import { HoverRevealCustomBox, HoverRevealText } from "../../theme";

export const HoverReveal = (props: { children: React.ReactNode }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <>
        <HoverRevealCustomBox
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered && <HoverRevealText> {props.children}</HoverRevealText>}
          <Box
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              width: " 100px",
            }}
          >
            {props.children}
          </Box>
        </HoverRevealCustomBox>

    </>
  );
};
