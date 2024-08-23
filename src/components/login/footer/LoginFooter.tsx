import { Box, Typography } from "@mui/material";
import { PATH } from "../../../config";
import { CustomButton, theme, CustomLink } from "../../../theme";

export const LoginFooter = () => {
  return (
    <>
      <CustomButton variant="contained" type="submit">
        ورود
      </CustomButton>
      <Box color={theme.palette.customGray.main}>
        <Typography>برای اولین مرتبه می‌خواهی وارد شوی؟!</Typography>
        <CustomLink to={PATH.SIGN_UP}>از این قسمت وارد شو</CustomLink>
      </Box>
    </>
  );
};
