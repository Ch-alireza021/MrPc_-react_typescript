import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FilterListIcon from "@mui/icons-material/FilterList";
import Toolbar from "@mui/material/Toolbar";
import { OrderBtn } from "./OrderBtn";
import { SelectedCompIF } from "../utils";
import { FC } from "react";

export const EnhancedTableToolbar: FC<SelectedCompIF> = ({
  selected,
  setSelected,
}) => {
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <OrderBtn {...{ selected, setSelected }} />
      <Tooltip title="Filter list">
        <IconButton>
          <FilterListIcon />
        </IconButton>
      </Tooltip>
    </Toolbar>
  );
};
