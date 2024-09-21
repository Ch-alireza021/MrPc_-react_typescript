import { URL_CATEGORY } from "../../../../config";
import { fDate } from "../../../../utils";
import { CASName } from "../../admin_products/components";
import { ACASEBtn } from "../components";
import { ACASIcon } from "../components/table/ACASIcon";
import { AECFormDataIF, CategoryDataIF, CategoryIF, SubategoryDataIF } from "../utils";

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
    render: (row: CategoryIF) => <ACASEBtn row={row} data={aECFormData} />,
  },
];
// --------------------------------------------
export const subcategoryData: SubategoryDataIF[] = [
  {
    key: "name",
    render: (row: { name: string }) => row?.name,
  },
  {
    key: "category",
    render: (row: { category: string }) => (
      <CASName {...{ URL: URL_CATEGORY, id: row?.category }} />
    ),
  },
  {
    key: "createdAt",
    render: (row: { createdAt: string }) => fDate(row?.createdAt),
  },
  {
    key: "edit",
    render: (row) => <ACASEBtn row={row} data={[]} />,
  },
];
// --------------------------------------------

export const aECFormData: AECFormDataIF[] = [
  {
    label: "نام",
    id: "name",
  },
];
