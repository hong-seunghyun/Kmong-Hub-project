// @ts-check
import React from "react";
import Link from "next/link";
import ContentsStatusLabel from "../label/contents_save_status_label";
import TextButtonUnderlinePrimaryS from "/src/components/buttons/text_button_underline_primary_s";
import Icon from "/src/components/icon/icon";
import { CONTENTS_SAVE_STATUS } from "/src/asset/apis/contents/common/codes";
import { convertDateToStr } from "src/util/dateUtil";

/**
 * @typedef TechTableCellProps
 * @type {Object}
 * @property {`${boolean}`} pin
 * @property {number} id
 * @property {keyof typeof CONTENTS_SAVE_STATUS} [saveStatus]
 * @property {string} [img]
 * @property {string} title
 * @property {string} writer
 * @property {string} date
 * @property {string} link
 */

/**
 * 컨텐츠 검색 결과 테이블 행 컴포넌트
 * @param {TechTableCellProps} props
 * @returns {JSX.Element}
 */
const ContentsTableCell = ({
  pin,
  id,
  saveStatus,
  img,
  title,
  writer,
  date, 
  link
}) => {
  return (
    <div className="table-cell-container flex_ radius-8 body-3-R txt-third ">
      <div className="pin-cell">
        <div className={`${pin}`}>
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

export default ContentsTableCell
