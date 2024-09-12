import { useState } from "react";
import { Box } from "@mui/material";
import { URL_BACKEND_CATEGORIES_ICONS } from "../../../../../config";
import {
  AdminProductImageCustomBox,
  AdminProductImageImageBox,
} from "../../../../../theme";
import { CategoryIF } from "../../utils";
export const ACASIcon = ({ row }: { row: CategoryIF }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <AdminProductImageCustomBox
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <AdminProductImageImageBox>
          <img
            src={URL_BACKEND_CATEGORIES_ICONS + row.icon}
            width={200}
            height={200}
            alt={row.name}
          />
        </AdminProductImageImageBox>
      )}
      <Box
        sx={{
          overflow: "hidden",
          ImageBoxOverflow: "ellipsis",
          width: " 100px",
        }}
      >
        <img
          src={URL_BACKEND_CATEGORIES_ICONS + row.icon}
          width={30}
          height={30}
          alt={row.name}
        />
      </Box>
    </AdminProductImageCustomBox>
  );
};
