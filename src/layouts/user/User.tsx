import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import MainFooter from "../footer/MainFooter";
import { ScrollHidden } from "../../components";


const User = () => {
  return (
    <ScrollHidden>
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
    </ScrollHidden>
  );
};

export default User;
