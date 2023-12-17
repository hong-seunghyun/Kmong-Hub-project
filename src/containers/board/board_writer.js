import React, { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "/src/components/label/badge";
import Input from "/src/components/textFields/textInput.tsx";
import ButtonL from "/src/components/buttons/button_outline_l";
import Button from "/src/components/buttons/button_primary_l";
import CheckBox from "/src/components/radio/checkbox";
import Editor from "/src/components/editorBox/index";
import { setDetailBoardInfo } from "../../asset/apis/boardApis";
import { useRecoilValue } from "recoil";
import { BoardInfoAtom } from "../../store/board/info/atom";
import { useRouter } from "next/router";
const Component = () => {
  const boardInfo = useRecoilValue(BoardInfoAtom);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("<p></p>");
  const [isNotice, setIsNotice] = useState("N");
  const router = useRouter();

  const setValue = async () => {
    await setDetailBoardInfo({
      boardName: title,
      boardContent: content,
      boradIdx: boardInfo.bbsNo,
      isDel: "N",
      isNotice,
    })
      .then((e) => {
        console.log(e);
        router.push("/board/board_list");
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    if (boardInfo.bbsNo === "") router.push("/board");
  });

  return (
    <div className="page-wrap">
      <div className="board- board-add board-writer">
        <div className="head-wrap flex_">
          <h1 className="display-5-B">게시물 등록/수정</h1>
        </div>

        <div className="sub-title body-2-B flex_">
          <Badge value="1" />
          기본 정보
        </div>
        <CheckBox
          label="공지글로 설정"
          id="note_"
          size="small"
          checked={isNotice === "Y"}
          onclick={() =>
            isNotice === "Y" ? setIsNotice("N") : setIsNotice("Y")
          }
        />
        <div className="m-24" />
        <Input
          labelText="제목"
          placeholder="게시물 이름을 입력해 주세요."
          helperTextResult="none"
          iconState="false"
          state={title}
          setState={setTitle}
        />
        <div className="m-24" />
        <Editor setState={setContent} />
        <div className="btn-wrap flex_">
          <div className="flex_">
            <Link href="#">
              <ButtonL text="초기화" />
            </Link>
            <Link href="/board/board_list">
              <Button
                text="등록"
                onclick={() => {
                  if (title === "") {
                    alert("제목을 입력해주세요.");
                    return;
                  } else setValue();
                }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
