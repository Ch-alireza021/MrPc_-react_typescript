import styled from "@emotion/styled";

export const HoverRevealText = styled.div`
  word-wrap: none;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(0, -10px);
  z-index: 999;
  background-color: white;
  padding: 10px 20px ;
  white-space: nowrap;
`;

export const HoverRevealCustomBox = styled.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`;