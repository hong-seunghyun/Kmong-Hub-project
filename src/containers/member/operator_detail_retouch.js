import React, { useEffect, useState } from "react";
import Icon from "/src/components/icon/icon.tsx";
import Input from "/src/components/textFields/textInput.tsx";
import InputPassword from "/src/components/textFields/passwordInput.tsx";
import ButtonSecondary from "/src/components/buttons/button_secondary_l";
import Upload from "/src/components/upload/upload";
import OutlineBtn from "/src/components/buttons/button_outline_l";
import PrimaryBtn from "/src/components/buttons/button_primary_l";
import Badge from "/src/components/label/badge";
import CheckBox from "/src/components/radio/checkbox";
import { useRouter } from "next/router";
import { getManagerDetail, setManager } from "../../asset/apis/memberApis";
import { checkTheEmail, searchOrgn } from "../../asset/apis/signup";

const Component = () => {
  const numRegEx = /\d/;
  const engRegEx = /[a-zA-Z]/;

  const [searchList, setSearchList] = useState([]);
  const [viewList, setViewList] = useState([]);
  const [activeSearch, setActiveSearch] = useState(false);

  const [email, setEmail] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [chPassword, setChPassword] = useState("");
  const [ucmdNm, setUcmdNm] = useState("");
  const [ucmdCd, setUcmdCd] = useState("");
  const [authInfo, setAuthInfo] = useState([
    { menuAuthCd: "SS", title: "사이트 설정", isActive: false, menuAuthId: "" },
    { menuAuthCd: "BM", title: "게시판 관리", isActive: false, menuAuthId: "" },
    { menuAuthCd: "CM", title: "콘텐츠 관리", isActive: false, menuAuthId: "" },
    { menuAuthCd: "UM", title: "회원 관리", isActive: false, menuAuthId: "" },
    {
      menuAuthCd: "TM",
      title: "기술문서 관리",
      isActive: false,
      menuAuthId: "",
    },
    { menuAuthCd: "MM", title: "마케팅 관리", isActive: false, menuAuthId: "" },
    { menuAuthCd: "RM", title: "연구자 관리", isActive: false, menuAuthId: "" },
    { menuAuthCd: "ST", title: "통계", isActive: false, menuAuthId: "" },
    { menuAuthCd: "DM", title: "디자인 관리", isActive: false, menuAuthId: "" },
  ]);
  const [phNo, setPhNo] = useState("");
  const [nickName, setNickName] = useState("");
  const [pfFile, setPfFile] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  const getValue = async () => {
    await getManagerDetail({ siteMbrNo: id })
      .then((e) => {
        console.log(e);
        setEmail(e.data.data.siteMemBasicInfo.emailAddr);
        setNewEmail(e.data.data.siteMemBasicInfo.emailAddr);
        setName(e.data.data.siteMemBasicInfo.mbrNm);
        setPassword(e.data.data.siteMemBasicInfo.mbrNm);
        setInitAuthInfo(e.data.data.memMenuAuthInfo);
        setUcmdNm(e.data.data.siteMemBasicInfo.ucmdNm);
        setPhNo(e.data.data.siteMemBasicInfo.hpNo);
        setNickName(e.data.data.siteMemBasicInfo.nnmNm);
        setPfFile(e.data.data.siteMemBasicInfo.pflImgPath);
      })
      .catch((e) => console.log(e));
  };

  const getAuthInfo = () => {
    const authInfoValue = [];
    if (Array.isArray(authInfo))
      authInfo.map((e) => {
        if (e.isActive) {
          if (e.menuAuthId)
            authInfoValue.push({
              menuAuthCd: e.menuAuthCd,
              menuAuthId: e.menuAuthId,
            });
          else authInfoValue.push({ menuAuthCd: e.menuAuthCd });
        }
      });
    return authInfoValue;
  };

  const setInitAuthInfo = (serverAuthInfo) => {
    const cpAuthInfo = [...authInfo];
    serverAuthInfo.map((e) => {
      for (let i = 0; i < authInfo.length; i++) {
        if (e.menuAuthCd === authInfo[i].menuAuthCd) {
          cpAuthInfo[i].isActive = true;
          cpAuthInfo[i].menuAuthId = e.menuAuthId;
          setAuthInfo([...cpAuthInfo]);
          break;
        }
      }
    });
  };

  const setInitValue = () => {
    setNewEmail("");
    setName("");
    setPassword("");
    setUcmdNm("");
    setPhNo("");
    setNickName("");
    setPfFile(null);
    setAuthInfo((prev) =>
      prev.map((e) => {
        return {
          menuAuthCd: e.menuAuthCd,
          title: e.title,
          isActive: false,
          menuAuthId: "",
        };
      })
    );
  };

  const fixValue = () => {
    if (
      email !== "" &&
      password === chPassword &&
      ucmdNm !== "" &&
      name !== "" &&
      phNo !== ""
    ) {
      setValue();
    } else {
      alert("필수 값을 확인해주세요!");
    }
  };

  const checkEmail = async () => {
    await checkTheEmail({ email: newEmail })
      .then((res) => {
        console.log(res.data);
        alert("사용하실 수 없는 이메일 입니다!");
      })
      .catch((e) => {
        console.log(e);
        setEmail(newEmail);
        alert("사용하실 수 있는 이메일 입니다!");
      });
  };

  const searchOrgan = async () => {
    await searchOrgn({ query: "" })
      .then((res) => {
        setSearchList([...res.data.result.rows]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const setValue = () => {
    const authInfoValue = getAuthInfo();
    const formData = new FormData();
    formData.append("mergeManagerInfo", {
      mbrNo: id,
      emailAddr: email,
      hpNo: phNo,
      mbrNm: name,
      nnmNm: nickName,
      nwlAgrmYn: "N",
      pwd: password,
      smsRcvAgrmYn: "Y",
      ucmdCd: "A",
      orgnPhcNo: "010-1834-5678",
      memMenuAuthInfo: authInfoValue,
    });
    if (pfFile) formData.append("pflImg", pfFile);

    setManager(formData)
      .then((e) => console.log(e))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    if (id) getValue();
  }, [id]);

  useEffect(() => {
    searchOrgan();
  }, []);

  return (
    <div className="container">
      <div className="page-wrap">
        <div className="member- operator-add operator-detail-retouch">
          <h1 className="display-5-B">운영자 수정</h1>

          <div className="sub-title body-2-B flex_">
            <Badge value="1" />
            기본 정보
          </div>

          <div className="flex_ button-input box-">
            <Input
              importState=""
              labelText="이메일"
              placeholder="이메일을 입력해주세요"
              valueType=""
              state={newEmail}
              setState={setNewEmail}
              helperTextResult="none"
              iconState="true"
            />
            <ButtonSecondary
              text="중복 확인"
              state={newEmail === email ? "disabled" : ""}
              onclick={checkEmail}
            />
            <div
              className={`flex_ caption-R ${
                newEmail === email ? "txt-violet-1" : ""
              }`}
            >
              {`${newEmail === email ? "사용 가능한 이메일이에요." : "ㅤ"}`}
            </div>
          </div>

          <div className="flex_ box-">
            <InputPassword
              importState=""
              labelText="비밀번호"
              placeholder="비밀번호를 입력해주세요."
              valueType=""
              state={password}
              setState={setPassword}
              helperTextResult="none"
              iconState="true"
            />
            <div className="flex_">
              <div
                className={`flex_ check_flex ${
                  numRegEx.test(password) ? "txt-violet-1" : "txt-disabled"
                } caption-R`}
              >
                <Icon
                  icon="checkNone"
                  size={7}
                  color={numRegEx.test(password) ? "#574AFF" : "#B3B6B8"}
                  stroke=""
                />
                숫자 입력
              </div>

              <div
                className={`flex_ check_flex ${
                  password.length >= 8 && password.length <= 12
                    ? "txt-violet-1"
                    : "txt-disabled"
                } caption-R`}
              >
                <Icon
                  icon="checkNone"
                  size={7}
                  color={
                    password.length >= 8 && password.length <= 12
                      ? "#574AFF"
                      : "#B3B6B8"
                  }
                  stroke=""
                />
                8자 이상 ~ 12자 이하
              </div>
              <div
                className={`flex_ check_flex ${
                  engRegEx.test(password) ? "txt-violet-1" : "txt-disabled"
                } caption-R`}
              >
                <Icon
                  icon="checkNone"
                  size={7}
                  color={engRegEx.test(password) ? "#574AFF" : "#B3B6B8"}
                  stroke=""
                />
                영문 입력
              </div>
            </div>
          </div>

          <div className="flex_ box-">
            <InputPassword
              importState=""
              labelText="비밀번호 확인"
              placeholder="비밀번호를 입력해주세요."
              valueType=""
              state={chPassword}
              setState={setChPassword}
              helperTextResult="none"
              iconState="true"
            />
            <div className="flex_ txt-violet-1 caption-R">
              {chPassword === password ? "비밀번호가 일치해요." : "ㅤ"}
            </div>
          </div>

          <div style={{ position: "relative" }}>
            <div className="flex_ input-search">
              <Input
                labelText="소속"
                placeholder="한국기술HUB"
                valueType=""
                state={ucmdNm}
                setState={setUcmdNm}
                onClick={() => setActiveSearch(true)}
                onBlur={() => setActiveSearch(false)}
                helperTextResult="none"
                iconState="false"
              />
              <Icon icon="search" size={16} stroke="#574AFF" fill="none" />
            </div>
            {activeSearch && (
              <div
                style={{
                  backgroundColor: "white",
                  border: "1px solid #E9EDF0",
                  borderRadius: "10px",
                  position: "absolute",
                  zIndex: "10",
                  width: "100%",
                }}
              >
                {viewList &&
                  viewList.map(
                    (e, idx) =>
                      idx < 5 && (
                        <p
                          onMouseDown={() => {
                            console.log(e);
                            setUcmdCd(e.id);
                            setUcmdNm(e.name);
                          }}
                          style={{ padding: "1rem" }}
                        >
                          {e.name}
                        </p>
                      )
                  )}
              </div>
            )}
            <p className="caption-R helper-txt txt-third">
              원하는 기관을 선택해주세요. 선택한 기관의 특허, 논문, 보고서 등의
              정보를 불러와 보실 수 있어요.
            </p>
          </div>

          <div className="box-">
            <Input
              importState=""
              labelText="이름"
              placeholder="홍길동"
              state={name}
              setState={setName}
              valueType=""
              helperTextResult="none"
              iconState="false"
            />
          </div>

          <div className="box-">
            <Input
              importState=""
              labelText="휴대폰 번호"
              placeholder="01012345678"
              valueType=""
              state={phNo}
              setState={setPhNo}
              helperTextResult="none"
              iconState="false"
            />
          </div>

          <div className="sub-title body-2-B flex_">
            <Badge value="2" />
            권한 설정
          </div>

          <div className="flex_ checkbox-flex box-">
            {authInfo &&
              authInfo.map((e, idx) => {
                return (
                  <CheckBox
                    size="small"
                    label={e.title}
                    checked={e.isActive}
                    setCheckFunc={() => {
                      const cpValue = [...authInfo];
                      cpValue[idx].isActive = !e.isActive;
                      setAuthInfo([...cpValue]);
                    }}
                  />
                );
              })}
          </div>

          <div className="sub-title body-2-B flex_">
            <Badge value="3" />
            콘텐츠 작성자 표시 정보
          </div>

          <div className="box-">
            <Input
              importState="none"
              labelText="프로필 이름"
              placeholder="알라딘"
              valueType=""
              state={nickName}
              setState={setNickName}
              helperTextResult="none"
              iconState="false"
            />
          </div>

          <div className="box-">
            <p className="body-2-B txt-second-default">
              프로필 이미지<span className="txt-violet-1">*</span>
            </p>
            <p className="caption-R helper-txt txt-third">
              입력하신 프로필 이름과 이미지는 공급사가 업로드하는 모든 콘텐츠
              옆에 작성자의 정보로 표시돼요.
            </p>
            <Upload
              state="default"
              type="normal"
              accept=".jpg, .png, .jpeg"
              fileState={pfFile}
              setFileState={setPfFile}
            />
            <p className="caption-R helper-txt">
              허용 사이즈: <span>800px x 800px</span>{" "}
              <span className="bar">|</span> 파일 형식:{" "}
              <span>JPG,PNG,JPEG</span>
              <span className="bar">|</span> 최대 파일 크기: <span>100mb</span>
            </p>
          </div>

          <div className="button-wrap flex_">
            <OutlineBtn text="초기화" state="default" onclick={setInitValue} />
            <PrimaryBtn text="저장" state="default" onclick={fixValue} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Component;
