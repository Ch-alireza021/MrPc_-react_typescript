import * as React from "react";
import { AppBar, Box, Toolbar, Collapse } from "@mui/material";
import { MainNavBar } from "./navBar";
import { LogoBtn } from "../../logo-button";
import { MainHeaderSearch } from "./search";
import { PersonBox } from "./person-box";
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
            <PersonBox />
          </Toolbar>
          <Collapse in={y}>
            <MainNavBar />
          </Collapse>
        </AppBar>
      </Box>
    </>
  );
}
