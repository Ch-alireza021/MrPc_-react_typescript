import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { SetStateAction } from "react";
import { hPSHandleClick, sorting } from "../utils";
import { HPSConfigDataIF } from "../HPSConfigComp";
import { HPSCTableToolbar } from "./TableToolbar";
import { HPSCTableHead, hPSHeaderRender } from ".";

// HPSCTable ==>  home page setting config table
export const HPSCTable = ({
  data,
  setData,
}: {
  data: HPSConfigDataIF;
  setData: (value: SetStateAction<HPSConfigDataIF>) => void;
}) => {
  const visibleRows = sorting({
    selected: data.selected,
    data: data?.tableData,
  });


  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <HPSCTableToolbar {...{ data, setData }} />
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
            <HPSCTableHead isEdit={data?.isEdit} />
            <TableBody>
              {visibleRows.map((row) => {
                const isItemSelected = data.selected.includes(row._id);
                return (
                  <TableRow
                    hover
                    onDoubleClick={() =>
                      data?.isEdit &&
                      hPSHandleClick({ id: row._id, setData, data })
                    }
                    role="checkbox"
                    aria-checked={isItemSelected}
                    key={row._id}
                    selected={data?.isEdit ? isItemSelected : false}
                    sx={{ cursor: "pointer" }}
                  >
                    {hPSHeaderRender({
                      isEdit: data?.isEdit,
                      setData,
                      data,
                    })?.map((cell, index) => (
                      <TableCell padding="normal" key={index}>
                        {cell.render({
                          row,
                          index,
                          isItemSelected,
                        })}
                      </TableCell>
                    ))}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};
