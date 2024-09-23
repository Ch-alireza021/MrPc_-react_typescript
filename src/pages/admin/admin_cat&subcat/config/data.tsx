import { URL_CATEGORY } from "../../../../config";
import { fDate } from "../../../../utils";
import { CASName } from "../../admin_products/components";
import { ACASEBtn, DeleteBtn } from "../components";
import { ASEABtn } from "../components/add_edit_subcategory/ASEABtn";
import { ACASIcon } from "../components/table/ACASIcon";
import {
  AECFormDataIF,
  CategoryDataIF,
  CategoryIF,
  SubategoryDataIF,
} from "../utils";

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
  {
    key: "delete",
    render: (row) => <DeleteBtn row={row} type={"category"} />,
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
    render: (row) => <ASEABtn row={row} />,
  },
  {
    key: "delete",
    render: (row) => <DeleteBtn row={row} type={"subcategory"} />,
  },
];
// --------------------------------------------

export const aECFormData: AECFormDataIF[] = [
  {
    label: "نام",
    id: "name",
  },
];
