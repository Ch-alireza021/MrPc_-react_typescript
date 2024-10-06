import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { dpi, generalGet } from "../../../../../services";
import { URL_CATEGORY } from "../../../../../config";
import { CategoryIF } from "../../../admin_cat&subcat";
import { sorting } from "./utils";
import { HPSCTable } from "./table";


export interface HPSConfigDataIF {
  tableData: CategoryIF[];
  firstData: CategoryIF[];
  selected: string[];
  firstSelected: string[];
  isEdit: boolean;
}
export const HPSConfigComp = () => {
  const [data, setData] = useState<HPSConfigDataIF>({
    firstSelected: [],
    firstData: [],
    selected: [],
    tableData: [],
    isEdit: false,
  });

  const { data: _HPSConfigDB } = useQuery({
    queryKey: ["HPSConfigDB"],
    queryFn: async () => {
      const res = await dpi.get("HPSConfigDB");
      const items = res.data?.[0]?.selected;
      const promises = items.map((item: string[]) =>
        generalGet(URL_CATEGORY + "/" + item).then((res) => res.data?.category)
      );
      const results = await Promise.all(promises);
      const id = results?.map((i) => i._id);
      const sortData = sorting({
        data: results,
        selected: data?.selected,
      });
      setData((pre) => ({
        ...pre,
        firstSelected: id,
        selected: id,
        tableData: sortData,
        firstData: sortData,
      }));
      return results;
    },
    enabled: !data?.firstSelected?.length,
  });

  const { data: _HPSCategories } = useQuery({
    queryKey: ["HPSCategories"],
    queryFn: async () => {
      const res = await generalGet(URL_CATEGORY);
      setData((pre) => ({
        ...pre,
        tableData: sorting({
          data: res?.data?.categories,
          selected: data?.selected,
        }),
      }));
      return res?.data?.categories;
    },
    enabled: data.isEdit,
  });


  return (
    <>
      <HPSCTable {...{ data, setData }} />
    </>
  );
};
