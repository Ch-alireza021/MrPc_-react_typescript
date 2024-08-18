import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { terms_static_data } from "../../config";
const Terms = () => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", padding: "50px 20px" }}
    >
      <Box
        paddingX={"20px"}
        paddingY={"30px"}
        display={"flex"}
        flexDirection={"column"}
        maxWidth={"70vw"}
        gap={2}
      >
        <Typography
          variant="h1"
          fontSize={"26px"}
          textAlign={"center"}
          color="secondary"
        >
          قوانین و مقررات فروشگاه مستر پی سی
        </Typography>
        <Typography fontSize={"14px"}>
          تمامی فعالیت‌های فروشگاه مستر پی سی کاملا تابع قوانین جمهوری اسلامی
          ایران است.
        </Typography>
        {Object.values(terms_static_data)?.map((i, index) => (
          <>
            <Typography variant="h6" key={index}>
              {i.title}
            </Typography>
            {i.data?.map((e, eindex) => (
              <Typography
                key={index + eindex}
                fontSize={"14px"}
                lineHeight={1.7}
              >
                {e}
              </Typography>
            ))}
          </>
        ))}
      </Box>
    </Box>
  );
};

export default Terms;
