import { useMemo, useState } from "react";

export type DropDownItem<T = number> = {
  id?: T;
  label: string;
}

export type DropDownHook<T = number> = {
  isOpened: boolean;
  toggleDropDown: () => void;
  index?: number;
  currentItem?: DropDownItem<T>;
  setIndex: (idx: number) => void;
}

const useDropDown = <T>(items: DropDownItem<T>[]): DropDownHook<T> => {

  const [isOpened, setIsOpened] = useState(false);
  const [index, setIndex] = useState<number>()

  const setIndexWithValidation = (idx: number) => {
    if (idx === undefined || idx < 0 || idx >= items.length) return;
    setIndex(idx);
  }

  const toggleDropDown = () => setIsOpened(!isOpened)
  const currentItem = useMemo(() => index !== undefined ? items[index] : undefined, [items, index])

  const value = {
    isOpened,
    toggleDropDown,
    index,
    currentItem,
    setIndex: setIndexWithValidation,
  }

  return value
}

export default useDropDown;
