import React from "react";
import Icon from "/src/components/icon/icon";
import { CONTENTS_SAVE_STATUS } from "/src/asset/apis/contents/common/codes";

type Props = {
  saveStatus?: keyof typeof CONTENTS_SAVE_STATUS;
}

const StatusBgColorMap = {
  T: "bg-mint-1",
  AI: "bg-violet-1",
  AIE: "bg-violet-5",
  E: "bg-gray-6",
} as const

const StatusColorMap = {
  T: "txt-white",
  AI: "txt-white",
  AIE: "txt-violet",
  E: "txt-third",
} as const

/** 
 * 콘텐츠의 AI 생성 상태를 나타내는 라벨 컴포넌트
 */
const ContentsStatusLabel = ({ saveStatus }: Props) => {
  const backgroundColor = saveStatus ? StatusBgColorMap[saveStatus] : "bg-gray-6";
  const fontColor = saveStatus ? StatusColorMap[saveStatus] : "txt-disabled";
  const label = saveStatus ? CONTENTS_SAVE_STATUS[saveStatus] : "Untitled";

	return(
		<div className={`label-wrap flex_inline radius-8 label_ ${backgroundColor} ${fontColor} false`}>
			<Icon size={13} color="none" stroke="" icon="ai"/>
			<p className="caption-R">
				{label}
			</p>
		</div>
	)
};

export default ContentsStatusLabel;
