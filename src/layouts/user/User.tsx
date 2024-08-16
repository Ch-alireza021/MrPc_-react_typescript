import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import MainHeader from "../header/main-header/MainHeader";

const User = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <MainHeader />
      <Outlet />
    </Box>
  );
};

export default User;
