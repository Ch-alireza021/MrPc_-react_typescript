import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { theme } from "../../../theme";
import { SocialMediaComponent } from "./SocialMediaComponent";
import { footerSocialMediaData } from "../../../config/staticData/footer/footerSocialMediaData";

const SocialMedia = () => {
  const style = {
    "&.MuiIconButton-root:hover": {
      color: theme.palette.secondary.main,
    },
  };

  return (
    <Box sx={{ display: "flex" }}>
      {footerSocialMediaData?.map((i, index) => (
        <SocialMediaComponent text={i.text} key={index}>
          <IconButton href={i.href} target="_blank" sx={style}>
            <i.icon />
          </IconButton>
        </SocialMediaComponent>
      ))}
    </Box>
  );
};

export default SocialMedia;
