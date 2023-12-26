import React from "react";
import Link from "next/link";
import Label from "/src/components/label/label"
import TextButtonUnderlinePrimaryS from "/src/components/buttons/text_button_underline_primary_s";
import Icon from "/src/components/icon/icon";
import { CONTENTS_SAVE_STATUS } from "/src/asset/apis/contents/common/codes";
import ContentsStatusLabel from "../label/contents_save_status_label";
import { convertDateToStr } from "/src/util/dateUtil";

type Props = {
  pin: boolean
  id: number
  img?: string
  title: string
  writer: string
  date: string
  link: string
  saveStatus?: keyof typeof CONTENTS_SAVE_STATUS
}

/** @todo 일정 계산해서 모집 상태 추가 */
const EventTableCell = ({
  pin,
  id,
  img,
  title,
  writer,
  date,
  link,
  saveStatus
}: Props) => {
  // 모집 완료: bg-gray-6, txt-third
  // 모집중: bg-violet-1, txt-white
  return (
    <div className="table-cell-container flex_ radius-8 body-3-R txt-third ">
      <div className="pin-cell">
        <div className={` ${pin}`}>
          <Icon icon="pin" size={24} color="#B3B6B8" stroke="none" />
        </div>
      </div>
      <div className={`choice-cell number`}>
        <input type="checkbox" />
        <span>{id}</span>
      </div>
      <div className="category-cell">
        <ContentsStatusLabel saveStatus={saveStatus} />
        <img src={img} />
      </div>
      <div className="title-cell">
        {title}
      </div>
      <div className="state-cell">
        {/*<Label backgroundColor={stateBg} fontColor={stateColor} text={state} icon="false" iconColor="none" />*/}
      </div>
      <div className="writer-cell">
        {writer}
      </div>
      <div className="date-cell">
        {convertDateToStr(date)}
      </div>
      <div className="etc-cell">
        <Link href={`${link}`} style={{ width: 'auto' }}>
          <TextButtonUnderlinePrimaryS text="조회" />
        </Link>
      </div>
    </div>
  )
}
export default EventTableCell
