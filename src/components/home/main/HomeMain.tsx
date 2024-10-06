import { Box } from "@mui/material";
import { MNProducts } from "./newest";
import { useQuery } from "@tanstack/react-query";
import { URL_CATEGORY } from "../../../config";
import { dpi, generalGet } from "../../../services";
import { ShowCategories } from "./categories";

export const HomeMain = () => {
  const { data: showCatData } = useQuery({
    // SHCData ==> show category data
    queryKey: ["SHCData"],
    queryFn: async () => {
      const res = await dpi.get("HPSConfigDB");
      const items = res.data?.[0]?.selected;
      const promises = items.map((item: string[]) =>
        generalGet(URL_CATEGORY + "/" + item).then((res) => res.data?.category)
      );
      const results = await Promise.all(promises);
      return results;
    },
  });
  return (
    <Box>
      <MNProducts />
      {showCatData?.map((i: { _id: string; name: string }) => (
        <ShowCategories id={i._id} name={i.name} key={i._id} />
      ))}
    </Box>
  );
};
