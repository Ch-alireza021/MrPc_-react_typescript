import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { theme } from "../../../theme";
import { SocialMediaComponent } from "./SocialMediaComponent";

const SocialMedia = () => {
  const style = {
    "&.MuiIconButton-root:hover": {
      color: theme.palette.secondary.main,
    },
  };
  const data = [
    {
      text: "گیت هاب",
      href: "https://github.com/Ch-alireza021/MrPc_-react_typescript",
      icon: <GitHubIcon />,
    },
    {
      text: "لینکدین",
      href: "https://www.linkedin.com/in/alireza-chizari-8b04542aa/",
      icon: <LinkedInIcon />,
    },
    {
      text: "اینستاگرام",
      href: "https://www.instagram.com/mr.sasaaan",
      icon: <InstagramIcon />,
    },
    {
      text: "تلگرام",
      href: "https://t.me/mr_sasaaan",
      icon: <TelegramIcon />,
    },
  ];
  return (
    <Box sx={{ display: "flex" }}>
      {data?.map((i, index) => (
        <SocialMediaComponent text={i.text} key={index}>
          <IconButton href={i.href} target="_blank" sx={style}>
            {i.icon}
          </IconButton>
        </SocialMediaComponent>
      ))}
    </Box>
  );
};

export default SocialMedia;
