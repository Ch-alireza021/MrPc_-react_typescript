import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";
import { ReactNode } from "react";

export const EnhancedTableToolbar = ({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) => {
  return (
    <Toolbar
      sx={{
        pl: { sm: 3 },
        pr: { xs: 1, sm: 1 },
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Typography
        sx={{ flex: "1 1 1 100%" }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        {title}
      </Typography>
      {children}
    </Toolbar>
  );
};
