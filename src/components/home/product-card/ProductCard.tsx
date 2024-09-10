import { CustomCardHeader, CustomBox } from "./styleProductCard";
// import image from "@/public/Nacon-Revolution-5-Pro-White-Black-1-300x300.jpg"
import Typography from "@mui/material/Typography";
import { productsDataIF } from "../../../pages/admin/admin_products/utils";
import { URL_BACKEND_THUMBNAILS } from "../../../config";
import { Box } from "@mui/material";

export const ProductCard = ({ data }: { data: productsDataIF }) => {

  return (
    <CustomBox sx={{maxWidth: '242.8px'}}>
      <CustomCardHeader />
      <Box sx={{width:'209px',height:'209px',pb:3}}>
        <img
          src={URL_BACKEND_THUMBNAILS + "/" + data?.thumbnail}
          alt=""
          width={209}
          height={209}
        />
      </Box>
      <Typography component="div" sx={{ height: "71px", textAlign: "center" }}>
        {data?.name}
      </Typography>
      <Typography component="div" textAlign={"center"}>
        {data?.price.toLocaleString()} تومان
      </Typography>
      <Typography component="div" textAlign={"center"}>
        {data?.quantity.toLocaleString()} عدد
      </Typography>
    </CustomBox>
  );
};
