import { CheckCircleOutline, HighlightOff } from "@mui/icons-material";
import {
  Toolbar,
  alpha,
  Typography,
  Tooltip,
  IconButton,
  Stack,
} from "@mui/material";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { SetStateAction } from "react";
import { dpi } from "../../../../../../services";
import { GeneralButton } from "../../../../../../theme";
import { HPSConfigDataIF } from "../HPSConfigComp";

interface HPSCTableToolbarIF {
  data: HPSConfigDataIF;
  setData: (value: SetStateAction<HPSConfigDataIF>) => void;
}
// HPSCTableToolbar ==> home page setting config table toolbar
export const HPSCTableToolbar = (props: HPSCTableToolbarIF) => {
  const { data, setData } = props;
  const numSelected = data.selected?.length;
  const showEdit = numSelected > 0 && data.isEdit;
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ selected }: { selected: string[] }) =>
      dpi.put("HPSConfigDB/1", { selected }),
    onSuccess: () => {
      console.log("success");
      queryClient.invalidateQueries({
        queryKey: ["HPSConfigDB"],
      });
      const firstData = data.tableData?.filter((i) =>
        data.selected.includes(i._id)
      );
      setData((pre) => ({
        ...pre,
        isEdit: false,
        firstData,
        selected: firstData?.map((i) => i._id),
        tableData: firstData,
      }));
    },
  });

  return (
    <Toolbar
      sx={[
        {
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
        },
        showEdit && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        },
      ]}
    >
      {showEdit ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} دسته بندی انتخاب شده
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          دسته بندی های انتخاب شده
        </Typography>
      )}
      {showEdit && (
        <>
          <Tooltip
            title="ذحیره"
            onClick={() => mutation.mutate({ selected: data.selected })}
            // onClick={() => handleSave({ selected: data.selected })}
          >
            <IconButton>
              <CheckCircleOutline />
            </IconButton>
          </Tooltip>
          <Tooltip
            title="کنسل کردن"
            onClick={() =>
              setData((pre) => ({
                ...pre,
                isEdit: false,
                selected: pre.firstSelected,
                tableData: pre.firstData,
              }))
            }
          >
            <IconButton>
              <HighlightOff />
            </IconButton>
          </Tooltip>
        </>
      )}
      <Stack direction={"row"} spacing={2}>
        {!data.isEdit && (
          <GeneralButton
            onClick={() => {
              setData((pre) => ({ ...pre, isEdit: !pre.isEdit }));
            }}
            text={"ویرایش"}
          />
        )}
      </Stack>
    </Toolbar>
  );
};
