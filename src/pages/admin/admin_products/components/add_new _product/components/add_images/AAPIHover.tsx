import { Box, CardMedia, Popover } from "@mui/material";
import React from "react";

export const AAPIHover = ({ image }: { image: File }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <Box
        sx={{
          overflow: "hidden",
          width: "100px",
          height: "100px",
        }}
      >
        <CardMedia
          sx={{
            width: "100px",
            height: "100px",
          }}
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
          component="img"
          image={URL.createObjectURL(image)}
          alt="add image"
        />
      </Box>
      <Popover
        id="mouse-over-popover"
        sx={{ pointerEvents: "none" }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <CardMedia
          sx={{
            width: "300px",
            height: "300px",
          }}
          component="img"
          image={URL.createObjectURL(image)}
          alt="add image"
        />
      </Popover>
    </div>
  );
};
