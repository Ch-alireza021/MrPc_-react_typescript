import { SelectOption } from "./SelectOption";
import { Button, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setSearchOff } from "../../../../../features";
import { RootState } from "../../../../../features/rootReducers";
import { APSearchStackStyle, buttonStyles } from "../../utils";
import { searchSelectOptionDatas } from "../../config";
// ---------------------------------------
// ASSearch ==> admin subcategory search
export const ASSearch = ({
  isOpen,
  paddingBottom,
}: {
  isOpen: boolean;
  paddingBottom?: string;
}) => {
  const dispatch = useDispatch();
  const formValues = useSelector((state: RootState) => state?.sPState);
  const handleSubmit = () => {
    dispatch(setSearchOff());
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
        <Button
          onClick={() => {
            handleSubmit();
          }}
          type="button"
          variant="contained"
          color="success"
          sx={buttonStyles}
        >
         لغو
        </Button>
      </Stack>
    </>
  );
};
