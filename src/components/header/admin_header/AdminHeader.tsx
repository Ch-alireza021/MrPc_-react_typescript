import {
  AppBar,
  Box,
  Button,
  // CardMedia,
  Toolbar,
  Typography,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import styled from "@emotion/styled";
import { LogoBtn } from "../../logo-button";
import { MainHeaderSearch } from "../main_header/search";

const LinkStyle = styled("div")(() => ({
  ".linkOut": {
    textDecoration: "none",
    color: "inherit",
  },
  ".link": {
    textDecoration: "none",
    color: "white",
    "&:hover": {
      // color: theme.palette.gold,
    },
  },
  ".active": {
    color: "red",
    textDecoration: "none",
  },
}));

export const AdminHeader = () => {
  const handleLogOut = () => {};
  return (
    <Box sx={{ flexGrow: 1 }}>
      <LinkStyle>
        <AppBar
          position="static"
          sx={{ background: "#fff", color: "#606060", width: "100vw" }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
              <LogoBtn />
              <Typography>مدیریت فروشگاه مستر پی سی</Typography>
              <MainHeaderSearch {...{admin:true}}/>
            </Box>
            <Button
              variant="outlined"
              endIcon={<LogoutIcon />}
              color="error"
              sx={{ display: "flex", gap: "10px" }}
              onClick={handleLogOut}
            >
              {/* <Link to="/" className={"linkOut"} onClick={()=>localStorage.setItem("isLogin",JSON.stringify(false))} > */}
              خروج از پنل مدیریت
            </Button>
          </Toolbar>
        </AppBar>
      </LinkStyle>
    </Box>
  );
};
