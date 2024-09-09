import { CKEditor } from "@ckeditor/ckeditor5-react";
import { ClassicEditor } from "ckeditor5";

import "ckeditor5/ckeditor5.css";
import { FormikHelpers, FormikProps } from "formik";
import { ValuesIF } from "../../utils";
import { toolbar } from "./toolbar";
import { plugins } from "./plugins";

export const MyEditor = ({ formik }: { formik: FormikHelpers<ValuesIF> & FormikProps<ValuesIF> }) => {

  return (
    <CKEditor
      editor={ClassicEditor}
      onChange={(_event, editor) => {
        formik.setFieldValue("description", editor.getData());
      }}
      config={{
        language: "fa",
        alignment: {
          options: ["left", "center", "right", "justify"],
        },
        toolbar: toolbar,
        plugins: plugins,
        initialData:formik.values.description,
      }}
    />
  );
};
