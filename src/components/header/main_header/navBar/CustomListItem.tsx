import React, { useState } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// --------------------------------------------------------
//                     INTERFACE
interface ICustomListItem {
  children: React.ReactNode;
  href: string;
  text: string;
}
// --------------------------------------------------------
//                     COMPONENT
export const CustomListItem = ({ children, href, text }: ICustomListItem) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <ListItemButton
      sx={{
        display: "flex",
        gap: "8px",
      }}
      href={href}
      disableRipple
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <ListItemIcon sx={{ color: isHover ? "#03c03c" : "inherit" }}>
        {children}
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton>
  );
};
