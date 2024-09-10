import { useQuery } from "@tanstack/react-query";
import { MenuItem, TextField, Box } from "@mui/material";
import { generalGet } from "../../../../../services";
import { FC } from "react";
import { styleTextField } from "../../utils";

interface SelectOptionIF {
  title: string;
  showValue: string;
  onChangeSelect: (arg0: string) => void;
  responseData: string;
  URL: string;
  req?: boolean;
  addProduct?: boolean;
}

export const SelectOption: FC<SelectOptionIF> = ({
  title,
  showValue,
  onChangeSelect,
  responseData,
  URL,
  req,
  addProduct = false,
}) => {
  const { data: category } = useQuery({
    queryKey: [URL],
    queryFn: () => generalGet(URL).then((res) => res.data[responseData]),
    enabled: req,
  });

  return (
    <Box sx={{ minWidth: "100px" }}>
      <TextField
        id="outlined-select"
        select
        label={title}
        value={showValue}
        onChange={(event) => onChangeSelect(event.target.value)}
        sx={{ minWidth:addProduct? '100%':"150px", ...styleTextField,bgcolor:addProduct?'#EFEFEF':''}}
      >
        {addProduct && (
          <MenuItem value="addNew" sx={{ ...styleTextField }}>
            اضافه کردن
          </MenuItem>
        )}
        {category &&
          category.length > 0 &&
          category.map((option: { _id: string; name: string }) => (
            <MenuItem
              key={option._id}
              value={option._id}
              sx={{ ...styleTextField }}
            >
              {option.name}
            </MenuItem>
          ))}
      </TextField>
    </Box>
  );
};
