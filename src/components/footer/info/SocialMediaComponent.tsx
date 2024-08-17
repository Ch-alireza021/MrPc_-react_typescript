import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { theme } from "../../../theme";

interface ISocialMediaComponent {
    children: React.ReactNode;
    text: string;
  }
  const style = {
    background: theme.palette.secondary.main,
    color: "white",
    paddingX: "10px",
    paddingY: "5px",
    borderRadius: "5px",
    position: "absolute",
    top: "-30px",
    left: "50%",
    transform: "translate(-50%)",
    textWrap: "nowrap",
  };
//   --------------------------------------------------
export const SocialMediaComponent = ({ children, text }: ISocialMediaComponent) => {
    const [isHover, setIshover] = useState<boolean>(false);
    return (
      <Box
        component={"div"}
        onMouseEnter={() => setIshover(true)}
        onMouseLeave={() => setIshover(false)}
        position={"relative"}
      >
        {isHover && <Typography sx={{ ...style }}>{text}</Typography>}
        {children}
      </Box>
    );
  };