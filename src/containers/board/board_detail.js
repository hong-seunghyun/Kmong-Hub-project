import React, { useEffect, useState } from "react";
import ButtonL from "/src/components/buttons/button_outline_l";
import ButtonErrorL from "/src/components/buttons/button_error_l";
import Button from "/src/components/buttons/button_primary_l";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { BoardDetailInfoAtom } from "../../store/board/info/atom";
import { useRouter } from "next/router";

const Component = () => {
  const [boardDetailInfo, setBoardDetailInfo] =
    useRecoilState(BoardDetailInfoAtom);

  const router = useRouter();
  useEffect(() => {
    if (boardDetailInfo.rpstNo === "") router.push("/board");
  }, []);
  return (
    <div className="container">
      <div className="page-wrap">
        <div className="board- board-detail">
          <h1 className="display-5-B title">게시물 조회</h1>

          <p className="table-caption body-2-B">기본 정보</p>
          <table className="table-horizontal-container radius-20 body-3-R">
            <tbody>
              <tr>
                <th className="thead ">공지글 여부</th>
                <td className="tbody">
                  {boardDetailInfo.ntceYn === "Y" ? "O" : "X"}
                </td>
              </tr>
              <tr>
                <th className="thead ">제목</th>
                <td className="tbody">{boardDetailInfo.titleNm}</td>
              </tr>
              <tr>
                <th className="thead ">최종 수정일</th>
                <td className="tbody">{boardDetailInfo.modifiedDate}</td>
              </tr>
            </tbody>
          </table>
          <div className="m-24" />
          <p className="table-caption body-2-B">문의 내용</p>
          <table className="table-horizontal-container radius-20 body-3-R">
            <tbody>
              <tr>
                <th className="thead ">내용</th>
                <td className="tbody">{boardDetailInfo.cntn}</td>
              </tr>
              <tr>
                <th className="thead ">작성자</th>
                <td className="tbody">{boardDetailInfo.mbrNm}</td>
              </tr>
            </tbody>
          </table>

          <div className="btn-wrap flex_">
            <div className="flex_">
              <Link href="/board/board_list">
                <ButtonL text="목록으로" />
              </Link>
            </div>
            <div className="flex_">
              <Link href="#">
                <ButtonErrorL text="삭제" />
              </Link>
              <Link href="/board/board_detail_retouch">
                <Button text="수정" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Component;
