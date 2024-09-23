import { URL_CATEGORY, URL_SUBCATEGORY } from "../../../../../config";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Box, Button, Stack } from "@mui/material";
import { useSnackbar } from "../../../../../hooks";
import { api } from "../../../../../services";
import {
  dCASError,
  dCASSuccess,
  hDDComponent,
  SbcategoryDataIF,
} from "../../utils";

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
    onError: (_error) => dCASError({ showSnackbar }),
  });
  return (
    <Stack justifyContent={"center"} sx={{ minWidth: 400, gap: 2 }}>
      <h4>{`آیا میخواهید ${row.name} را حذف کنید؟؟`}</h4>
      <Box display={"flex"} gap={2} justifyContent={"center"}>
        <Button color="success" onClick={() => setOpen(false)}>
          انصراف
        </Button>
        <Button
          color="error"
          onClick={() =>
            hDDComponent({ type, row, mutation, showSnackbar, setOpen })
          }
        >
          تایید
        </Button>
      </Box>
    </Stack>
  );
};
