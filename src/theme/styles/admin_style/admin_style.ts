import styled from "@emotion/styled";

export const HoverRevealText = styled.div`
  word-wrap: none;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(0, -10px);
  z-index: 999;
  background-color: white;
  padding: 10px 30px ;
  white-space: nowrap;
  border-radius:1rem;
  font-size: large;
`;

export const HoverRevealCustomBox = styled.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`;

export const AdminProductImageCustomBox = styled.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`;

export const AdminProductImageImageBox = styled.div`
  word-wrap: none;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(50%, -50%);
  z-index: 999;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  white-space: nowrap;
`;