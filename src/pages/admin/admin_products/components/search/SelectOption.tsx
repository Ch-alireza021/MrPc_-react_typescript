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
}

export const SelectOption: FC<SelectOptionIF> = ({
  title,
  showValue,
  onChangeSelect,
  responseData,
  URL,
}) => {
  const { data: category } = useQuery({
    queryKey: [URL],
    queryFn: () => generalGet(URL).then((res) => res.data[responseData]),
  });

  return (
    <Box component="form" noValidate autoComplete="off" sx={{ minWidth: "100px" }}>
      <TextField
        id="outlined-select"
        select
        label={title}
        value={showValue}
        onChange={(event) => onChangeSelect(event.target.value)}
        sx={{ minWidth: "150px", ...styleTextField }}
      >
        {category && category.length > 0 ? (
          category.map((option: { _id: string; name: string }) => (
            <MenuItem key={option._id} value={option._id}    sx={{ ...styleTextField }}>
              {option.name}
            </MenuItem>
          ))
        ) : (
          <MenuItem disabled>No options available</MenuItem>
        )}
      </TextField>
    </Box>
  );
};
