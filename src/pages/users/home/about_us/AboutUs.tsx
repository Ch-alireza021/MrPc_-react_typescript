import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import pic from "../../../../../public/32969-4-gaming-computer-free-download.png";
import { about_us_static_data } from "../../../../config";
const AboutUs = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 4,
        padding: "20px",
        justifyContent: "center",
        paddingY: "10vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          maxWidth: "750px",
        }}
      >
        <Typography variant="h4"> درباره مستر پی سی </Typography>
        {Object.values(about_us_static_data)?.map((i, index) => (
          <Typography key={index}>{i}</Typography>
        ))}
      </Box>
      <img src={pic} alt="" width={500} />
    </Box>
  );
};

export default AboutUs;
