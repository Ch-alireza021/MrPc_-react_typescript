import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { footerInfoData } from "../../../config";
import { InfoComponent } from "./infoComponent";


// ------------------------------------------
//                 style
const CustomLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &:hover {
    color: #03c03c;
  }
`;
// ------------------------------------------
export const FooterInfo = () => {
  
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box sx={{ display: "flex", gap: 10 }}>
        {footerInfoData?.map((i, index) => (
          <InfoComponent key={i.id + index} text={i.text}>
            {i.subText?.map((e, eIndex) => (
              <CustomLink key={e.id + eIndex} to={e.to}>
                {e.text}
              </CustomLink>
            ))}
          </InfoComponent>
        ))}
      </Box>
      {/* <SocialMedia /> */}
    </Box>
  );
};
