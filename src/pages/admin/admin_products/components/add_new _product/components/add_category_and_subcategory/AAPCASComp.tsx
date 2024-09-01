// -----------------------------------------------------------------------

import { Grid, InputLabel, Stack } from "@mui/material";
import { addSelectOptionDatas, textFieldAddSACData } from "../../config";
import { SelectOption } from "../../../search";
import { FC } from "react";
import { FormikHelpers, FormikProps } from "formik";
import { ValuesIF } from "../../utils";
import { AAPTextfeild } from "../text_feild";

interface AAPCASCompIF {
  formik: FormikHelpers<ValuesIF> & FormikProps<ValuesIF>;
}

// AAPCASComp ==> admin add products category and subcategory component
export const AAPCASComp: FC<AAPCASCompIF> = ({ formik }) => {
  return (
    <>
      {addSelectOptionDatas?.map((selection, index) => (
        <Grid item xs={12} sm={6} md={4} key={selection?.id}>
          <Stack gap={2} id={selection?.id + index}>
            <SelectOption
              key={selection?.id + index}
              title={selection?.title}
              URL={selection?.URL(formik?.values?.category)}
              responseData={selection?.responseData}
              showValue={formik?.values[selection?.showValue]}
              req={
                formik?.values?.category === "addNew"
                  ? false
                  : selection?.showValue === "category"
                  ? true
                  : formik?.values?.category?.length > 0
                  ? true
                  : false
              }
              addProduct={true}
              onChangeSelect={(value) => {
                selection?.onChange(value, formik);
              }}
            />
            <InputLabel htmlFor={selection?.id + index}>
              {formik.touched[selection?.showValue] &&
                formik.errors[selection?.showValue] }
            </InputLabel>
          </Stack>
        </Grid>
      ))}
      {formik?.values?.category === "addNew" &&
        textFieldAddSACData?.map((data, index) => (
          <Grid item xs={12} sm={6} md={index === 1 ? 8 : 4} key={index}>
            <AAPTextfeild {...{ formik, data }} />
          </Grid>
        ))}
    </>
  );
};
