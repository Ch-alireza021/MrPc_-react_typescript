import { useState } from "react";
import { Box } from "@mui/material";
import { URL_BACKEND_THUMBNAILS } from "../../../../config";
import { productsDataIF } from "../utils";
import {
  AdminProductImageCustomBox,
  AdminProductImageImageBox,
} from "../../../../theme";
export const AdminProductImage = ({ row }: { row: productsDataIF }) => {
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
            src={URL_BACKEND_THUMBNAILS + row.thumbnail}
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
          src={URL_BACKEND_THUMBNAILS + row.thumbnail}
          width={30}
          height={30}
          alt={row.name}
        />
      </Box>
    </AdminProductImageCustomBox>
  );
};
