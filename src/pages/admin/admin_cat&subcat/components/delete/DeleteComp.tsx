import {
  dCASSuccess,
  SbcategoryDataIF,
} from "../../utils";
import { Box, Button, Stack } from "@mui/material";
import { deleteStyle } from "../../../../../components";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  URL_CATEGORY,
  URL_PRODUCT,
  URL_SUBCATEGORY,
} from "../../../../../config";
import { api, generalGet } from "../../../../../services";
import { useSnackbar } from "../../../../../hooks";

export const DeleteComp = ({
  row,
  setOpen,
  type,
}: {
  row: SbcategoryDataIF;
  setOpen: (arg0: boolean) => void;
  type: "subcategory" | "category";
}) => {
  console.log("delete", row);
  const { showSnackbar } = useSnackbar();
  const queryClient = useQueryClient();
  const handleDelete = async () => {
    try {
      const res = await generalGet(`${URL_PRODUCT}?${type}=${row._id}`);
      const total = res.total;
      if (total === 0) {
        mutation.mutate({ id: row._id });
      } else {
        showSnackbar({
            message: `این ${ type === "category"?' دسته بندی':'زیرمجموعه' } در محصولات استفاده شده است.`,
            severity: "error",
            key: Math.random(),
          });
          setOpen(false);
      }
    } catch (error) {}
  };
  const mutation = useMutation({
    mutationFn: ({ id }: { id: string | null }) =>
      type === "category"
        ? api.delete(`${URL_CATEGORY}/${id}`)
        : api.delete(`${URL_SUBCATEGORY}/${id}`),
    onSuccess: () =>
      dCASSuccess({
        showSnackbar,
        setOpen,
        queryClient,
        queryKey: type === "category" ? "ACCategory" : "ACSubcategory",
      }),
    // onError: (error) => eCOnError({ error, showSnackbar }),
  });
  return (
    <Stack justifyContent={'center'} sx={{ minWidth: 400,gap:2}}>
      <h4>{`آیا میخواهید ${row.name} را حذف کنید؟؟`}</h4>
      <Box display={"flex"} gap={2} justifyContent={"center"}>
        <Button color="success" onClick={() => setOpen(false)}>
          انصراف
        </Button>
        <Button color="error" onClick={handleDelete}>
          تایید
        </Button>
      </Box>
    </Stack>
  );
};
