import React from "react";
import ButtonM from "/src/components/buttons/button_primary_m";
import DropDownMenu from "/src/components/dropsMenu/drops_company_management_menu";
import SearchBar from "/src/components/searchBar/search_bar_company_management_menu";
import TableHead from "/src/components/table/popup_table_head";
import TableCell from "/src/components/table/popup_table_cell";
import Pagnation from "/src/components/pagnation/pagnation";
import Link from "next/link";

const Component = () => {
  return (
    <div className="page-wrap">
      <div className="design- design-popup">
        <div className="head-wrap flex_">
          <h1 className="display-5-B">배너 관리</h1>
          <Link href="/design/banner_add">
            <ButtonM text="배너 생성" />
          </Link>
        </div>

        <div>
          <div className="flex_ search-wrap">
            <DropDownMenu />
            <SearchBar />
          </div>

          <div className="table-container">
            <TableHead
              headTitle="제목"
              headPc="PC 이미지"
              headMobile="모바일 이미지"
              headDate="기간"
              headCategory="상태"
              headEtc="관리"
            />
            <TableCell
              title="[배너 이름]"
              pc="/images/sample-img.png"
              mobile="/images/sample-img.png"
              dateFrom="YYYY.MM.DD"
              dateTo="YYYY.MM.DD"
              label="노출 안함"
              labelBg="bg-violet-5"
              labelColor="txt-violet-1"
              link="/design/banner_detail"
            />
            <TableCell
              title="[배너 이름]"
              pc="/images/sample-img.png"
              mobile="/images/sample-img.png"
              dateFrom="YYYY.MM.DD"
              dateTo="YYYY.MM.DD"
              label="노출 안함"
              labelBg="bg-violet-5"
              labelColor="txt-violet-1"
              link="/design/banner_detail"
            />
            <TableCell
              title="[배너 이름]"
              pc="/images/sample-img.png"
              mobile="/images/sample-img.png"
              dateFrom="YYYY.MM.DD"
              dateTo="YYYY.MM.DD"
              label="노출 중"
              labelBg="bg-violet-1"
              labelColor="txt-white"
              link="/design/banner_detail"
            />
            <TableCell
              title="[배너 이름]"
              pc="/images/sample-img.png"
              mobile="/images/sample-img.png"
              dateFrom="YYYY.MM.DD"
              dateTo="YYYY.MM.DD"
              label="노출 중"
              labelBg="bg-violet-1"
              labelColor="txt-white"
              link="/design/banner_detail"
            />
            <TableCell
              title="[배너 이름]"
              pc="/images/sample-img.png"
              mobile="/images/sample-img.png"
              dateFrom="YYYY.MM.DD"
              dateTo="YYYY.MM.DD"
              label="노출 안함"
              labelBg="bg-violet-5"
              labelColor="txt-violet-1"
              link="/design/banner_detail"
            />
            <TableCell
              title="[배너 이름]"
              pc="/images/sample-img.png"
              mobile="/images/sample-img.png"
              dateFrom="YYYY.MM.DD"
              dateTo="YYYY.MM.DD"
              label="노출 안함"
              labelBg="bg-violet-5"
              labelColor="txt-violet-1"
              link="/design/banner_detail"
            />
            <TableCell
              title="[배너 이름]"
              pc="/images/sample-img.png"
              mobile="/images/sample-img.png"
              dateFrom="YYYY.MM.DD"
              dateTo="YYYY.MM.DD"
              label="노출 중"
              labelBg="bg-violet-1"
              labelColor="txt-white"
              link="/design/banner_detail"
            />
            <TableCell
              title="[배너 이름]"
              pc="/images/sample-img.png"
              mobile="/images/sample-img.png"
              dateFrom="YYYY.MM.DD"
              dateTo="YYYY.MM.DD"
              label="노출 중"
              labelBg="bg-violet-1"
              labelColor="txt-white"
              link="/design/banner_detail"
            />
            <TableCell
              title="[배너 이름]"
              pc="/images/sample-img.png"
              mobile="/images/sample-img.png"
              dateFrom="YYYY.MM.DD"
              dateTo="YYYY.MM.DD"
              label="노출 안함"
              labelBg="bg-violet-5"
              labelColor="txt-violet-1"
              link="/design/banner_detail"
            />
            <TableCell
              title="[배너 이름]"
              pc="/images/sample-img.png"
              mobile="/images/sample-img.png"
              dateFrom="YYYY.MM.DD"
              dateTo="YYYY.MM.DD"
              label="노출 안함"
              labelBg="bg-violet-5"
              labelColor="txt-violet-1"
              link="/design/banner_detail"
            />
            <Pagnation size="regular" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
