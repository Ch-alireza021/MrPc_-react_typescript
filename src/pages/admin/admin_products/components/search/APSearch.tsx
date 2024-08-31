import { SelectOption } from "./SelectOption";
import { Button, Stack, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setPrice, setQuantity, setReq } from "../../../../../features";
import { RootState } from "../../../../../features/rootReducers";
import { APSearchStackStyle, buttonStyles, styleTextField } from "../../utils";
import { searchSelectOptionDatas, searchTextFeildData } from "../../config";
// ---------------------------------------
// APSearch ==> admin products search
export const APSearch = ({
  isOpen,
  paddingBottom,
}: {
  isOpen: boolean;
  paddingBottom?: string;
}) => {
  const dispatch = useDispatch();
  const formValues = useSelector((state: RootState) => state?.sPState);
  const handleSubmit = () => {
    dispatch(setReq(true));
  };
  return (
    <>
      <Stack
        direction={"row"}
        sx={APSearchStackStyle(isOpen)}
        paddingBottom={paddingBottom && isOpen ? paddingBottom : 0}
      >
        {searchSelectOptionDatas?.map((selection) => (
          <SelectOption
            key={selection?.responseData}
            title={selection?.title}
            URL={selection?.URL(formValues)}
            responseData={selection?.responseData}
            showValue={formValues[selection?.showValue]}
            req={isOpen}
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
      </Stack>
    </>
  );
};
