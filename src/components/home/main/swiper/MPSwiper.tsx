import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import "./style.css";

import { Navigation } from "swiper/modules";
import { ProductCard } from "../../..";
import { useWindowSize } from "../../../../hooks";
import { Box, Stack } from "@mui/material";
import { productsDataIF } from "../../../../pages/admin/admin_products/utils";

export const MPSwiper = ({
  MNProductsData,
  title,
}: {
  MNProductsData: productsDataIF[];
  title: string;
}) => {
  const width = useWindowSize().width;
  const count = Math.floor((width - 30) / 275);
  return (
    <Stack spacing={2} py={4}>
      <Box component="h3">{title}</Box>
      <Swiper
        navigation={true}
        slidesPerView={count}
        spaceBetween={30}
        modules={[Navigation]}
        className="mySwiper"
      >
        {MNProductsData?.map((i, ind) => (
          <SwiperSlide>
            <ProductCard key={ind} data={i} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Stack>
  );
};
