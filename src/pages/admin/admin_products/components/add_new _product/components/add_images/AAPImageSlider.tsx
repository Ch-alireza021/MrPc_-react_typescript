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
import { DeleteModal } from "../../../../../../../components";
import { useState } from "react";
// -------------------------------------------------------
// AAPImagesSlider ===> admin add products image slider
export const AAPImagesSlider = ({
  formik,
}: {
  formik: FormikProps<ValuesIF>;
}) => {
  const size = useWindowSize();
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [deleteImg, setDeleteImg] = useState<File | null>(null);

  const onClose = () => {
    console.log(openDelete);
    setOpenDelete(false);
  };
  const response = (res: boolean) => {
    if (res === true && deleteImg) {
      const images = formik.values.images.filter(
        (i) => i.name !== deleteImg.name
      );
      formik.setFieldValue("images", images);
    }
    setOpenDelete(false);
    setDeleteImg(null);
  };
  const handleDelete = (img: File) => {
    setOpenDelete(true);
    setDeleteImg(img);
  };
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
            <AAPIHover {...{ image, handleDelete }} />
          </SwiperSlide>
        ))}
      </Swiper>
      <DeleteModal
        {...{ onClose, response }}
        onOpen={openDelete}
        data={deleteImg}
      />
    </Box>
  );
};
