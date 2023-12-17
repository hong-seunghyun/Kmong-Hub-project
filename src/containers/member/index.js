import React, { useEffect, useState } from "react";
import ButtonM from "/src/components/buttons/button_primary_m";
import DropDownMenu from "/src/components/dropsMenu/drops_company_management_menu";
import SearchBar from "/src/components/searchBar/search_bar_company_management_menu";
import TableHead from "/src/components/table/member_list_table_head";
import TableCell from "/src/components/table/member_list_table_cell";
import Pagnation from "/src/components/pagnation/pagnation";
import Link from "next/link";
import { getMemberList } from "../../asset/apis/memberApis";

const Component = () => {
  const [memberList, setMemberList] = useState([]);
  const [pageIdx, setPageIdx] = useState(1);
  const [type, setType] = useState("");
  const [search, setSearch] = useState("");

  const getValue = async () => {
    await getMemberList({
      currentIdx: pageIdx,
      searchType: type,
      search,
    })
      .then((e) => {
        setMemberList([...e.data.data]);
        console.log(e);
      })
      .catch((e) => console.log(e));
  };

  const getSearchValue = async () => {
    setPageIdx(1);
    await getMemberList({
      currentIdx: 1,
      searchType: type,
      search,
    })
      .then((e) => {
        setMemberList([...e.data.data]);
        console.log(e);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getValue();
  }, [pageIdx]);

  return (
    <div className="page-wrap">
      <div className="member- ">
        <div className="head-wrap flex_">
          <h1 className="display-5-B">회원 관리</h1>
        </div>

        <div>
          <div className="flex_ search-wrap">
            <DropDownMenu />
            <SearchBar />
          </div>

          <div className="table-container">
            <TableHead
              headChoice="번호"
              headTitle="이름"
              headEmail="이메일"
              headDate="가입일"
              headAccess="최근 접속일"
              headEtc="관리"
            />
            {memberList &&
              memberList.map((e, idx) => (
                <TableCell
                  choice="number"
                  number={idx + 1}
                  title={e.mbrNm}
                  email={e.emailAddr}
                  date={e.createdDate}
                  access={e.lastAccssDate}
                  listLink={`/member/member_detail/${e.siteMbrNo}`}
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
  );
};

export default Component;
