import { Box, Button, alpha } from "@mui/material";
import { FC } from "react";
import { OrderDataBtn, SelectedCompIF } from "../utils";

export const OrderBtn: FC<SelectedCompIF> = ({ selected, setSelected }) => {
  const orders: OrderDataBtn[] = [
    { text: "سفارشات برسی نشده", key: "unchecked" },
    { text: "سفارشات برسی شده", key: "checked" },
  ];

  return (
    <Box sx={{display:'flex',gap:2}}>
      {orders.map((order) => (
        <Button
          key={order.key ? "checked" : "unchecked"}
          variant="contained"
          color="success"
          sx={{
            bgcolor:
              order.key === selected
                ? (theme) => alpha(theme.palette.primary.main, 0.16)
                : (theme) => alpha(theme.palette.grey[500], 0.12),
            color: "text.secondary",
            "&:hover": {
              bgcolor: (theme) => alpha(theme.palette.primary.main, 0.3),
            },
            textWrap: "nowrap",
          }}
          onClick={() => setSelected(order.key)}
        >
          {order.text}
        </Button>
      ))}
    </Box>
  );
};
