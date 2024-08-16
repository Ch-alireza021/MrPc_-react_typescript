import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Badge,
  Collapse,
} from "@mui/material";
import {
  LocalGroceryStore as LocalGroceryStoreIcon,
  Person as PersonIcon,
} from "@mui/icons-material";
import { MainNavBar } from "./navBar";
import { LogoBtn } from "../../logo-button";
import { MainHeaderSearch } from "./search";
// ----------------------------------------------------------
export function MainHeader() {
  // const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
  //   // setAnchorEl(event.currentTarget);
  // };
  // ----------------------------------------------------
  const [y, setY] = React.useState<boolean>(true);
  const handleNavigation = () => {
    if ((window as Window).scrollY === 0) {
      console.log("scrolling up");
      setY(true);
    } else {
      setY(false);
    }
  };
  React.useEffect(() => {
    window.addEventListener("scroll", () => handleNavigation());
    return window.removeEventListener("scroll", () => handleNavigation());
  }, []);
  // ----------------------------------------------------
  return (
    <>
      <Box sx={{ width: "100vw", height: "130px" }}>
        <AppBar
          position="fixed"
          sx={{ background: "#fff", color: "#606060", width: "100vw" }}
        >
          <Toolbar>
            <LogoBtn />
            <MainHeaderSearch />
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                // onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <PersonIcon />
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Badge badgeContent={4} color="error">
                  <LocalGroceryStoreIcon />
                </Badge>
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}></Box>
          </Toolbar>
          <Collapse in={y}>
            <MainNavBar />
          </Collapse>
        </AppBar>
      </Box>
    </>
  );
}
