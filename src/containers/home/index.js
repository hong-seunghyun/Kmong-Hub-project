import React, { useEffect, useLayoutEffect, useState } from "react";
import Label from "/src/components/label/label";
import ButtonCta from "/src/components/buttons/button_cta";
import ButtonLine from "/src/components/buttons/text_button_underline_primary_l";
import Icon from "/src/components/icon/icon.tsx";
import { getUserInfo } from "../../asset/apis/siteApis";

const Component = () => {
  const [userData, setUserData] = useState({ data: "" });
  useLayoutEffect(() => {
    getUserInfo()
      .then((res) => {
        console.log(res.data.data);
        setUserData({ ...res.data.data });
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="page-wrap">
      <div className="home-container bg-violet-6">
        <div className="content-container">
          <div className="head-wrap flex_">
            <img src="/images/user_icon_l.png" alt="user_icon_l" />
            <h1 className="display-5-B ">
              환영합니다.{" "}
              <span className="txt-violet-1">
                {userData?.nnmNm ? userData.nnmNm : ""}
              </span>
              님
            </h1>
          </div>

          <div className="flex_ box_ box-01 radius-20">
            <span className="flex_">
              <Label
                backgroundColor="bg-violet-1"
                fontColor="txt-white"
                text="BASIC"
                icon="false"
                iconColor=""
              />
              <p className="body-3-R">N개월</p>
            </span>
            <span className="flex_">
              <p className="body-3-R txt-violet-1">만료까지 [N]일 남았어요.</p>
              <ButtonCta text="플랜 업그레이드" />
            </span>
          </div>

          <h6 className="body-2-B box-title">저장 용량</h6>

          <div className="box_ box-02 radius-20">
            <div className="data-count">
              <span className="txt-violet-1 body-2-B">24GB</span>
              &nbsp;/&nbsp;
              <span className="body-2-B">32GB</span>
              &nbsp;
              <span className="body-2-R txt-third">(70% 사용중)</span>
            </div>

            <div className="data-progress">
              <span>
                <span></span>
              </span>
            </div>

            <div className="sub-data flex_">
              <span className="body-2-R txt-third">여유 공간 8GB</span>
              <span className="flex_">
                <ButtonLine text="용량 업그레이드" />
                <Icon icon="chevronRight" size="13" color="#574AFF" stroke="" />
              </span>
            </div>
          </div>

          <h6 className="body-2-B box-title">이번달 생성 횟수</h6>

          <div className="box_ box-03 radius-20 flex_">
            <div className="flex_">
              <h6 className="body-2-R txt-second-defalut">AI 생성</h6>
              <div className="txt-disabled">
                <span className="txt-violet-1 heading-2-B">0</span>
                &nbsp;/&nbsp;
                <span className="body-2-B txt-primary">[10]</span>
              </div>
            </div>

            <div className="flex_">
              <h6 className="body-2-R txt-second-defalut">이메일 발송</h6>
              <div className="txt-disabled">
                <span className="txt-violet-1 heading-2-B">0</span>
                &nbsp;/&nbsp;
                <span className="body-2-B txt-primary">[10]</span>
              </div>
            </div>

            <div className="flex_">
              <h6 className="body-2-R txt-second-defalut">뉴스레터 발송</h6>
              <div className="txt-disabled">
                <span className="txt-violet-1 heading-2-B">0</span>
                &nbsp;/&nbsp;
                <span className="body-2-B txt-primary">[10]</span>
              </div>
            </div>

            <div className="flex_">
              <h6 className="body-2-R txt-second-defalut">SMS 발송</h6>
              <div className="txt-disabled">
                <span className="txt-violet-1 heading-2-B">0</span>
                &nbsp;/&nbsp;
                <span className="body-2-B txt-primary">[10]</span>
              </div>
            </div>

            <div className="flex_">
              <h6 className="body-2-R txt-second-defalut">전자계약 발송</h6>
              <div className="txt-disabled">
                <span className="txt-violet-1 heading-2-B">0</span>
                &nbsp;/&nbsp;
                <span className="body-2-B txt-primary">[10]</span>
              </div>
            </div>
          </div>

          <h6 className="body-2-B box-title">
            방문자 접속 조회 <span>최근 7일 방문자 수 입니다</span>
          </h6>

          <div className="box_ box-04 radius-20 flex_">
            <div className="flex_">
              <div className="top-count body-2-R txt-second-defalut bg-violet-4">
                00/00
              </div>

              <div className="bottom-count heading-2-B">0</div>
            </div>

            <div className="flex_">
              <div className="top-count body-2-R txt-second-defalut bg-violet-4">
                00/00
              </div>

              <div className="bottom-count heading-2-B">0</div>
            </div>

            <div className="flex_">
              <div className="top-count body-2-R txt-second-defalut bg-violet-4">
                00/00
              </div>

              <div className="bottom-count heading-2-B">0</div>
            </div>

            <div className="flex_">
              <div className="top-count body-2-R txt-second-defalut bg-violet-4">
                00/00
              </div>

              <div className="bottom-count heading-2-B">0</div>
            </div>

            <div className="flex_">
              <div className="top-count body-2-R txt-second-defalut bg-violet-4">
                00/00
              </div>

              <div className="bottom-count heading-2-B">0</div>
            </div>

            <div className="flex_">
              <div className="top-count body-2-R txt-second-defalut bg-violet-4">
                00/00
              </div>

              <div className="bottom-count heading-2-B">0</div>
            </div>
          </div>

          <h6 className="body-2-B box-title">사이트 현황</h6>

          <div className="box_ box-05 flex_">
            <div>
              <div className="title-wrap flex_ txt-white body-2-B">
                <span>
                  <Icon icon="member" size={15} color="none" stroke="#fff" />
                  회원 관리
                </span>
                <Icon icon="chevronRight" size={9} color="#fff" stroke="none" />
              </div>
              <div className="content_ content-1 txt-second-defalut">
                <div className="body-2-R flex_">
                  <p>전체</p>
                  <p>
                    <span className="txt-primary">[10]</span>명
                  </p>
                </div>

                <div className="body-2-R flex_">
                  <p>신규</p>
                  <p>
                    <span className="txt-violet-1">[10]</span>명
                  </p>
                </div>

                <div className="body-2-R flex_">
                  <p>휴먼</p>
                  <p>
                    <span className=" txt-disabled">[10]</span>명
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="title-wrap flex_ txt-white body-2-B">
                <span>
                  <Icon icon="content" size={15} color="none" stroke="#fff" />
                  콘텐츠 관리
                </span>
                <Icon icon="chevronRight" size={9} color="#fff" stroke="none" />
              </div>
              <div className="content_ content-1 txt-second-defalut">
                <div className="body-2-R flex_">
                  <p>기술이전</p>
                  <p>
                    <span className="txt-violet-1">[10]</span>건
                  </p>
                </div>

                <div className="body-2-R flex_">
                  <p>행사</p>
                  <p>
                    <span className="txt-violet-1">[10]</span>건
                  </p>
                </div>

                <div className="body-2-R flex_">
                  <p>지원사업</p>
                  <p>
                    <span className=" txt-violet-1">[10]</span>건
                  </p>
                </div>

                <div className="body-2-R flex_">
                  <p>뉴스</p>
                  <p>
                    <span className=" txt-violet-1">[10]</span>건
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="title-wrap flex_ txt-white body-2-B">
                <span>
                  <Icon icon="document" size={15} color="none" stroke="#fff" />
                  기술 문서 관리
                </span>
                <Icon icon="chevronRight" size={9} color="#fff" stroke="none" />
              </div>
              <div className="content_ content-1 txt-second-defalut">
                <div className="body-2-R flex_">
                  <p>특허</p>
                  <p>
                    <span className="txt-violet-1">[10]</span>건
                  </p>
                </div>

                <div className="body-2-R flex_">
                  <p>논문</p>
                  <p>
                    <span className="txt-violet-1">[10]</span>건
                  </p>
                </div>

                <div className="body-2-R flex_">
                  <p>보고서</p>
                  <p>
                    <span className=" txt-violet-1">[10]</span>건
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="title-wrap flex_ txt-white body-2-B">
                <span>
                  <Icon icon="document" size={15} color="none" stroke="#fff" />
                  게시판 관리
                </span>
                <Icon icon="chevronRight" size={9} color="#fff" stroke="none" />
              </div>
              <div className="content_ content-1 txt-second-defalut">
                <div className="body-2-R flex_">
                  <p>전체</p>
                  <p>
                    <span className="txt-violet-1">[10]</span>건
                  </p>
                </div>

                <div className="body-2-R flex_">
                  <p>신규</p>
                  <p>
                    <span className="txt-violet-1">[10]</span>건
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="title-wrap flex_ txt-white body-2-B">
                <span>
                  <Icon icon="question" size={15} color="none" stroke="#fff" />
                  문의 관리
                </span>
                <Icon icon="chevronRight" size={9} color="#fff" stroke="none" />
              </div>
              <div className="content_ content-1 txt-second-defalut">
                <div className="body-2-R flex_">
                  <p>전체</p>
                  <p>
                    <span className="txt-primary">[10]</span>건
                  </p>
                </div>

                <div className="body-2-R flex_">
                  <p>미확인</p>
                  <p>
                    <span className="txt-violet-1">[10]</span>건
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="title-wrap flex_ txt-white body-2-B">
                <span>
                  <Icon
                    icon="transaction"
                    size={12}
                    color="none"
                    stroke="#fff"
                  />
                  거래 관리
                </span>
                <Icon icon="chevronRight" size={9} color="#fff" stroke="none" />
              </div>
              <div className="content_ content-1 txt-second-defalut">
                <div className="body-2-R flex_">
                  <p>거래 요청</p>
                  <p>
                    <span className="txt-violet-1">[10]</span>건
                  </p>
                </div>

                <div className="body-2-R flex_">
                  <p>진행 중</p>
                  <p>
                    <span className="txt-violet-1">[10]</span>건
                  </p>
                </div>

                <div className="body-2-R flex_">
                  <p>거래 성공</p>
                  <p>
                    <span className="txt-violet-1">[10]</span>건
                  </p>
                </div>

                <div className="body-2-R flex_">
                  <p>거래 실패</p>
                  <p>
                    <span className="txt-violet-1">[10]</span>건
                  </p>
                </div>

                <div className="body-2-R flex_">
                  <p>보류</p>
                  <p>
                    <span className="txt-violet-1">[10]</span>건
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
