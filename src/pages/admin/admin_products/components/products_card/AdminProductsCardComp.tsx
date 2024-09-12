import { Stack } from "@mui/material";
import { ProductCard } from "../../../../../components";
import { productsDataIF, TableDetailsIF } from "../../utils";
import { FC, SetStateAction } from "react";
import { APCPagination } from "./APCPagination";
interface AdminProductsCardCompIF {
  rows: productsDataIF[];
  page: number;
  setTableDetails: (value: SetStateAction<TableDetailsIF>) => void;
  total_pages: number;
}
export const AdminProductsCardComp: FC<AdminProductsCardCompIF> = ({
  rows,
  page,
  setTableDetails,
  total_pages,
}) => {
  return (
    <Stack spacing={5} sx={{ alignItems: "center" }}>
      <Stack direction="row" useFlexGap spacing={5} sx={{ flexWrap: "wrap" }}>
        {rows?.map((i, ind) => (
          <ProductCard key={ind} data={i} />
        ))}
      </Stack>
      <APCPagination {...{ page, setTableDetails, total_pages }} />
    </Stack>
  );
};
