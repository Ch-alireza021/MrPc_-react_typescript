import { Box, styled } from "@mui/material";

export const advertiserdCardStyle = () => {
  const CountainerBox = styled(Box)`
    width: 47vw;
    height: 20vw;
    padding: 8px 16px;
    border: 1px solid #d5d5d5;
    background: #e3e3e3;
    border-radius: 5px;
    box-shadow: 0 0 5px #5a5a5a;
    display: flex;

    :hover {
      border-color: #03c03c;
    }
  `;

  const spanStyle={
    display: "flex",
    width: "4vw",
    height: "4vw",
    border: ".12rem solid gray",
    borderRadius: ".5rem",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "2vw",
  }

  return { CountainerBox ,spanStyle};
};
