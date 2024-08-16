import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";

const User = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Header/>
      <Outlet />
    </Box>
  );
};

export default User;
