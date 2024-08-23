import { Outlet } from "react-router-dom";
// import { AdminHeader } from "../header/admin_header/AdminHeader"
import { Box } from "@mui/material";
import { AdminNavbar } from "../../components";
import { AdminHeader } from "../../components/header/admin_header/AdminHeader";
import WithGuard from "../../components/with_guard/withGuard";
// import Dashboard from "./admin_dashboard/AdminDashboard";

const Admin = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <>
        <AdminHeader />
      </>
      {/* <Dashboard/> */}
      <Box sx={{ display: "flex" }}>
        <Box minWidth={'15rem'}>
          <AdminNavbar />
        </Box>
        <Box width={"100%"} sx={{minHeight:'500px'}} padding={'2rem 2rem 2rem .5rem '}>
          {/* <Dashboard/> */}
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};
// export default Admin;
export default WithGuard(Admin);
