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

export const BoardDetailInfoAtom = atom({
  key: "BoardInfoAtom",
  default: {
    cntn: "",
    mbrNm: "",
    mbrNo: "",
    modifiedDate: "",
    ntceYn: "",
    rpstNo: "",
    titleNm: "",
  },
});

export const BoardListInfoAtom = atom({
  key: "BoardListInfoAtom",
  default: [],
});
