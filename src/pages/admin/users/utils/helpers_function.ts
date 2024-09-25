import { ChangeEvent, SetStateAction } from "react";




export const handleChangeRowsPerPage = (
  event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  setRowsPerPage: { (value: SetStateAction<number>): void },
  setPage: { (value: SetStateAction<number>): void }
) => {
  setRowsPerPage(parseInt(event.target.value, 10));
  setPage(0);
};
