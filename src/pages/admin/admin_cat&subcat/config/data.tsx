import { fDate } from "../../../../utils";
import { ACASEBtn } from "../components";
import { ACASIcon } from "../components/table/ACASIcon";
import { CategoryDataIF, CategoryIF } from "../utils";

export const categoryData: CategoryDataIF[] = [
  {
    key: "icon",
    render: (row: CategoryIF) => <ACASIcon row={row} />,
  },
 
  {
    key: "name",
    render: (row: { name: string }) => row?.name,
  },
  {
    key: "createdAt",
    render: (row: { createdAt: string }) => fDate(row?.createdAt),
  },
  {
    key: "edit",
    render: () => <ACASEBtn />,
  },
];
// --------------------------------------------
