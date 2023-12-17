import React, { useEffect, useState } from "react";
import TextButton from "/src/components/buttons/text_button_underline_primary_s";
import ButtonL from "/src/components/buttons/button_outline_l";
import ButtonErrorL from "/src/components/buttons/button_error_l";
import Button from "/src/components/buttons/button_primary_l";
import Link from "next/link";
import Label from "/src/components/label/label";
import Editor from "/src/components/editorBox/index";
import { useRouter } from "next/router";
import { deleteMember, getMemberDetail } from "../../asset/apis/memberApis";

const Component = () => {
  const [memberState, setMemberState] = useState({});
  const router = useRouter();
  const { id } = router.query;

  const getValue = async () => {
    await getMemberDetail({ siteMbrNo: id })
      .then((e) => {
        setMemberState({ ...e.data.data });
        console.log(e);
      })
      .catch((e) => console.log(e));
  };

  const isDelete = () => {
    if (!window.confirm("유저를 삭제하시겠습니까?")) return;
    else deleteUser();
  };

  const deleteUser = async () => {
    await deleteMember({ siteMbrNo: id })
      .then((e) => {
        router.push("/member");
        console.log(e);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    if (id) getValue();
  }, [id]);

  return (
    <div className="container">
      <div className="page-wrap">
        <div className="member- member-detail">
          <h1 className="display-5-B title">{memberState.mbrNm}</h1>

          <p className="table-caption body-2-B">기본 정보</p>
          <table className="table-horizontal-container radius-20 body-3-R">
            <tbody>
              <tr>
                <th className="thead ">이름</th>
                <td className="tbody">{memberState.mbrNm}</td>
              </tr>
              <tr>
                <th className="thead ">이메일</th>
                <td className="tbody">{memberState.emailAddr}</td>
              </tr>
              <tr>
                <th className="thead ">가입일</th>
                <td className="tbody">{memberState.emailAddr}</td>
              </tr>
              <tr>
                <th className="thead ">휴대폰 번호</th>
                <td className="tbody">{memberState.hpNo}</td>
              </tr>
              <tr>
                <th className="thead ">최근 접속일</th>
                <td className="tbody">{memberState.emailAddr}</td>
              </tr>
            </tbody>
          </table>

          <p className="table-caption body-2-B">마케팅 수신 정보</p>
          <table className="table-horizontal-container radius-20 body-3-R">
            <tbody>
              <tr>
                <th className="thead ">이메일/SMS</th>
                <td className="tbody">
                  <span
                    className={
                      memberState.smsEmailRcvAgrmYn === "Y"
                        ? "txt-violet-1"
                        : "txt-red"
                    }
                  >
                    {memberState.smsEmailRcvAgrmYn === "Y" ? "동의" : "비동의"}
                  </span>
                </td>
              </tr>
              <tr>
                <th className="thead ">뉴스레터 발송</th>
                <td className="tbody">
                  <span
                    className={
                      memberState.nwlRcvAgrmYn === "Y"
                        ? "txt-violet-1"
                        : "txt-red"
                    }
                  >
                    {memberState.nwlRcvAgrmYn === "Y" ? "동의" : "비동의"}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>

          <p className="table-caption body-2-B">부가 정보</p>
          <table className="table-horizontal-container radius-20 body-3-R">
            <tbody>
              {memberState.addr && (
                <tr>
                  <th className="thead ">주소</th>
                  <td className="tbody">{memberState.addr}</td>
                </tr>
              )}
              {memberState.brdt && (
                <tr>
                  <th className="thead ">생년월일</th>
                  <td className="tbody">{memberState.brdt}</td>
                </tr>
              )}
              {memberState.sexCd && (
                <tr>
                  <th className="thead ">성별</th>
                  <td className="tbody">
                    {memberState.sexCd === "B" ? "남" : "여"}
                  </td>
                </tr>
              )}
              {memberState.cmpyNm && (
                <tr>
                  <th className="thead ">회사명</th>
                  <td className="tbody">{memberState.cmpyNm}</td>
                </tr>
              )}
              {memberState.bizSprNm && (
                <tr>
                  <th className="thead ">사업 분야</th>
                  <td className="tbody">{memberState.bizSprNm}</td>
                </tr>
              )}
              {memberState.fdtYy && (
                <tr>
                  <th className="thead ">창업 연도</th>
                  <td className="tbody">{memberState.fdtYy}</td>
                </tr>
              )}
              {memberState.cmpyAddr && (
                <tr>
                  <th className="thead ">회사 주소</th>
                  <td className="tbody">{memberState.cmpyAddr}</td>
                </tr>
              )}
              {memberState.cmpyPhcNo && (
                <tr>
                  <th className="thead ">회사 전화번호</th>
                  <td className="tbody">{memberState.cmpyPhcNo}</td>
                </tr>
              )}
              {memberState.cmpyWebAddr && (
                <tr>
                  <th className="thead ">회사 URL</th>
                  <td className="tbody">
                    <TextButton text={memberState.cmpyWebAddr} />
                  </td>
                </tr>
              )}
              {memberState.cncnTcqSprVal && (
                <tr>
                  <th className="thead ">관심 기술 분야</th>
                  <td className="tbody">{memberState.cncnTcqSprVal}</td>
                </tr>
              )}
            </tbody>
          </table>

          <div className="btn-wrap flex_">
            <div className="flex_">
              <Link href="/transaction">
                <ButtonL text="목록으로" />
              </Link>
            </div>
            <div className="flex_">
              <Link href="#">
                <ButtonErrorL text="삭제" onclick={isDelete} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Component;
