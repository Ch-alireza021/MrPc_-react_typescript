import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Input as BaseInput } from "@mui/base/Input";
import { InputElement, InputRoot } from "../../../../../theme";
import SelectOption from "./SelectOption";

// APSearch ==> admin products search
export const APSearch = () => {
  const [formValues, setFormValues] = useState({ categories: "" });
  return (
    <form>
      <SelectOption
        title={"دسته بندی"}
        URL={"/categories?limit=1000"}
        responseData={"categories"}
        showValue={formValues?.categories}
        onChangeSelect={(value: string) =>
          setFormValues((pre) => ({ ...pre, categories: value }))
        }
      />
    </form>
  );
};
{
  /* //   <BaseInput 
    //     slots={{
    //       root: InputRoot,
    //       input: InputElement,
    //     }}
    //     id="quantity"
    //     name="username"
    //     onChange={()=>setFormValues(pre=>({...pre,}))}
    //     type="text"
    //   />*/
}
