import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import InfoIcon from "@mui/icons-material/Info";
import { CustomListItem } from "./CustomListItem";


export const MainNavBar = () => {
  return (
    <List
      sx={{ display: "flex", width: "fit-content" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <CustomListItem href="" text="دسته بندی">
        <MenuIcon />
      </CustomListItem>

      <CustomListItem href="" text="اسمبل هوشمند">
        <SettingsSuggestIcon />
      </CustomListItem>

      <CustomListItem href="" text=" درباره ما">
        <InfoIcon />
      </CustomListItem>
    </List>
  );
}; 
