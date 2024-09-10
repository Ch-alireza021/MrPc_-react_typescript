import { theme } from "../../../../theme";
import { SxProps, Theme } from "@mui/system";
import { alpha } from "@mui/material/styles";

export const styleTextField = {
  "& label.Mui-focused": {
    color: "text.secondary",
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: (theme: any) => alpha(theme.palette.grey[500], 0.5),
      border: `3px solid  ${(theme: any) =>
        alpha(theme.palette.grey[500], 0.5)}`,
      boxShadow: theme.shadows[1],
    },
    "&:hover fieldset": {
      borderColor: (theme: any) => alpha(theme.palette.grey[500], 0.5),
    },

    fieldset: {
      borderColor: (theme: any) => alpha(theme.palette.grey[500], 0.5),
      border: `3px solid  ${(theme: any) =>
        alpha(theme.palette.grey[500], 0.5)}`,
      boxShadow: theme.shadows[1],
    },
  },
};

// ------------------------------------
export const buttonStyles: SxProps<Theme> = {
  bgcolor: (theme: Theme) => alpha(theme.palette.grey[500], 0.12),
  color: "text.secondary",
  "&:hover": {
    bgcolor: (theme: Theme) => alpha(theme.palette.primary.main, 0.3),
  },
  textWrap: "nowrap",
};
// ------------------------------------
export const APSearchStackStyle = (isOpen: boolean) => {
  return {
    maxHeight: isOpen ? "100vh" : 0,
    maxWidth: isOpen ? "100vw" : 0,
    opacity: isOpen ? 1 : 0,
    transition: "all 1s",
    gap: "0.5rem",
  };
};
