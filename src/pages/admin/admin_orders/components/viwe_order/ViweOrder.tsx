import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Box, Stack, Typography } from "@mui/material";
import { api, getUser } from "../../../../../services";
import { GeneralButton } from "../../../../../theme";
import { URL_ORDERS } from "../../../../../config";
import { useSnackbar } from "../../../../../hooks";
import { ViweOrderTable } from "./ViweOrderTable";
import { fDate } from "../../../../../utils";
import { ViweOrderIF, vOSOnSuccess } from "../../utils";
import { creatOrderData } from "./config";
import { FC } from "react";

export const ViweOrder: FC<ViweOrderIF> = ({ row, setOpen }) => {
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();
  const userId = row?.user;
  const products = row?.products;
  const { data: user } = useQuery({
    queryKey: [`user${userId}`],
    queryFn: async () => await getUser({ id: userId }),
  });

  const renderData = creatOrderData({ user, row });
  const mutation = useMutation({
    mutationFn: (id: string) =>
      api.patch(`${URL_ORDERS}/${id}`, { deliveryStatus: true }),
    onSuccess: () => vOSOnSuccess({ showSnackbar, queryClient }),
    onError: () => {
      showSnackbar({
        message: ` خطا در ثبت `,
        severity: "error",
        key: Math.random(),
      });
    },
  });

  const handleDone = () => {
    mutation.mutate(row._id);
    setOpen(false);
  };
  return (
    <>
      <Box sx={{ display: "flex", flexWrap: "wrap", padding: "2rem 0" }}>
        {renderData.map((i, index) => (
          <Stack
            direction="row"
            spacing={1}
            key={index}
            sx={{ minWidth: "50%", padding: ".5rem 0" }}
          >
            <Typography> {i.label} </Typography>
            <Typography> {i.data} </Typography>
          </Stack>
        ))}
      </Box>
      <ViweOrderTable products={products} />
      {!row.deliveryStatus ? (
        <Stack direction={"row"} justifyContent={"center"}>
          <GeneralButton onClick={handleDone} text={"تحویل پست داده شد"} />
        </Stack>
      ) : (
        <Stack direction={"row"} justifyContent={"center"} gap={3}>
          <Typography>تحویل پست داده شد</Typography>
          <Typography>{fDate(row?.updatedAt)}</Typography>
        </Stack>
      )}
    </>
  );
};
