import { Box, Typography } from "@mui/material";
import { LogoBtn } from "../../logo-button";

export const LoginHeader = () => {
  return (
    <Box display={"flex"} justifyContent={"center"} gap={4}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography>MR PC</Typography>
        <Typography>مستر پی سی </Typography>
      </Box>
      <LogoBtn />
    </Box>
  );
};
