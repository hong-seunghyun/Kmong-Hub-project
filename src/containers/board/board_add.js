import React, { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "/src/components/label/badge";
import Input from "/src/components/textFields/textInput.tsx";
import ButtonL from "/src/components/buttons/button_outline_l";
import Button from "/src/components/buttons/button_primary_l";
import { setBoardInfo } from "../../asset/apis/boardApis";
import { useRouter } from "next/router";

const Component = () => {
  const [title, setTitle] = useState("");
  const router = useRouter();

  const setBoard = async () => {
    await setBoardInfo({ boardName: title, isDel: "N", isUse: "Y" })
      .then((e) => {
        console.log(e);
        router.push("/board");
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="page-wrap">
      <div className="board- board-add">
        <div className="head-wrap flex_">
          <h1 className="display-5-B">게시판 등록/수정</h1>
        </div>

        <div className="sub-title body-2-B flex_">
          <Badge value="1" />
          기본 정보
        </div>
        <Input
          labelText="게시판 이름"
          placeholder="게시판 이름을 입력해주세요."
          helperTextResult="none"
          state={title}
          setState={setTitle}
          iconState="false"
        />

        <div className="btn-wrap flex_">
          <div className="flex_">
            <Link href="#">
              <ButtonL text="초기화" onclick={() => setTitle("")} />
            </Link>
            <Link href="/board">
              <Button text="등록" onclick={setBoard} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
