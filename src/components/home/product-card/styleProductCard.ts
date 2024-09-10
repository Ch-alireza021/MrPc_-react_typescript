import styled from '@emotion/styled';
import Box from '@mui/material/Box';
export const CustomBox = styled(Box)`
/* box-sizing: border-box; */
  width: 242.8px;
  margin: 10px 5px;
  height: 385px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid #dedede;
  background:white;
  border-radius: 5px;
  box-shadow:0 0 5px #5a5a5a;
  :hover{
    border-color: #03c03c;
  box-shadow:0 0 5px  #02882b;

  }
  `;

  export const CustomCardHeader=styled(Box)`
  position: relative;
  height: 29px;
  width: 100%;
  `