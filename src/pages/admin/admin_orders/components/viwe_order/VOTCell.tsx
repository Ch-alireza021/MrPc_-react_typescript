import { HoverReveal } from "../../../../../components";
import { generalGet } from "../../../../../services";
import { URL_PRODUCT } from "../../../../../config";
import { useQuery } from "@tanstack/react-query";
import { fCurrency } from "../../../../../utils";
import { TableCell } from "@mui/material";

export interface VOTCProductIF {
    _id: string;
    product: string;
    count: number;
}
// view order table cell
export const VOTCell = ({ product }: {product:VOTCProductIF}) => {
  console.log({ product });
  const { data } = useQuery({
    queryKey: [product._id],
    queryFn: async () => await generalGet(`${URL_PRODUCT}/${product.product}`),
  });
  const productData = data?.data?.product;
  const total = productData?.price * product?.count;
  return (
    <>
      <TableCell component="th" scope="row">
        <HoverReveal> {productData?.name} </HoverReveal>
      </TableCell>
      <TableCell align="right">{product?.count}</TableCell>
      <TableCell align="right">{fCurrency(productData?.price)}</TableCell>
      <TableCell align="right">{fCurrency(total)}</TableCell>
      <TableCell align="right">{fCurrency(total)}</TableCell>
    </>
  );
};
