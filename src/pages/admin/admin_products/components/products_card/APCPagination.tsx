import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { setPage } from "../../utils";

// APCPagination==>admin products card pagination
export const APCPagination = ({
  page,
  setPage,
  total_pages
}: {
  page: number;
  setPage: setPage;
  total_pages:number;
}) => {
  const change = (_event: any, page: number) => {
    setPage(page-1);
  };

  return (
    <Stack spacing={2}>
      <Pagination count={total_pages} onChange={change} page={page+1} />
    </Stack>
  );
};
