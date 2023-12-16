import React, { useEffect, useState } from "react";
import ButtonM from "/src/components/buttons/button_primary_m";
import DropDownMenu from "/src/components/dropsMenu/drops_company_management_menu";
import SearchBar from "/src/components/searchBar/search_bar_company_management_menu";
import TableHead from "/src/components/table/inquiry_technology_table_head";
import TableCell from "/src/components/table/inquiry_technology_table_cell";
import Pagnation from "/src/components/pagnation/pagnation";
import Link from "next/link";
import { getTechTransferList } from "../../asset/apis/inquiry/techTransferApis";

const Component = () => {
  const [techList, setTechList] = useState([]);

  const getValue = async () => {
    await getTechTransferList({ currentIdx: 1 })
      .then((e) => setTechList([...e.data.data]))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getValue();
  }, []);

  return (
    <div className="page-wrap">
      <div className="inquiry- ">
        <div className="transaction-01">
          <div className="head-wrap flex_">
            <h1 className="display-5-B">기술이전 문의 관리</h1>
          </div>

          <div>
            <div className="flex_ search-wrap">
              <DropDownMenu />
              <SearchBar />
            </div>

            <div className="table-container">
              <TableHead
                headChoice="번호"
                headCategory="상태"
                headTitle="제목"
                headWriter="작성자"
                headDate="등록일"
                headEtc="관리"
              />
              {techList.map((e, idx) => (
                <TableCell
                  choice="number"
                  number={idx + 1}
                  img={e.thumAddr}
                  title={e.titleNm}
                  writer={e.wrterMbrNo}
                  date={e.createdDate}
                  labelBg={e.prcsYn === "N" ? "bg-white" : "bg-violet-1"}
                  labelColor={e.prcsYn === "N" ? "txt-violet-1" : "txt-white"}
                  label={e.prcsYn === "Y" ? "답변 완료" : "답변 전"}
                  link={
                    e.prcsYn === "Y"
                      ? `/inquiry/technology_detail_complete/${e.iqryNo}`
                      : `/inquiry/technology_detail/${e.iqryNo}`
                  }
                />
              ))}
              <Pagnation size="regular" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
