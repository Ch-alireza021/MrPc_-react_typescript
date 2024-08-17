import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import MainFooter from "../footer/MainFooter";


const User = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "100vh",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Header />
        <Outlet />
      </Box>
      <MainFooter />
    </Box>
  );
};

export default User;
