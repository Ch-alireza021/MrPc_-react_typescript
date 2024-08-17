import { Box, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { FC } from "react";
import { advertiserdCardStyle } from "../../../theme";

interface AdvertiserdCardIF {
  src: string;
  title?: string;
  click?: () => void;
  justImage?: boolean;
}

const { CountainerBox, spanStyle } = advertiserdCardStyle();
export const AdvertiserdCard: FC<AdvertiserdCardIF> = ({
  src,
  title,
  click,
  justImage,
}) => {
  return (
    <CountainerBox onClick={click}>
      {!justImage ? (
        <>
          <Box
            sx={{
              width: "60%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
            }}
          >
            <Typography sx={{ fontWeight: 900, fontSize: "2vw" }}>
              {title}
            </Typography>
            <Typography sx={{ fontWeight: 100, fontSize: "2vw" }}>
              مشاهده همه موارد
            </Typography>
            <span style={{ ...spanStyle }}>
              <ArrowBackIosNewIcon />
            </span>
          </Box>
          <Box sx={{ width: "40%", display: "flex" }}>
            <img src={src} alt="" style={{ width: "17vw",height:'17vw' }} />
          </Box>
        </>
      ) : (
        <img src={src} alt=""  />
      )}
    </CountainerBox>
  );
};
