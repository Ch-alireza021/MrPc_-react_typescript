import { Box } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { main_header_style } from "../../../../theme";
const { StyledInputBase, Search } = main_header_style();
export const MainHeaderSearch = () => {
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
          sx={{ width: "50vw" }}
          placeholder="جستجو ..."
          inputProps={{ "aria-label": "جستجو" }}
        />
      </Box>
    </Search>
  );
};
