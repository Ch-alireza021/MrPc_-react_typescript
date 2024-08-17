
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { LogoBtn } from "../../logo-button";

export const FooterHeader = () => {
  return (
    <Box
    component={"footer"}
    sx={{
      display: "flex",
      alignItems: "center",
      borderColor: "divider",
      borderRadius: 2,
      // bgcolor: "background.paper",
      color: "#404041",
      gap: 2,
    }}
  >
    <Box>
      <LogoBtn />
      <Typography
        sx={{ color: "#404041", fontSize: "25px", fontWeight: 900 }}
      >
        مستر پی سی
      </Typography>
    </Box>
    <Divider
      color="primary"
      orientation="vertical"
      variant="middle"
      flexItem
    />
    <Box sx={{display:"flex",gap:1}}>
      <CallIcon />
      <Box>
        <Typography>تماس با پشتیبانی</Typography>
      <Typography>021-88888888</Typography>
      </Box>
    </Box>
    <Divider
      color="primary"
      orientation="vertical"
      variant="middle"
      flexItem
    />
    <Box sx={{display:"flex",gap:1}}>
      <LocationOnIcon />
      <Box>
        <Typography>  نشانی</Typography>
      <Typography>تهران , تقاطع خیابان ولیعصر و طالقانی</Typography>
      </Box>
    </Box>
  </Box>
  )
}

