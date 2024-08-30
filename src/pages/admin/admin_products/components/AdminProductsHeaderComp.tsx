import { Button, Stack, alpha } from "@mui/material";
import { SelectHeader } from "../utils";
import { APSearch } from "./search";
import { APSBtn } from "./search/APSBtn";
import { useState } from "react";
import { headerrows } from "../config";
import { useWindowSize } from "../../../../hooks";

export const AdminProductsHeaderComp = ({
  selectComp,
  setSelectComp,
}: {
  selectComp: SelectHeader;
  setSelectComp(arg0: SelectHeader): void;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const windowSize = useWindowSize();
  return (
    <Stack>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        sx={{
          gap: 2,
          paddingBottom: "1rem",
          height: "70px",
        }}
      >
        {headerrows.map((order) => (
          <Button
            key={order.key}
            variant="contained"
            color="success"
            sx={{
              height: "37px",
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
        {windowSize.width >= 1300 && <APSearch {...{ isOpen }} />}
        <APSBtn {...{ isOpen, setIsOpen }} />
      </Stack>
      {windowSize.width < 1300 && (
        <APSearch {...{ isOpen, paddingBottom: "1rem" }} />
      )}
    </Stack>
  );
};
