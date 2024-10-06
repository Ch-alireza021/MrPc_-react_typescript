import { TableHead, TableRow, TableCell, Box, Stack } from "@mui/material";
import { CategoryIF } from "../../../../admin_cat&subcat";
import { GeneralButton } from "../../../../../../theme";
import { SetStateAction } from "react";
import { HPSConfigDataIF } from "../HPSConfigComp";
import { hPSHandleClick } from "../utils";
interface HeadCell {
  disablePadding: boolean;
  id: keyof CategoryIF;
  label: string;
  numeric: boolean;
}
// HPSCTableHead ==> home page setting config table head
export const HPSCTableHead = ({ isEdit }: { isEdit: boolean }) => {
  const headCells: HeadCell[] = [
    {
      id: "name",
      numeric: false,
      disablePadding: true,
      label: "نام دسته بندی",
    },
  ];
  if (isEdit)
    headCells.push({
      id: "edit",
      numeric: true,
      disablePadding: false,
      label: "ویرایش",
    });

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell key={headCell.id}>{headCell.label}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export const hPSHeaderRender = ({
  isEdit,
  setData,
  data,
}: {
  isEdit: boolean;
  setData: (value: SetStateAction<HPSConfigDataIF>) => void;
  data: HPSConfigDataIF;
}) => {
  const header = [
    {
      key: "name",
      render: ({
        row,
        index,
      }: {
        row: CategoryIF;
        index: number;
        isItemSelected: boolean;
      }) => (
        <Stack direction={"row"}>
          <Box width={"1.5rem"}>{index + 1}</Box>
          {row.name}
        </Stack>
      ),
    },
  ];

  if (isEdit)
    header.push({
      key: "edit",
      render: ({
        row,
        isItemSelected,
      }: {
        row: CategoryIF;
        index: number;
        isItemSelected: boolean;
      }) => (
        <GeneralButton
          onClick={() => hPSHandleClick({ id: row._id, setData, data })}
          text={isItemSelected ? "حذف" : "انتخاب"}
        />
      ),
    });
  return header;
};
