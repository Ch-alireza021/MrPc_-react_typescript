import { AdvertisingHeader } from "./slider";
import { ProductCard } from "./product-card";
import { AdvertiserdCard } from "./advertiserd_card";
import image from "../../../public/monitor-alienware-aw3423dw-gallery-1.png";
// import image2 from "../../../public/kf-card.png";
import image3 from "../../../public/cat-button-graphic-card-200x200.png";
import { Box } from "@mui/material";

export const HomeComponent = () => {
  return (
    <>
      <div>HomeComponent</div>
      <AdvertisingHeader />
      <ProductCard />
      <Box sx={{display:'flex',justifyContent:'space-between'}}>
        <AdvertiserdCard {...{ src: image, title: " محبوب ترین مانیتورها" }} />
        <AdvertiserdCard
          {...{ src: image3, title: " محبوب ترین کارت گرافیک ها" }}
        />
      </Box>
    </>
  );
};
