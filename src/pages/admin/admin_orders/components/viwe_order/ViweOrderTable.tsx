import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { VOTCell, VOTCProductIF } from "./VOTCell";

export const ViweOrderTable = ({ products }: { products: VOTCProductIF[] }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>کالا</TableCell>
            <TableCell align="right">تعداد</TableCell>
            <TableCell align="right">قیمت</TableCell>
            <TableCell align="right">جمع کل</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow
              key={product._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <VOTCell product={product} />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
