import Button from "@mui/material/Button";
import VisibilityIcon from "@mui/icons-material/Edit";
import { alpha } from "@mui/material";
import { productsDataIF, SelectHeader } from "../../utils";
import { useDispatch } from "react-redux";
import { setProductData } from "../../../../../features";

export const APEBtn = ({
  row,
  setSelectComp,
}: {
  row: productsDataIF;
  setSelectComp: (arg0: SelectHeader) => void;
}) => {
  const dispatch = useDispatch();


  const handleEditProduct = async () => {
    setSelectComp("addNew");
    dispatch(setProductData(row));
  };

  return (
    <Button
      variant="contained"
      color="success"
      sx={{
        bgcolor: (theme) => alpha(theme.palette.grey[500], 0.12),
        color: "text.secondary",
        "&:hover": {
          bgcolor: (theme) => alpha(theme.palette.primary.main, 0.16),
        },
      }}
      onClick={handleEditProduct}
      endIcon={<VisibilityIcon />}
    >
      ویرایش
    </Button>
  );
};
