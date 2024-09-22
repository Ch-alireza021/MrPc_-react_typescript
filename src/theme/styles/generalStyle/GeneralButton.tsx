import { Button, alpha } from "@mui/material";
import { CSSProperties, ReactNode } from "react";
type VariantT = "text" | "contained" | "outlined";
interface GeneralButtonIF {
  onClick: () => void;
  endIcon?: ReactNode;
  text: string;
  sx?: CSSProperties;
  variant?: VariantT;
}
export const GeneralButton = ({
  onClick,
  endIcon,
  variant,
  text,
  sx,
}: GeneralButtonIF) => {
  return (
    <Button
      variant={variant ? variant : "contained"}
      color="success"
      sx={{
        bgcolor: (theme) => alpha(theme.palette.grey[500], 0.12),
        color: "text.secondary",
        "&:hover": {
          bgcolor: (theme) => alpha(theme.palette.primary.main, 0.16),
        },
        ...sx,
      }}
      onClick={onClick}
      endIcon={endIcon ? endIcon : ""}
    >
      {text}
    </Button>
  );
};
