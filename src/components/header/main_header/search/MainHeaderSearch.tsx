import { Box } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { main_header_style } from "../../../../theme";
import { FC } from "react";
const { StyledInputBase, Search } = main_header_style();

interface MainHeaderSearchIF {
  admin: boolean | undefined;
}
export const MainHeaderSearch: FC<MainHeaderSearchIF> = ({ admin }) => {
  return (
    <Search>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          background: "#e6e6e6",
          borderRadius: "8px",
          paddingLeft: "10px",
        }}
      >
        <SearchIcon sx={{ fontSize: "40px" }} />
        <StyledInputBase
          sx={{ width: admin ? "30vw" : "50vw" }}
          placeholder="جستجو ..."
          inputProps={{ "aria-label": "جستجو" }}
        />
      </Box>
    </Search>
  );
};
