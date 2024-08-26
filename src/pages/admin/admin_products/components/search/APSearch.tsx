import { URL_CATEGORY, URL_SUBCATEGORY } from "../../../../../config";
import { SelectOption } from "./SelectOption";
import { Box, Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  setCategory,
  setPrice,
  setQuantity,
  setReq,
  setSubcategory,
} from "../../../../../features";
import { RootState } from "../../../../../features/rootReducers";

// APSearch ==> admin products search
export const APSearch = () => {
  const dispatch = useDispatch();
  const formValues = useSelector((state: RootState) => state?.sPState);
  const handleSubmit = () => {
    dispatch(setReq(true));
  };
  return (
    <Box style={{ display: "flex", gap: ".5rem", padding: "2rem 0" }}>
      <SelectOption
        title={"دسته بندی"}
        URL={`${URL_CATEGORY}?limit=1000`}
        responseData={URL_CATEGORY}
        showValue={formValues.category}
        onChangeSelect={(value) => {
          dispatch(setReq(false));
          dispatch(setCategory(value));
          dispatch(setSubcategory(""));
        }}
      />
      <SelectOption
        title={"زیر مجموعه"}
        URL={`${URL_SUBCATEGORY}?limit=1000${
          formValues.category ? `&category=${formValues.category}` : ""
        }`}
        responseData={URL_SUBCATEGORY}
        showValue={formValues.subcategory}
        onChangeSelect={(value) => {
          dispatch(setReq(false));
          dispatch(setSubcategory(value));
        }}
      />
      <TextField
        id="quantity"
        label="تعداد"
        variant="standard"
        color="primary"
        type="number"
        focused
        sx={{ width: "100px" }}
        onChange={(e) => {
          dispatch(setReq(false));
          dispatch(setQuantity(Number(e.target.value)));
        }}
      />
      <TextField
        id="price"
        label="قیمت"
        variant="standard"
        sx={{ width: "150px" }}
        type="number"
        onChange={(e) => {
          dispatch(setReq(false));
          dispatch(setPrice(Number(e.target.value)));
        }}
        focused
      />
      <Button variant="text" onClick={handleSubmit} type="button">
        جست و جو
      </Button>
    </Box>
  );
};
