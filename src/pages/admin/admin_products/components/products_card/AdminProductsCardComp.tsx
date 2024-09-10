import { Box, Stack } from "@mui/material";
import { ProductCard } from "../../../../../components";
import { productsDataIF, setPage } from "../../utils";
import { FC } from "react";
import { APCPagination } from "./APCPagination";
interface AdminProductsCardCompIF {
  rows: productsDataIF[];
  page: number;
  setPage: setPage;
  total_pages: number;
}
export const AdminProductsCardComp: FC<AdminProductsCardCompIF> = ({
  rows,
  page,
  setPage,
  total_pages,
}) => {
  return (
    <Stack spacing={5} sx={{ alignItems: "center" }}>
      <Stack
        direction="row"
        useFlexGap
        spacing={5}
        sx={{ flexWrap: "wrap" }}
      >
        {rows?.map((i, ind) => (
          <ProductCard key={ind} data={i} />
        ))}
      </Stack>
      <APCPagination {...{ page, setPage, total_pages }} />
    </Stack>
  );
};
