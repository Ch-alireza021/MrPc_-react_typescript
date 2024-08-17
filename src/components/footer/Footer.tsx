import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { FooterHeader } from "./header";
import { FooterInfo } from "./info";

export const Footer = () => {
  return (
    <Box
      component={"footer"}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        paddingX: "20px",
      }}
    >
      <Divider variant="middle" />
      <FooterHeader />
      <FooterInfo />
      <Typography textAlign={"center"} >کلیه حقوق این وب‌سایت متعلق به شرکت  ..... </Typography>
    </Box>
  );
};


