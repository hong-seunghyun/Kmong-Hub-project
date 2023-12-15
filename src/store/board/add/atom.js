import { atom } from "recoil";

export const BoardInfoAtom = atom({
  key: "BoardInfoAtom",
  default: {
    bbsNm: "",
    bbsNo: "",
    delYn: "",
    useYn: "",
  },
});
