import { TablePagination } from "@mui/material";
import {
  AdminProductsPaginationIF,
  handleChangeRowsPerPage,
} from "../../utils";
import { FC } from "react";

export const AdminProductsPagination: FC<AdminProductsPaginationIF> = ({
  tableDetails,
  setTableDetails,
  total,
}) => {
  const handleChangePage = (_event: unknown, newPage: number) => {
    setTableDetails((pre) => ({ ...pre, page: newPage }));
  };
  const { rowsPerPage, page } = tableDetails;
  return (
    <TablePagination
      rowsPerPageOptions={[5, 10, 25]}
      component="div"
      count={total}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={(event) =>
        handleChangeRowsPerPage(event, setTableDetails)
      }
      labelRowsPerPage="تعداد ردیف در صفحه"
    />
  );
};
