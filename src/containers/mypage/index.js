import React, { useLayoutEffect, useState } from "react";
import Tab from "/src/components/tabs/mypage_tab_fixed";
import Input from "/src/components/textFields/textInput.tsx";
import PasswordInput from "/src/components/textFields/passwordInput.tsx";
import SearchBar from "/src/components/searchBar/search_bar_company_management_menu.js";
import Checkbox from "/src/components/radio/checkbox";
import Upload from "/src/components/upload/upload";
import OutlineBtn from "/src/components/buttons/button_outline_l";
import ButtonSecondary from "/src/components/buttons/button_secondary_l";
import PrimaryBtn from "/src/components/buttons/button_primary_l";
import Icon from "/src/components/icon/icon.tsx";
import { getMyInfo } from "../../asset/apis/mypage/myInfoApis";
import { searchOrgn } from "../../asset/apis/signup";

const Component = () => {
  const [emailAddr, setEmailAddr] = useState();
  const [nnmNm, setNnmNm] = useState();
  const [orgnPhcNo, setOrgnPhcNo] = useState();
  const [nwlAgrmYn, setNwlAgrmYn] = useState();
  const [smsRcvAgrmYn, setSmsRcvAgrmYn] = useState();
  const [ucmdNm, setUcmdNm] = useState();
  const [ucmdCd, setUcmdCd] = useState();
  const [data, setData] = useState([]);

  const searchOrgan = async (organ) => {
    await searchOrgn({ query: organ })
      .then((res) => {
        setData(res.data.result.rows);
        console.log(res.data.result.rows);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getValue = async () => {
    await getMyInfo()
      .then((e) => {
        console.log(e);
        setEmailAddr(e.data.data.emailAddr);
        setNnmNm(e.data.data.nnmNm);
        setOrgnPhcNo(e.data.data.orgnPhcNo);
        setNwlAgrmYn(e.data.data.nwlAgrmYn);
        setSmsRcvAgrmYn(e.data.data.smsRcvAgrmYn);
        setUcmdNm(e.data.data.ucmdNm);
        setUcmdCd(e.data.data.ucmdCd);
      })
      .catch((e) => console.log(e));
  };

  useLayoutEffect(() => {
    getValue();
    searchOrgan();
  }, []);

  return (
    <div className="container">
      <div className="page-wrap">
        <div className="mypage-contents">
          <h1 className="display-5-B">마이페이지</h1>
          <Tab active={0} />
          <div className="sub-page-0">
            <div className="flex_ button-input">
              <Input
                labelText="이메일"
                placeholder="kotech@kotech.co.kr"
                valueType=""
                state={emailAddr}
                setState={setEmailAddr}
                helperTextResult="none"
                iconState="true"
              />
              <ButtonSecondary text="중복 확인" state="disabled" />
            </div>
            <div className="flex_ button-input">
              <PasswordInput
                labelText="비밀번호"
                placeholder="*******"
                valueType=""
                state=""
                helperTextResult="none"
                iconState="true"
              />
              <ButtonSecondary text="변경" state="default" />
            </div>
            <div className="flex_ button-input">
              <Input
                labelText="휴대폰 번호"
                placeholder="01012345678"
                valueType=""
                state=""
                helperTextResult="none"
                iconState="false"
              />
              <ButtonSecondary text="변경" state="default" />
            </div>

            <Input
              labelText="이름"
              placeholder="미나 마수드"
              valueType=""
              state={nnmNm}
              setState={setNnmNm}
              helperTextResult="none"
              iconState="false"
            />

            <Input
              labelText="닉네임"
              placeholder="알라딘"
              valueType=""
              state={nnmNm}
              setState={setNnmNm}
              helperTextResult="none"
              iconState="false"
            />

            <div className="box-">
              <p className="body-2-B txt-second-default">프로필</p>
              <Upload state="default" type="normal" />
              <p className="caption-R helper-txt">
                허용 사이즈: <span>800px x 800px</span>{" "}
                <span className="bar">|</span> 파일 형식:{" "}
                <span>JPG,PNG,JPEG</span>
                <span className="bar">|</span> 최대 파일 크기:{" "}
                <span>100mb</span>
              </p>
            </div>

            <div className="flex_ input-search box-">
              <p className="body-2-B txt-second-default">
                소속<span className="txt-violet-1">*</span>
              </p>
            </div>
            <SearchBar
              state={ucmdNm}
              setState={setUcmdNm}
              data={data}
              setResult={setUcmdCd}
              width="100%"
            />

            <div className="box-">
              <p className="body-2-B txt-second-default">
                사업자 등록증<span className="body-2-B  txt-violet-1">*</span>
              </p>
              <Upload state="done" type="preview" />
              <p className="caption-R helper-txt">
                허용 사이즈: <span>800px x 800px</span>{" "}
                <span className="bar">|</span> 파일 형식:{" "}
                <span>JPG,PNG,JPEG</span>
                <span className="bar">|</span> 최대 파일 크기:{" "}
                <span>100mb</span>
              </p>
            </div>

            <div className="flex_ button-input">
              <Input
                labelText="소속 전화번호"
                placeholder="01012345678"
                valueType=""
                state={orgnPhcNo}
                setState={setOrgnPhcNo}
                helperTextResult="none"
                iconState="false"
              />
              <ButtonSecondary text="변경" state="default" />
            </div>

            <div className="checkBox-">
              <Checkbox
                size="large"
                id="check-a"
                label="(선택) 한국기술마켓의 뉴스레터 발송에 동의해요."
                state="default"
                setCheckFunc={() => {
                  if (nwlAgrmYn === "Y") setNwlAgrmYn("N");
                  else setNwlAgrmYn("Y");
                }}
                checked={nwlAgrmYn === "Y"}
              />
              <Checkbox
                size="large"
                id="check-b"
                label="(선택) 이메일/SMS 등 수신을 동의해요."
                state="default"
                setCheckFunc={() => {
                  if (smsRcvAgrmYn === "Y") setSmsRcvAgrmYn("N");
                  else setSmsRcvAgrmYn("Y");
                }}
                checked={smsRcvAgrmYn === "Y"}
              />
            </div>
          </div>
          <div className="button-wrap flex_">
            <OutlineBtn text="탈퇴" state="default" />
            <PrimaryBtn text="저장" state="default" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Component;
