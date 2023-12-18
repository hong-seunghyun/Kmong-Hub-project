import React, { useEffect, useState } from "react";
import ButtonL from "/src/components/buttons/button_outline_l";
import Link from "next/link";
import { useRouter } from "next/router";
import { getEventDetail } from "../../asset/apis/inquiry/eventApis";

const Component = () => {
  const [evnetState, setEventState] = useState({});
  const router = useRouter();
  const { id } = router.query;

  const getValue = async () => {
    if (id)
      await getEventDetail({ iqryNo: id })
        .then((e) => {
          console.log(e);
          setEventState({ ...e.data.data });
        })
        .then((e) => console.log(e));
  };

  useEffect(() => {
    getValue();
  }, [id]);
  return (
    <div className="container">
      <div className="page-wrap">
        <div className="contents- contents-technology inquiry- inquiry-detail">
          <h1 className="display-5-B title flex_">행사 문의 관리</h1>

          <p className="table-caption body-2-B">기본 정보</p>
          <table className="table-horizontal-container radius-20 body-3-R">
            <tbody>
              <tr>
                <th className="thead ">썸네일</th>
                <td className="tbody">
                  <img
                    onClick={() =>
                      window.open(
                        `http://dev-kotech-hub-user-alb-1243581538.ap-northeast-2.elb.amazonaws.com:8080/contents/transfer/${id}`
                      )
                    }
                    src={evnetState.thumAddr}
                    style={{ width: "100%", borderRadius: "15px" }}
                  />
                </td>
              </tr>
              <tr>
                <th className="thead">게시물 제목</th>
                <td className="tbody">{evnetState.evenTitleNm}</td>
              </tr>
              <tr>
                <th className="thead">등록일</th>
                <td className="tbody">{evnetState.createdDate}</td>
              </tr>
            </tbody>
          </table>

          <p className="table-caption body-2-B">문의 내용</p>
          <table className="table-horizontal-container radius-20 body-3-R">
            <tbody>
              <tr>
                <th className="thead">제목</th>
                <td className="tbody">{evnetState.titleNm}</td>
              </tr>
              <tr>
                <th className="thead">내용</th>
                <td className="tbody">{evnetState.cntn}</td>
              </tr>
              <tr>
                <th className="thead">작성자</th>
                <td className="tbody">{evnetState.mbrNm}</td>
              </tr>
              <tr>
                <th className="thead">상태</th>
                <td className="tbody">답변 전</td>
              </tr>
            </tbody>
          </table>
          <p className="table-caption body-2-B">답변내용</p>
          <div className="text-fields-wrap textarea-fildes-wrap">
            <div
              className="wrap radius-8 bg-lightGray"
              style={{ padding: "1rem" }}
            >
              <p className="body-3-R radius-8">{evnetState.rpyCntn}</p>
            </div>
          </div>

          <div className="btn-wrap flex_">
            <div className="flex_">
              <Link href="/inquiry/event">
                <ButtonL text="목록으로" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Component;
