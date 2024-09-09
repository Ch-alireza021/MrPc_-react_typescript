import { Box, CardMedia, Popover } from "@mui/material";
import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export const AAPIHover = ({
  image,
  handleDelete,
}: {
  image: File | null;
  handleDelete: (img: File) => void;
}) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
console.log({image})
  return (
    <div>
      {image && (
        <>
          <Box
            sx={{
              overflow: "hidden",
              width: "100px",
              height: "100px",
              position: "relative",
            }}
          >
            <DeleteForeverIcon
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                color: "red",
                background: "white",
                borderRadius: "50%",
                border: "1px solid red",
              }}
              onClick={() => handleDelete(image)}
            />
            <CardMedia
              sx={{
                width: "100px",
                height: "100px",
              }}
              onMouseEnter={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}
              component="img"
              image={ URL.createObjectURL(image)}
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
            ></CardMedia>
          </Popover>
        </>
      )}
    </div>
  );
};
