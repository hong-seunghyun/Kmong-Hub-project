import React, { useEffect } from "react";
import ButtonM from "/src/components/buttons/button_primary_m";
import DropDownMenu from "/src/components/dropsMenu/drops_company_management_menu";
import SearchBar from "/src/components/searchBar/search_bar_company_management_menu";
import TableHead from "/src/components/table/board_list_table_head";
import TableCell from "/src/components/table/board_list_table_cell";
import Pagnation from "/src/components/pagnation/pagnation";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { BoardInfoAtom, BoardListInfoAtom } from "../../store/board/info/atom";
import { getDetailBoardList } from "../../asset/apis/boardApis";
import { useRouter } from "next/router";

const Component = () => {
  const [boadrInfo, setBoardInfo] = useRecoilState(BoardInfoAtom);
  const [boadrListInfo, setBoardListInfo] = useRecoilState(BoardListInfoAtom);
  const router = useRouter();

  const getValue = async () => {
    console.log(boadrInfo);
    if (boadrInfo.bbsNo !== "")
      await getDetailBoardList({ boradIdx: boadrInfo.bbsNo })
        .then((e) => console.log(e))
        .catch((e) => console.log(e));
    else router.push("/board");
  };

  useEffect(() => {
    getValue();
  }, []);

  return (
    <div className="page-wrap">
      <div className="board- board-list">
        <div className="head-wrap flex_">
          <h1 className="display-5-B">게시물 관리</h1>
          <Link href="/board/board_writer">
            <ButtonM text="게시물 등록" />
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
              headNote="공지여부"
              headView="조회수"
              headWriter="작성자"
              headDate="최종수정일"
              headEtc="관리"
            />
            {boadrListInfo.map((e, idx) => (
              <TableCell
                choice="number"
                number="1"
                title="[게시물 이름]"
                view="174"
                writer="[미나 마수드]"
                listLink="/board/board_detail"
                date="YYYY.MM.DD"
              />
            ))}
            <TableCell
              choice="number"
              number="1"
              title="[게시물 이름]"
              view="174"
              writer="[미나 마수드]"
              listLink="/board/board_detail"
              date="YYYY.MM.DD"
            />
            <Pagnation size="regular" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
