import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { TableDetailsIF } from "../../utils";
import { SetStateAction } from "react";

// APCPagination==>admin products card pagination
export const APCPagination = ({
  page,
  setTableDetails,
  total_pages,
}: {
  page: number;
  setTableDetails: (value: SetStateAction<TableDetailsIF>) => void;
  total_pages: number;
}) => {
  const change = (_event: any, page: number) => {
    setTableDetails((pre) => ({ ...pre, page: page - 1 }));
  };

  return (
    <Stack spacing={2}>
      <Pagination count={total_pages} onChange={change} page={page + 1} />
    </Stack>
  );
};
