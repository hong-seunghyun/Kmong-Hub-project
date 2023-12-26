import React from "react";
import Link from "next/link"
import TableHead from "/src/components/table/support_table_head";
import TableCell from "/src/components/table/support_list_table_cell";
import Pagnation from "/src/components/pagnation/pagnation";
import ButtonM from "/src/components/buttons/button_primary_m";
import PrimaryBtn from "/src/components/buttons/button_primary_l"
import OutlineBtn from "/src/components/buttons/button_outline_l"
import DropDownMenu from "/src/components/dropsMenu/drops_company_management_menu";
import SearchBar from "/src/components/searchBar/search_bar_company_management_menu";

const Component = () => {

  const TabContents = () => {
    return (
      <div className="sub-page-0">
        <div className="flex_ search-wrap">
          <span className="flex_">
            <DropDownMenu datas={[]} />
            <DropDownMenu datas={[]} />
          </span>
          <SearchBar data={[]} />
        </div>
        <div className="table-container">
          <TableHead
            headChoice="선택"
            headCategory="상태"
            headTitle="제목"
            headState="심사 상태"
            headWriter="작성자"
            headDate="공고기간"
            headEtc="관리"
          />
          <TableCell
            choice="number"
            number="1"
            labelBg="bg-mint-1"
            label="임시저장"
            labelColor="txt-white"
            title="지원사업명"
            state="대&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;기"
            stateBg="bg-violet-5"
            stateColor="txt-violet-1"
            writer="작성자"
            date="YYYY.MM.DD ~ YYYY.MM.DD"
            link="/support/detail"
            listLink="/support/list_detail"
            img="/images/sample-img.png"
          />
          <TableCell
            choice="number"
            number="1"
            labelBg="bg-violet-5"
            label="생성완료"
            labelColor="txt-violet-1"
            title="지원사업명"
            state="대&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;기"
            stateBg="bg-violet-5"
            stateColor="txt-violet-1"
            writer="작성자"
            date="YYYY.MM.DD ~ YYYY.MM.DD"
            link="/support/detail"
            listLink="/support/list_detail"
            img="/images/sample-img.png"
          />
          <TableCell
            choice="number"
            number="1"
            labelBg="bg-violet-1"
            label="AI 생성중"
            labelColor="txt-white"
            title="지원사업명"
            state=""
            stateBg="none"
            stateColor="none"
            writer="작성자"
            date="YYYY.MM.DD ~ YYYY.MM.DD"
            link="/support/detail"
            listLink="/support/list_detail"
            img="/images/sample-img.png"
          />
          <TableCell
            choice="number"
            number="1"
            labelBg="bg-violet-5"
            label="생성완료"
            labelColor="txt-violet-1"
            title="지원사업명"
            state="심사 중"
            stateBg="bg-violet-1"
            stateColor="txt-white"
            writer="작성자"
            date="YYYY.MM.DD ~ YYYY.MM.DD"
            link="/support/detail"
            listLink="/support/list_detail"
            img="/images/sample-img.png"
          />
          <TableCell
            choice="number"
            number="1"
            labelBg="bg-violet-1"
            label="AI 생성중"
            labelColor="txt-white"
            title="지원사업명"
            state=""
            stateBg="none"
            stateColor="none"
            writer="작성자"
            date="YYYY.MM.DD ~ YYYY.MM.DD"
            link="/support/detail"
            listLink="/support/list_detail"
            img="/images/sample-img.png"
          />
          <TableCell
            choice="number"
            number="1"
            labelBg="bg-gray"
            label="등록완료"
            labelColor="txt-third"
            title="지원사업명"
            state="보&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;류"
            stateBg="bg-purple-1"
            stateColor="txt-white"
            writer="작성자"
            date="YYYY.MM.DD ~ YYYY.MM.DD"
            link="/support/detail"
            listLink="/support/list_detail"
            img="/images/sample-img.png"
          />
          <TableCell
            choice="number"
            number="1"
            labelBg="bg-gray"
            label="등록완료"
            labelColor="txt-third"
            title="지원사업명"
            state="탈&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;락"
            stateBg="bg-wrong-red-hover"
            stateColor="txt-white"
            writer="작성자"
            date="YYYY.MM.DD ~ YYYY.MM.DD"
            link="/support/detail"
            listLink="/support/list_detail"
            img="/images/sample-img.png"
          />
          <TableCell
            choice="number"
            number="1"
            labelBg="bg-gray"
            label="등록완료"
            labelColor="txt-third"
            title="지원사업명"
            state="선&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;정"
            stateBg="bg-mint-1"
            stateColor="txt-white"
            writer="작성자"
            date="YYYY.MM.DD ~ YYYY.MM.DD"
            link="/support/detail"
            listLink="/support/list_detail"
            img="/images/sample-img.png"
          />
          <TableCell
            choice="number"
            number="1"
            labelBg="bg-gray"
            label="등록완료"
            labelColor="txt-third"
            title="지원사업명"
            state=""
            stateBg="none"
            stateColor="none"
            writer="작성자"
            date="YYYY.MM.DD ~ YYYY.MM.DD"
            link="/support/detail"
            listLink="/support/list_detail"
            img="/images/sample-img.png"
          />
          <TableCell
            choice="number"
            number="1"
            labelBg="bg-gray"
            label="등록완료"
            labelColor="txt-third"
            title="지원사업명"
            state="취&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;소"
            stateBg="bg-gray"
            stateColor="txt-third"
            writer="작성자"
            date="YYYY.MM.DD ~ YYYY.MM.DD"
            link="/support/detail"
            listLink="/support/list_detail"
            img="/images/sample-img.png"
          />
          <Pagnation size="regular" />
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="page-wrap">
        <div className="marketing-contents  news-writer-c contents- contents-technology contents- contents-event">
          <div className="head-wrap flex_">
            <h1 className="display-5-B">
              지원사업 관리
            </h1>
            <Link href="/support/add_1">
              <ButtonM text="지원사업등록" />
            </Link>
          </div>
          <TabContents />
        </div>
      </div>
    </div>
  )
}
export default Component;
