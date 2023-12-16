import React, { useEffect, useState } from "react";
import Tabs from "/src/components/tabs/technical_document_detail_tab_1";
import ButtonL from "/src/components/buttons/button_outline_l";
import ButtonErrorL from "/src/components/buttons/button_error_l";
import Button from "/src/components/buttons/button_primary_l";
import Link from "next/link";
import Label from "/src/components/label/label";
import Editor from "/src/components/editorBox/index";
import TextBtn from "/src/components/buttons/text_button_underline_primary_m";
import Upload from "/src/components/upload/upload";
import TextArea from "/src/components/textFields/textArea.tsx";
import {
  getTechTransferDetail,
  setTechTransferAnswer,
} from "../../asset/apis/inquiry/techTransferApis";
import { useRouter } from "next/router";

const Component = () => {
  const [techState, setTechState] = useState({});
  const [rpyCntn, setRpyCntn] = useState("");
  const router = useRouter();
  const { id } = router.query;

  const getValue = async () => {
    if (id)
      await getTechTransferDetail({ iqryNo: id })
        .then((e) => {
          console.log(e);
          setTechState({ ...e.data.data });
        })
        .then((e) => console.log(e));
  };

  const setAnswer = async () => {
    await setTechTransferAnswer({ iqryNo: id, rpyCntn })
      .then((e) => {
        console.log(e);
        router.push("/inquiry/technology");
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getValue();
  }, [id]);

  return (
    <div className="container">
      <div className="page-wrap">
        <div className="contents- contents-technology inquiry- inquiry-detail">
          <h1 className="display-5-B title flex_">기술이전 문의 관리</h1>

          <p className="table-caption body-2-B">기본 정보</p>
          <table className="table-horizontal-container radius-20 body-3-R">
            <tbody>
              <tr>
                <th className="thead ">썸네일</th>
                <td className="tbody">
                  {/* <Upload state="done" type="preview" /> */}
                  <img
                    onClick={() =>
                      window.open(
                        `http://dev-kotech-hub-user-alb-1243581538.ap-northeast-2.elb.amazonaws.com:8080/contents/transfer/${id}`
                      )
                    }
                    src={techState.thumAddr}
                    style={{ width: "100%", borderRadius: "15px" }}
                  />

                  {/* <p className="caption-R helper-txt">
                    허용 사이즈: <span>800px x 800px</span>{" "}
                    <span className="bar">|</span> 파일 형식:{" "}
                    <span>JPG,PNG,JPEG</span>
                    <span className="bar">|</span> 최대 파일 크기:{" "}
                    <span>100mb</span>
                  </p> */}
                </td>
              </tr>
              <tr>
                <th className="thead">게시물 제목</th>
                <td className="tbody">{techState.catgNm}</td>
              </tr>
              <tr>
                <th className="thead">등록일</th>
                <td className="tbody">{techState.createdDate}</td>
              </tr>
            </tbody>
          </table>

          <p className="table-caption body-2-B">문의 내용</p>
          <table className="table-horizontal-container radius-20 body-3-R">
            <tbody>
              <tr>
                <th className="thead">제목</th>
                <td className="tbody">{techState.titleNm}</td>
              </tr>
              <tr>
                <th className="thead">내용</th>
                <td className="tbody">{techState.cntn}</td>
              </tr>
              <tr>
                <th className="thead">작성자</th>
                <td className="tbody">{techState.mbrNm}</td>
              </tr>
              <tr>
                <th className="thead">상태</th>
                <td className="tbody">답변 전</td>
              </tr>
            </tbody>
          </table>

          <p className="table-caption body-2-B">답변내용</p>
          <TextArea
            labelText=""
            placeholder="답변 내용을 입력해 주세요."
            valueType=""
            state={rpyCntn}
            setState={setRpyCntn}
            helperTextResult="none"
          />

          <div className="btn-wrap flex_">
            <div className="flex_">
              <Link href="/inquiry/technology">
                <ButtonL text="목록으로" />
              </Link>
            </div>
            <div className="flex_">
              <Link href="/inquiry/technology_detail_2">
                <Button text="답변하기" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Component;
