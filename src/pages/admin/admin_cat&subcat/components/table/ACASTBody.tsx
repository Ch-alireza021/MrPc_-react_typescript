import { TableBody } from "@mui/material";
import { ACASTCell } from "./ACASTCell";
import { CategoryDataIF, CategoryIF, SubategoryDataIF } from "../../utils";
// -----------------------------------------------------
// ACASTBody ==> admin category and subcategory table body
export const ACASTBody = ({ rows,data}: { rows: CategoryIF[], data:CategoryDataIF[]|SubategoryDataIF[] }) => {
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
              data
            }}
          />
        );
      })}
    </TableBody>
  );
};
