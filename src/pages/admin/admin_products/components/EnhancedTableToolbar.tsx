import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FilterListIcon from "@mui/icons-material/FilterList";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";
import { APSearch } from "./search";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchOff } from "../../../../features";
export const EnhancedTableToolbar = () => {
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const dispatch = useDispatch();
  return (
    <Toolbar
      sx={{
        pl: { sm: 3 },
        pr: { xs: 1, sm: 1 },
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Typography
        sx={{ flex: "1 1 1 100%" }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        محصولات
      </Typography>
      {isSearch && <APSearch />}
      <Tooltip
        title="Filter list"
        onClick={() => {
          if (isSearch===true) dispatch(setSearchOff());
          setIsSearch((pre) => !pre);
        }}
      >
        <IconButton>
          <FilterListIcon />
        </IconButton>
      </Tooltip>
    </Toolbar>
  );
};
