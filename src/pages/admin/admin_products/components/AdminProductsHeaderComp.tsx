import { Box, Button, alpha } from "@mui/material";
import { SelectHeader, ShowHeaderIF } from "../utils";

export const AdminProductsHeaderComp = ({
  selectComp,
  setSelectComp,
}: {
  selectComp: SelectHeader;
  setSelectComp(arg0: SelectHeader): void;
}) => {
  const orders: ShowHeaderIF[] = [
    { text: " جدول محصولات", key: "table" },
    { text: "  کارت محصولات", key: "cart" },
    { text: "اضافه کردن محصول جدید", key: "addNew" },
  ];

  return (
    <Box sx={{ display: "flex", gap: 2, paddingBottom: "1rem" }}>
      {orders.map((order) => (
        <Button
          key={order.key ? "checked" : "unchecked"}
          variant="contained"
          color="success"
          sx={{
            bgcolor:
              order.key === selectComp
                ? (theme) => alpha(theme.palette.primary.main, 0.16)
                : (theme) => alpha(theme.palette.grey[500], 0.12),
            color: "text.secondary",
            "&:hover": {
              bgcolor: (theme) => alpha(theme.palette.primary.main, 0.3),
            },
            textWrap: "nowrap",
          }}
          onClick={() => setSelectComp(order.key)}
        >
          {order.text}
        </Button>
      ))}
    </Box>
  );
};
