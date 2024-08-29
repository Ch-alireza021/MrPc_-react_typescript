import { SelectOption } from "./SelectOption";
import { Box, Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  setPrice,
  setQuantity,
  setReq,
} from "../../../../../features";
import { RootState } from "../../../../../features/rootReducers";
import searchStyle from "./search.module.css";
import { buttonStyles, styleTextField } from "../../utils";
import { useState } from "react";
import { searchSelectOptionDatas, searchTextFeildData } from "../../config";
// APSearch ==> admin products search
export const APSearch = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const formValues = useSelector((state: RootState) => state?.sPState);
  const handleSubmit = () => {
    dispatch(setReq(true));
    console.log({ formValues });
  };
  console.log({ isOpen });
  return (
    <>
      <Box
        className={
          isOpen ? searchStyle?.containerIsOpen : searchStyle.container
        }
      >
        {searchSelectOptionDatas?.map((selection) => (
          <SelectOption
          key={selection?.responseData}
            title={selection?.title}
            URL={selection?.URL(formValues)}
            responseData={selection?.responseData}
            showValue={formValues[selection?.showValue]}
            onChangeSelect={(value) => {
              selection?.onChange(value, dispatch);
            }}
          />
        ))}
        {searchTextFeildData?.map((field) => (
          <TextField
            key={field?.id}
            id={field?.id}
            label={field?.label}
            variant="outlined"
            type="number"
            sx={{ width: "100px", ...styleTextField }}
            onChange={(e) => {
              dispatch(setReq(false));
              field?.id === "quantity"
                ? dispatch(setQuantity(Number(e.target.value)))
                : dispatch(setPrice(Number(e.target.value)));
            }}
          />
        ))}
        <Button
          onClick={() => {
            handleSubmit();
          }}
          type="button"
          variant="contained"
          color="success"
          sx={buttonStyles}
        >
          جست و جو
        </Button>
      </Box>
      <Button
        variant="contained"
        color="success"
        sx={{
          height: "37px",
          ...buttonStyles,
        }}
        onClick={() => {
          console.log("first");
          setIsOpen(!isOpen);
        }}
      >
        <Box className={isOpen ? searchStyle?.showText : searchStyle.hidText}>
          لغو
        </Box>
        <Box className={isOpen ? searchStyle?.hidText : searchStyle.showText}>
          جست و جو
        </Box>
      </Button>
    </>
  );
};
