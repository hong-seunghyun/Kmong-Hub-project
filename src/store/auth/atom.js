import { atom } from "recoil";
import { v1 } from "uuid";

export const PhoneNumber = atom({
  key: `PhoneNumber/${v1()}`,
  default: "",
});