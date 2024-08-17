import { CustomCardHeader, CustomBox } from "./styleProductCard";
import image from "../../../../public/Nacon-Revolution-5-Pro-White-Black-1-300x300.jpg"
// import image from "@/public/Nacon-Revolution-5-Pro-White-Black-1-300x300.jpg"
import Typography from '@mui/material/Typography';

export const ProductCard = () => {
    const price="1100000000"
  return (
    <CustomBox>
      <CustomCardHeader />
      <img src={image} alt="" width={209} height={209}/>
      <Typography  component="div" sx={{height:"71px",textAlign:"center"}} >
      دسته بازی Nacon Revolution 5 Pro - White/Black
      </Typography>
      <Typography  component="div" textAlign={"center"}>
        {price.toLocaleString()} تومان
      </Typography>
    </CustomBox>
  );
};

 