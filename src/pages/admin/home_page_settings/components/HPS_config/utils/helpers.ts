import { SetStateAction } from "react";
import { CategoryIF } from "../../../../admin_cat&subcat";
import { HPSConfigDataIF } from "../HPSConfigComp";

export const sorting = ({
  data,
  selected,
}: {
  data: CategoryIF[];
  selected: string[];
}) => {
  return data
    ?.sort((a: { name: string }, b: { name: string }) =>
      a?.name.localeCompare(b?.name, "fa")
    )
    ?.filter((i) => selected?.includes(i._id))
    .concat(data?.filter((i) => !selected?.includes(i._id)));
};

export const hPSHandleClick = ({
  id,
  setData,
  data,
}: {
  id: string;
  setData: (value: SetStateAction<HPSConfigDataIF>) => void;
  data: HPSConfigDataIF;
}) => {
  const isSelected = data?.selected?.includes(id);
  isSelected
    ? setData((pre) => ({
        ...pre,
        selected: [...pre?.selected?.filter((i) => i !== id)],
      }))
    : setData((pre) => ({
        ...pre,
        selected: [...pre.selected, id],
      }));
};
