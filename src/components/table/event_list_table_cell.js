// @ts-check
import React from "react";
import Link from "next/link";
import Label from "/src/components/label/label"
import TextButtonUnderlinePrimaryS from "/src/components/buttons/text_button_underline_primary_s";
import TextButtonUnderlineS from "/src/components/buttons/text_button_underline_s";
import { CONTENTS_SAVE_STATUS } from "/src/asset/apis/contents/common/codes";
import ContentsStatusLabel from "../label/contents_save_status_label";

/** 
 * @param {string} dateString 
 * @returns {boolean}
 * */
const isValidDate = (dateString) => {
  const date = new Date(dateString)
  return !isNaN(date.getTime())
}

/** 
 * @param {string} dateString 
 * @returns {string}
 * */
const convertDateStr = (dateString) => {
  if (!isValidDate(dateString)) return dateString
  const date = new Date(dateString)
  return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`
}

/**
 * @typedef EventCellProps
 * @type {Object}
 * @property {boolean} pin
 * @property {number} id
 * @property {keyof typeof CONTENTS_SAVE_STATUS} [saveStatus]
 * @property {string} [img]
 * @property {string} title
 * @property {string} writer
 * @property {string} date
 */

/**
 * 행사 검색 결과 테이블 셀 컴포넌트
 * @param {EventCellProps} props
 * @returns {JSX.Element}
 */
const TableCell = ({
  pin, 
  id,
  saveStatus,
  img,
  title,
  writer,
  date
}) => {
	return(
		<div className="table-cell-container flex_ radius-8 body-3-R txt-third ">
			<div className={`choice-cell number`}>
				<input type="checkbox" />
				<span>{id}</span>
			</div>
			<div className="category-cell">
        <ContentsStatusLabel saveStatus={saveStatus}/>
				<img src={img} />
			</div>
			<div className="title-cell">
        {title}
			</div>
			<div className="state-cell">
        {/**
        <Label backgroundColor={stateBg} fontColor={stateColor} text={state} icon="false" iconColor="none"/>
        */}
			</div>
			<div className="writer-cell">
				{writer}
			</div>
			<div className="date-cell">
				{convertDateStr(date)}
			</div>
			<div className="etc-cell">
				<Link style={{width:'auto'}} href={/** @todo */``}>
					<TextButtonUnderlineS text="신청 목록"/>
				</Link>
				<Link style={{width:'auto'}} href={/** @todo */``}>
					<TextButtonUnderlinePrimaryS text="조회"/>
				</Link>
			</div>
		</div>
	)
}
export default TableCell
