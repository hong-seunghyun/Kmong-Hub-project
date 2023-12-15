import React, { useEffect, useState } from "react";
import ButtonM from "/src/components/buttons/button_primary_m";
import DropDownMenu from "/src/components/dropsMenu/drops_company_management_menu";
import SearchBar from "/src/components/searchBar/search_bar_company_management_menu";
import TableHead from "/src/components/table/board_table_head";
import TableCell from "/src/components/table/board_table_cell";
import Pagnation from "/src/components/pagnation/pagnation";
import Link from "next/link";
import { getBoardList, setBoardInfo } from "../../asset/apis/boardApis";
import { useRecoilState } from "recoil";
import { BoardListAtom } from "../../store/board/list/atom";
import { BoardInfoAtom } from "../../store/board/info/atom";

const Component = () => {
  const [pageIdx, setPageIdx] = useState(1);
  const [boardList, setBoardList] = useRecoilState(BoardListAtom);
  const [boardAtom, setBoardAtom] = useRecoilState(BoardInfoAtom);

  const getValue = async () => {
    await getBoardList({ currentIndex: pageIdx })
      .then((e) => {
        let copyArr = e.data.data.filter((e) => e.delYn === "N");
        setBoardList([...copyArr]);
      })
      .catch((e) => console.log(e));
  };

  const deleteBoard = async ({ boardName, boradIdx, isUse }) => {
    await setBoardInfo({ boardName, boradIdx, isDel: "Y", isUse })
      .then((e) => {
        console.log(e);
        window.location.reload();
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getValue();
  }, [pageIdx]);

  return (
    <div className="page-wrap">
      <div className="board- ">
        <div className="head-wrap flex_">
          <h1 className="display-5-B">게시판 관리</h1>
          <Link href="/board/board_add">
            <ButtonM text="게시판 등록" />
          </Link>
        </div>

        <div>
          <div className="flex_ search-wrap">
            <DropDownMenu />
            <SearchBar />
          </div>

          <div className="table-container">
            <TableHead
              headChoice="번호"
              headTitle="제목"
              headWriter="글 총갯수"
              headCategory="사용 여부"
              headDate="사용 여부"
              headEtc="관리"
            />
            {boardList.map((e, idx) => (
              <TableCell
                key={idx}
                choice="number"
                number={idx + 1}
                title={e.bbsNm}
                writer={e.rpstCnt}
                labelBg="bg-violet-1"
                labelColor="txt-white"
                label={e.useYn === "Y" ? "사용 중" : "사용 헤제"}
                listLink="/board/board_retouch"
                link="#"
                boardLink="/board/board_list"
                onclick={() => {
                  console.log(e);
                  setBoardAtom({
                    bbsNm: e.bbsNm,
                    bbsNo: e.bbsNo,
                    useYn: e.useYn,
                    delYn: e.delYn,
                  });
                }}
                delete={() => {
                  deleteBoard({
                    boardName: e.bbsNm,
                    boradIdx: e.bbsNo,
                    isUse: e.useYn,
                  });
                }}
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
