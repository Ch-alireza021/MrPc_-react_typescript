import { alpha, Avatar, Box, Stack, Typography } from "@mui/material";
import { navConfig } from "../../../config";
import { AdminNavItem } from "./admin_nav_item";

export const AdminNavbar = () => {
  return (<>
  <Box
      sx={{
        my: 3,
        mx: 2.5,
        py: 2,
        px: 2.5,
        display: 'flex',
        borderRadius: 1.5,
        alignItems: 'center',
        bgcolor: (theme) => alpha(theme.palette.grey[500], 0.12),
      }}
    >
      <Avatar src={'account.photoURL'} alt="photoURL" />

      <Box sx={{ ml: 2 }}>
        <Typography variant="subtitle2">{'علیرضا چیذری'}</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {/* {account.role} */}
          ادمین
        </Typography>
      </Box>
    </Box>
        <Stack component="nav" spacing={0.5} sx={{ px: 2 }}>
      {navConfig.map((item) => (
        <AdminNavItem key={item.title} item={item} />
      ))}
    </Stack>
    </>

  );
};
