import * as React from "react";
import { useQuery } from "@tanstack/react-query";
import { FormControl, InputLabel, MenuItem, Select, Box } from "@mui/material";
import { generalGet } from "../../../../../services";

export default function SelectOption({
  title,
  showValue,
  onChangeSelect,
  responseData,
  URL,
}) {
  console.log(showValue);
  // -----------------------------------------------------------
  // GET DATA
  const { data: category } = useQuery({
    queryKey: [URL],
    queryFn: () => {
      return generalGet(URL).then((res) => res.data[responseData]);
    },
  });
  // -----------------------------------------------------------

  return (
    <Box component="form" noValidate autoComplete="off" sx={{width:'100px'}}>
      <FormControl fullWidth focused>
        <InputLabel
          id="selectInput"
          sx={{
            color: "#FF0000",
            "&:focus-within": {
              color: "#FF0000",
            },
          }}
        >
          {title}
        </InputLabel>
        <Select 
          color={"primary"}
          sx={{
            "& .MuiInputBase-input": {
              color: "#000000",
              direction: "ltr",
            },
          }}
          id="selectInput"
          label={title}
          variant="standard"
          value={showValue}
          onChange={(event) => onChangeSelect(event.target.value)}
          // defaultValue={showValue ? showValue:"add"}
          MenuProps={{
            sx: {
              color: "red",
            },
          }}
        >
          {category?.map((option) => (
            <MenuItem
              key={option._id}
              value={option._id}
              sx={{ color: "#0c0c0c", background: "#f0eded" }}
            >
              {option.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
