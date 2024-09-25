import { useContext } from "react";
import HPSCPageContext from "../../../../../features/data_context/HPS/HPSContext";
import { Stack, Button, alpha } from "@mui/material";
import { headerHPSRows } from "../../config";

export const HPSHeader = () => {
  const { hPSCPage, setHPSCPage } = useContext(HPSCPageContext);
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      sx={{
        gap: 2,
        paddingBottom: "1rem",
        height: "70px",
      }}
    >
      {headerHPSRows.map((config) => (
        <Button
          key={config.key}
          variant="contained"
          color="success"
          sx={{
            height: "37px",
            bgcolor:
              config.key === hPSCPage
                ? (theme) => alpha(theme.palette.primary.main, 0.16)
                : (theme) => alpha(theme.palette.grey[500], 0.12),
            color: "text.secondary",
            "&:hover": {
              bgcolor: (theme) => alpha(theme.palette.primary.main, 0.3),
            },
            textWrap: "nowrap",
          }}
          onClick={() => setHPSCPage(config.key)}
        >
          {config.text}
        </Button>
      ))}
    </Stack>
  );
};
