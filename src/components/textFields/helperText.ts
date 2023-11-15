export type helperTxt  = "helperA" | "helperB" | "helperC";

type Email = {
	value: string;
}
const helperTxtSet: Record<helperTxt, Email> = {
	helperA: {
		value:"띄어쓰기 없이 영/숫자 6-10자 입력하세요."
	},
	helperB: {
		value:"띄어쓰기 없이 영/숫자 6-10자 입력하세요 02."
	},
	helperC: {
		value:"띄어쓰기 없이 영/숫자 6-10자 입력하세요 03."
	}
}
export { helperTxtSet };