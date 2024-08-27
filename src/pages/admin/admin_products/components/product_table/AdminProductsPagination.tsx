import { TablePagination } from "@mui/material";
import { AdminProductsPaginationIF, handleChangeRowsPerPage } from "../../utils";
import { FC } from "react";

export const AdminProductsPagination: FC<AdminProductsPaginationIF> = ({
  setPage,
  total,
  rowsPerPage,
  page,
  setRowsPerPage,
}) => {
  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };
  return (
    <TablePagination
      rowsPerPageOptions={[5, 10, 25]}
      component="div"
      count={total}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={(event) =>
        handleChangeRowsPerPage(event, setRowsPerPage, setPage)
      }
      labelRowsPerPage="تعداد ردیف در صفحه"
    />
  );
};
