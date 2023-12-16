import React, { useEffect, useState } from "react";
import DropDownMenu from "/src/components/dropsMenu/drops_company_management_menu";
import SearchBar from "/src/components/searchBar/search_bar_company_management_menu";
import TableHead from "/src/components/table/inquiry_technology_table_head";
import TableCell from "/src/components/table/inquiry_technology_table_cell";
import Pagnation from "/src/components/pagnation/pagnation";
import { getSupportList } from "../../asset/apis/inquiry/supportApis";

const Component = () => {
  const [supportList, setSupportList] = useState([]);
  const [pageIdx, setPageIdx] = useState(1);

  const getValue = async () => {
    await getSupportList({ currentIdx: pageIdx })
      .then((e) => setSupportList([...e.data.data]))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getValue();
  }, [pageIdx]);

  return (
    <div className="page-wrap">
      <div className="inquiry- ">
        <div className="transaction-01">
          <div className="head-wrap flex_">
            <h1 className="display-5-B">지원사업 문의 관리</h1>
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
              {supportList &&
                supportList.map((e, idx) => (
                  <TableCell
                    choice="number"
                    number={idx + 1}
                    img={e.thumAddr}
                    title={e.titleNm}
                    writer={e.wrterMbrNo}
                    date={e.createdDate}
                    labelBg={e.prcsYn === "Y" ? "bg-violet-1" : "bg-white"}
                    labelColor={e.prcsYn === "Y" ? "txt-white" : "txt-violet-1"}
                    label={e.prcsYn === "Y" ? "답변 완료" : "답변 전"}
                    link={
                      e.prcsYn === "Y"
                        ? `/inquiry/support_detail_complete/${e.iqryNo}`
                        : `/inquiry/support_detail/${e.iqryNo}`
                    }
                  />
                ))}
              <Pagnation
                size="regular"
                pageIdx={pageIdx}
                setPageIdx={setPageIdx}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
