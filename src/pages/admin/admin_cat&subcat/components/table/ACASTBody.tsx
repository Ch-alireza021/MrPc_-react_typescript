import { TableBody } from "@mui/material";
import { ACASTCell } from "./ACASTCell";
import { CategoryIF } from "../../utils";
import { categoryData } from "../../config";
// -----------------------------------------------------
// ACASTBody ==> admin category and subcategory table body
export const ACASTBody = ({ rows }: { rows: CategoryIF[] }) => {
  return (
    <TableBody>
      {rows?.map((row: CategoryIF, index: number) => {
        const labelId = `enhanced-table-checkbox-${index}`;
        return (
          <ACASTCell
            key={index}
            {...{
              row,
              labelId,
              index,
              data:categoryData
            }}
          />
        );
      })}
    </TableBody>
  );
};
