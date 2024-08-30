import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Box } from "@mui/material";
import { FormikProps } from "formik";
import { ValuesIF } from "../../utils/interface";
import { AAPIHover } from "./AAPIHover";
import { useWindowSize } from "../../../../../../../hooks";
// -------------------------------------------------------
// AAPImagesSlider ===> admin add products image slider
export const AAPImagesSlider = ({
  formik,
}: {
  formik: FormikProps<ValuesIF>;
}) => {
  const size = useWindowSize();
  return (
    <Box width={`${((size.width - 240) * 65) / size.width}vw`}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={size.width / 300}
        scrollbar={{ draggable: true }}
      >
        {formik?.values?.images?.map((image, index) => (
          <SwiperSlide key={index}>
            <AAPIHover {...{ image }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
