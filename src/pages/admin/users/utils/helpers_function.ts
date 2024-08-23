import { ChangeEvent, SetStateAction } from "react";

export const handleSelectAllClick = (
  event: React.ChangeEvent<HTMLInputElement>,
  rows: { _id: string }[],
  setSelected: {
    (value: SetStateAction<readonly string[]>): void;
    (arg0: never[]): void;
  }
) => {
  if (event.target.checked) {
    const newSelected = rows.map((n: { _id: string }) => n._id);
    setSelected(newSelected);
    return;
  }
  setSelected([]);
};

export const handleClick = (
  _event: React.MouseEvent<unknown>,
  _id: string,
  selected: readonly string[],
  setSelected: {
    (value: SetStateAction<readonly string[]>): void;
    (arg0: readonly string[]): void;
  }
) => {
  const selectedIndex = selected?.indexOf(_id);
  let newSelected: readonly string[] = [];

  if (selectedIndex === -1) {
    newSelected = newSelected.concat(selected, _id);
  } else if (selectedIndex === 0) {
    newSelected = newSelected.concat(selected.slice(1));
  } else if (selectedIndex === selected.length - 1) {
    newSelected = newSelected.concat(selected.slice(0, -1));
  } else if (selectedIndex > 0) {
    newSelected = newSelected.concat(
      selected.slice(0, selectedIndex),
      selected.slice(selectedIndex + 1)
    );
  }
  setSelected(newSelected);
};

export const handleChangeRowsPerPage = (
  event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  setRowsPerPage: { (value: SetStateAction<number>): void },
  setPage: { (value: SetStateAction<number>): void }
) => {
  setRowsPerPage(parseInt(event.target.value, 10));
  setPage(0);
};
