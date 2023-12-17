import React, { useEffect, useState } from "react";
import ButtonL from "/src/components/buttons/button_outline_l";
import ButtonErrorL from "/src/components/buttons/button_error_l";
import Button from "/src/components/buttons/button_primary_l";
import Link from "next/link";
import { deleteManager, getManagerDetail } from "../../asset/apis/memberApis";
import { useRouter } from "next/router";

const Component = () => {
  const [managerState, setManagerState] = useState({});
  const router = useRouter();
  const { id } = router.query;

  const getValue = async () => {
    await getManagerDetail({ siteMbrNo: id })
      .then((e) => {
        setManagerState({ ...e.data.data });
        console.log(e);
      })
      .catch((e) => console.log(e));
  };

  const setAuthority = ({ cdVal }) => {
    switch (cdVal) {
      case "SS":
        return "사이트 설정";
      case "BM":
        return "게시판 관리";
      case "CM":
        return "콘텐츠 관리";
      case "UM":
        return "회원 관리";
      case "TM":
        return "기술문서 관리";
      case "MM":
        return "마케팅 관리";
      case "RM":
        return "연구자 관리";
      case "ST":
        return "통계";
      case "DM":
        return "디자인 관리";
      default:
        return "";
    }
  };

  const isDelete = () => {
    if (!window.confirm("유저를 삭제하시겠습니까?")) return;
    else deleteUser();
  };

  const deleteUser = async () => {
    await deleteManager({ siteMbrNo: id })
      .then((e) => {
        router.push("/member/operator_list");
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
          <h1 className="display-5-B title">운영자 상세</h1>
          <p className="table-caption body-2-B">기본 정보</p>
          {managerState.siteMemBasicInfo && (
            <>
              <table className="table-horizontal-container radius-20 body-3-R">
                <tbody>
                  <tr>
                    <th className="thead ">이름</th>
                    <td className="tbody">
                      {managerState.siteMemBasicInfo.mbrNm}
                    </td>
                  </tr>
                  <tr>
                    <th className="thead ">이메일</th>
                    <td className="tbody">
                      {managerState.siteMemBasicInfo.emailAddr}
                    </td>
                  </tr>
                  <tr>
                    <th className="thead ">소속</th>
                    <td className="tbody">
                      {managerState.siteMemBasicInfo.ucmdNm}
                    </td>
                  </tr>
                  <tr>
                    <th className="thead ">휴대폰 번호</th>
                    <td className="tbody">
                      {managerState.siteMemBasicInfo.hpNo}
                    </td>
                  </tr>
                </tbody>
              </table>

              <p className="table-caption body-2-B">권한 설정</p>
              <table className="table-horizontal-container radius-20 body-3-R">
                <tbody>
                  <tr>
                    <th className="thead ">권한 설정</th>
                    <td className="tbody">
                      {managerState.memMenuAuthInfo &&
                        managerState.memMenuAuthInfo.map((e, idx) => {
                          const isLast =
                            idx !== managerState.memMenuAuthInfo.length - 1;
                          return (
                            <p
                              style={{
                                display: "inline-block",
                                marginRight: `${isLast ? "7px" : "0px"}`,
                              }}
                            >
                              {setAuthority({ cdVal: e.menuAuthCd })}
                              {isLast && ","}
                            </p>
                          );
                        })}
                    </td>
                  </tr>
                </tbody>
              </table>

              <p className="table-caption body-2-B">콘텐츠 작성자 표시</p>
              <table className="table-horizontal-container radius-20 body-3-R">
                <tbody>
                  <tr>
                    <th className="thead ">프로필 이름</th>
                    <td className="tbody">
                      {managerState.siteMemBasicInfo.nnmNm}
                    </td>
                  </tr>
                  <tr>
                    <th className="thead ">프로필 이미지</th>
                    <td className="tbody">
                      {managerState.siteMemBasicInfo.pflImgPath ? (
                        <img
                          src={managerState.siteMemBasicInfo.pflImgPath}
                          style={{ width: "15%", borderRadius: "10px" }}
                        />
                      ) : (
                        <p>프로필 이미지가 없습니다.</p>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <th className="thead ">소속</th>
                    <td className="tbody">
                      {managerState.siteMemBasicInfo.ucmdNm}
                    </td>
                  </tr>
                </tbody>
              </table>
            </>
          )}

          <div className="btn-wrap flex_">
            <div className="flex_">
              <Link href="/transaction">
                <ButtonL text="목록으로" />
              </Link>
            </div>
            <div className="flex_">
              <Link href="#">
                <ButtonErrorL text="삭제 요청" onclick={isDelete} />
              </Link>
              <Link href={`/member/operator_detail/retouch/${id}`}>
                <Button text="수정 요청" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Component;
