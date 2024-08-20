import PropTypes from "prop-types";
import { ListItemButton, Box} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { alpha } from "@mui/material/styles";
import { usePathname } from "../../../../hooks";

interface NavItemProps {
  item: {
    path: string;
    title: string;
    icon: JSX.Element;
  };
}
export const AdminNavItem = ({ item }: NavItemProps) => {

    const pathname = usePathname();
    const active = item.path === pathname;
  return (
    
    <ListItemButton
      component={RouterLink}
      to={item.path}
      sx={{
        minHeight: 44,
        borderRadius: '.5rem',
        typography: "body2",
        color: "text.secondary",
        textTransform: "capitalize",
        fontWeight: "fontWeightMedium",
        "&:hover": {
            bgcolor: (theme) => alpha(theme.palette.customGray.main, 0.16),
          },
        ...(active && {
          color: "primary.main",
          fontWeight: "fontWeightSemiBold",
          bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
          "&:hover": {
            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.16),
          },
        }),
      }}
    >
      <Box component="span" sx={{ width: 24, height: 24, mr: 2 }}>
        {item.icon}
      </Box>

      <Box component="span">{item.title}</Box>
    </ListItemButton>
  );
};

AdminNavItem.propTypes = {
  item: PropTypes.shape({
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
  }).isRequired,
};
