// @ts-check
import React from "react";
import Link from "next/link";
import ContentsStatusLabel from "/src/components/label/contents_save_status_label"
import TextButtonUnderlinePrimaryS from "/src/components/buttons/text_button_underline_primary_s";
import { CONTENTS_SAVE_STATUS } from "/src/asset/apis/contents/common/codes";

/**
 * @typedef ResearcherCellProps 
 * @property {number} id
 * @property {keyof typeof CONTENTS_SAVE_STATUS} saveStatus
 * @property {string} img
 * @property {string} name 
 * @property {string} belong 소속
 * @property {string} major 부서/학과
 * @property {string} position 직책
 */

/**
 * 연구자 리스트 테이블 셀
 * @param {ResearcherCellProps} props
 * @returns {JSX.Element}
 */
const Component = ({
  id,
  saveStatus,
  img,
  name,
  belong,
  major,
  position
}) => {
  return (
    <div className="table-cell-container flex_ radius-8 body-3-R txt-third ">
      <div className={`choice-cell number`}>
        <input type="checkbox" />
        <span>{id}</span>
      </div>
      <div className="category-cell">
        <ContentsStatusLabel saveStatus={saveStatus} />
        <img src={img} />
      </div>
      <div className="title-cell">
        {name}
      </div>
      <div className="belong-cell">
        {belong}
      </div>
      <div className="writer-cell">
        {major}
      </div>
      <div className="position-cell">
        {position}
      </div>
      <div className="etc-cell">
        <Link style={{ width: 'auto' }} href={`/researcher/detail?no=${id}`}>
          <TextButtonUnderlinePrimaryS text="조회" />
        </Link>
      </div>
    </div>
  )
}
export default Component
