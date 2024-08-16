import { Box, IconButton, Badge } from "@mui/material";
import {
  LocalGroceryStore as LocalGroceryStoreIcon,
  Person as PersonIcon,
} from "@mui/icons-material";

export const PersonBox = () => {
  return (
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
      <IconButton size="large" aria-label="show 4 new mails" color="inherit">
        <Badge badgeContent={4} color="error">
          <LocalGroceryStoreIcon />
        </Badge>
      </IconButton>
    </Box>
  );
};
