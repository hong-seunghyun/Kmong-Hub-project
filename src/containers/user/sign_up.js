import React, { useRef } from "react";
import Tabs from "/src/components/tabs/login_tab";
import Input from "/src/components/textFields/textInput.tsx";
import TelInput from "/src/components/textFields/telInput.tsx";
import ButtonSecondary from "/src/components/buttons/button_secondary_l";
import InputPassword from "/src/components/textFields/passwordInput.tsx";
import Icon from "/src/components/icon/icon.tsx";
import Upload from "/src/components/upload/upload";
import CheckBox from "/src/components/radio/checkbox";
import LoginBtn from "/src/components/buttons/button_primary_l";
import TextBtn from "/src/components/buttons/text_button_underline_primary_m";
import Link from "next/link";
import SearchBar from "/src/components/searchBar/search_bar_company_management_menu";
import Modal from "/src/components/modal/modal.js";
import ModalGuideA from "/src/components/modal/modal_uesr_guide_1";
import ModalGuideB from "/src/components/modal/modal_uesr_guide_2";
import { useState } from "react";
import {
  checkPhone,
  checkTheEmail,
  register,
  searchOrgn,
} from "../../asset/apis/signup";
import { kotechUrl } from "/src/asset/config/config.json";
import { useLayoutEffect } from "react";
import { useEffect } from "react";
import { setPhoneNumber } from "src/util/setPhoneNumber";

const Component = () => {
  const NumRegEx = /[0-9]/;
  const SpChRegEx = /[!@#^*_]/;
  //   function containsNumbers(str) {
  //     return /[0-9]/.test(str);
  //   }

  //   function containsAlphabet(str) {
  //     return /[!@#^*_]/g.test(str);
  //   }

  //   function isBetween8and12(str) {
  //     return str.length >= 8 && str.length <= 12;
  //   }
  const EmailRegEx =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/;

  const PhoneRegEx = /^[0-9]{3}[0-9]{2,4}[0-9]{4}$/;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [tel, setTel] = useState("");
  const [ucmdCd, setUcmdCd] = useState("");

  const [orgn, setOrgn] = useState("");

  const [allCheckState, setAllCheckState] = useState(false);

  const [checkState1, setCheckState1] = useState(false);
  const [checkState2, setCheckState2] = useState(false);
  const [checkState3, setCheckState3] = useState(false);

  const [orgnTel, setOrgnTel] = useState("");

  const [data, setData] = useState([]);
  const [modalState, setModalState] = useState(false);
  const [modalValue, setModalValue] = useState({ text: "", title: "" });

  const [emailToggle, setEmailToggle] = useState("none");
  const [passwordLight, setpasswordLight] = useState("none");
  const [checkPwToggle, setCheckPwToggle] = useState("none");
  const [telToggle, setTelToggle] = useState("none");
  const [nameToggle, setNameToggle] = useState("none");
  const [nicknameToggle, setNicknameToggle] = useState("none");
  const [pfFileToggle, setPfFileToggle] = useState("none");
  const [brFileToggle, setBrFileToggle] = useState("none");
  const [orgnToggle, setOrgnToggle] = useState("none");
  const [orgnTelToggle, setOrgnTelToggle] = useState("none");
  const [checkToggle, setCheckToggle] = useState("none");

  const [modalOpenA, setModalOpenA] = useState(false);
  const [modalOpenB, setModalOpenB] = useState(false);

  const showModalA = () => {
    setModalOpenA(true);
  };
  const showModalB = () => {
    setModalOpenB(true);
  };

  const allCheck = (checked) => {
    setAllCheckState(checked);
    if (checked) {
      setCheckState1(true);
      setCheckState2(true);
      setCheckState3(true);
    }
  };

  const checkEmail = async () => {
    if (!email.includes("@")) return;
    await checkTheEmail({ email })
      .then((res) => {
        console.log(res.data);
        alert("사용하실 수 없는 이메일 입니다!");
        setEmailToggle("checkfilled");
      })
      .catch((err) => {
        setEmailToggle("violet");
      });
  };

  const verification = async () => {
    window.addEventListener("message", (message) => {
      if (message.data != "") {
        console.log("ㅇㄹㅇㅇㄹㅇㄹ", message.data);
        const encoded = message.data
          .replace(/[^0-9]/g, "")
          .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
          .replace(/(\-{1,2})$/g, "");
        setTel(encoded);
        checkPhone({ hpNo: message.data })
          .then((res) => {
            if (res.data.data.hpNo === "") {
              // alert("사용 가능한 번호 입니다.");
              setTelToggle("violet");
            } else {
              setIsRegister();
              setTelToggle("filled");
            }
          })
          .catch((err) => {});
      }
    });

    const left = window.screen.width / 2 - 500 / 2;
    const top = window.screen.height / 2 - 800 / 2;
    const option = `menubar=no, toolbar=no, resizable=no, width=500, height=600, left=${left}, top=${top}`;
    const url = new URL(window.location.href);
    const origin = url.origin;
    await window.open(
      `${kotechUrl}/api/v1/nice/encrypt/data?returnUrl=${kotechUrl}/api/v1/nice/decrypt/data&redirectUrl=${origin}/user/verification?to=/user/sign_up`,
      "nicePopup",
      option
    );
  };

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

  const [file, setFile] = useState(null);
  const [file2, setFile2] = useState(null);

  const checkRegister = () => {
    if (
      emailToggle === "violet" &&
      passwordLight === "violet" &&
      checkPwToggle === "violet" &&
      telToggle === "violet" &&
      nameToggle === "violet" &&
      nicknameToggle === "violet" &&
      orgnToggle === "violet" &&
      orgnTelToggle === "violet" &&
      checkToggle === "violet"
    ) {
      return true;
    } else {
      return false;
    }
  };

  const registerMember = () => {
    if (!checkRegister()) return;
    const dto = {
      emailAddr: email,
      hpNo: tel,
      mbrNm: name,
      nnmNm: nickname,
      nwlAgrmYn: checkState3 ? "Y" : "N",
      pwd: password,
      smsRcvAgrmYn: checkState2 ? "Y" : "N",
      ucmdCd: ucmdCd,
      orgnPhcNo: orgnTel,
    };
    console.log(dto);
    register(dto, file, file2)
      .then((res) => {
        console.log(res.data);
        window.location = "/user/waiting_sign_up";
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const initToggle = () => {
    setEmailToggle("none");
    setpasswordLight("none");
    setCheckPwToggle("none");
    setTelToggle("none");
    setNameToggle("none");
    setNicknameToggle("none");
    setOrgnToggle("none");
    setOrgnTelToggle("none");
    setCheckToggle("none");
    setPfFileToggle("none");
    setBrFileToggle("none");
  };

  const CheckEmail = () => {
    if (email !== "" || EmailRegEx.test(email)) {
      setEmailToggle("check");
    } else {
      setEmailToggle("filled");
    }
  };

  useEffect(() => {
    if (orgn === "") setOrgnToggle("filled");
    else setOrgnToggle("violet");
  }, [orgn]);

  useEffect(() => {
    CheckEmail();
  }, [email]);

  useEffect(() => {
    if (checkState1) setCheckToggle("violet");
    else setCheckToggle("filled");
  }, [checkState1]);

  useEffect(() => {
    if (
      NumRegEx.test(password) &&
      password.length >= 8 &&
      password.length <= 12 &&
      SpChRegEx.test(password)
    )
      setpasswordLight("violet");
    else {
      setpasswordLight("none");
    }
  }, [password]);

  useEffect(() => {
    if (password2 !== password) {
      setCheckPwToggle("filled");
    } else {
      setCheckPwToggle("violet");
    }
  }, [password, password2]);

  useEffect(() => {
    if (name.includes(" ") || NumRegEx.test(name) || SpChRegEx.test(name))
      setNameToggle("filled");
    else setNameToggle("violet");
  }, [name]);
  useEffect(() => {
    if (
      nickname.includes(" ") ||
      NumRegEx.test(nickname) ||
      SpChRegEx.test(nickname)
    )
      setNicknameToggle("filled");
    else setNicknameToggle("violet");
  }, [nickname]);

  useEffect(() => {
    if (orgnTel !== "" && PhoneRegEx.test(orgnTel.replace(/-/g, ""))) {
      setOrgnTelToggle("violet");
      console.log(setPhoneNumber(orgnTel));
    } else setOrgnTelToggle("filled");
  }, [orgnTel]);

  useLayoutEffect(() => {
    searchOrgan();
  }, []);

  useEffect(() => {
    initToggle();
  }, []);

  const setEmailValue = () => {
    switch (emailToggle) {
      case "check":
        return <>ㅤ</>;
      case "violet":
        return <>사용 가능한 이메일이에요.</>;
      case "filled":
        return <p className="txt-red">올바른 이메일을 입력해 주세요.</p>;
      case "none":
        return <>ㅤ</>;
      case "checkfilled":
        return <p className="txt-red">이미 사용 중인 이메일이에요.</p>;
      default:
        return <>ㅤ</>;
    }
  };

  const setNotAccessFileModal = () => {
    const cpValue = { ...modalValue };
    cpValue.title = "지원하지 않는 파일 형식이에요.";
    cpValue.text = "Jpg, Jpeg, Png  파일만 업로드할 수 있어요.";
    setModalValue({ ...cpValue });
    setModalState(true);
  };
  const setBigImageModal = () => {
    const cpValue = { ...modalValue };
    cpValue.title = "파일 사이즈가 맞지 않아요.";
    cpValue.text = "가로 800px, 세로 800px 사이즈의 파일만 업로드 가능해요.";
    setModalValue({ ...cpValue });
    setModalState(true);
  };
  const setBigFileModal = () => {
    const cpValue = { ...modalValue };
    cpValue.title = "파일 크기가 너무 커요.";
    cpValue.text = "최대 100mb까지 업로드 가능해요.";
    setModalValue({ ...cpValue });
    setModalState(true);
  };
  const setIsRegister = () => {
    const cpValue = { ...modalValue };
    cpValue.title = "이미 가입한 계정이 있어요.";
    cpValue.text = "가입하신 내역으로 로그인해 주세요.";
    setModalValue({ ...cpValue });
    setModalState(true);
  };

  return (
    <>
      {modalState && (
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.2)",
            width: "100%",
            height: "100%",
            position: "fixed",
            zIndex: 100,
            marginTop: "-60px",
          }}
        >
          <Modal
            title={modalValue.title}
            text={modalValue.text}
            type="full-button"
            count="one"
            value="default"
            label={[
              {
                text: "확인",
                onClick: () => {
                  setModalState(false);
                },
              },
            ]}
          />
        </div>
      )}
      <div className="login sing-up">
        <h1 className="display-5-B">환영합니다.</h1>
        <p className="body-3-R sub-title txt-second-default">
          <span className="txt-violet-1">*</span>는 필수 입력 항목이에요.
        </p>
        <div className="sign-up-form">
          <div className="flex_ button-input box-">
            <Input
              importState=""
              labelText="이메일"
              placeholder="이메일을 입력해 주세요."
              valueType=""
              helperTextResult="default"
              iconState="true"
              state={email}
              setState={setEmail}
              light={emailToggle === "checkfilled" ? "filled" : emailToggle}
            />
            <ButtonSecondary
              text="중복 확인"
              state={EmailRegEx.test(email) ? "enabled" : "disabled"}
              onclick={EmailRegEx.test(email) && checkEmail}
            />
            <div className="flex_">
              <div
                className="flex_ check_flex txt-disabled caption-R"
                style={{
                  color: emailToggle == "violet" ? "#952dff" : "#b3b6b8",
                }}
              >
                {setEmailValue()}
              </div>
            </div>
          </div>
          <div className="flex_ box-">
            <InputPassword
              importState=""
              labelText="비밀번호"
              placeholder="비밀번호를 입력해 주세요."
              valueType=""
              helperTextResult="none"
              iconState="true"
              state={password}
              setState={setPassword}
              light={passwordLight}
            />
            <div className="flex_">
              <div
                className="flex_ check_flex txt-disabled caption-R"
                style={{
                  color: NumRegEx.test(password) ? "#952dff" : "#b3b6b8",
                }}
              >
                <Icon
                  icon="checkNone"
                  size={7}
                  color={NumRegEx.test(password) ? "#952dff" : "#b3b6b8"}
                  stroke=""
                />
                숫자 입력
              </div>
              <div
                className="flex_ check_flex txt-disabled caption-R"
                style={{
                  color:
                    password.length >= 8 && password.length <= 12
                      ? "#952dff"
                      : "#b3b6b8",
                }}
              >
                <Icon
                  icon="checkNone"
                  size={7}
                  color={
                    password.length >= 8 && password.length <= 12
                      ? "#952dff"
                      : "#b3b6b8"
                  }
                  stroke=""
                />
                8자 이상 ~ 12자 이하
              </div>
              <div
                className="flex_ check_flex txt-disabled caption-R"
                style={{
                  color: SpChRegEx.test(password) ? "#952dff" : "#b3b6b8",
                }}
              >
                <Icon
                  icon="checkNone"
                  size={7}
                  color={SpChRegEx.test(password) ? "#952dff" : "#b3b6b8"}
                  stroke=""
                />
                특수문자 입력
              </div>
            </div>
          </div>
          <div className="flex_ box-">
            <InputPassword
              importState=""
              labelText="비밀번호 확인"
              placeholder="비밀번호를 다시 입력해 주세요."
              valueType=""
              helperTextResult="none"
              iconState="true"
              status={password2}
              setState={setPassword2}
              light={checkPwToggle}
            />
            <div className="flex_">
              <div
                className="flex_ check_flex txt-disabled caption-R"
                style={{
                  color: checkPwToggle == "violet" ? "#952dff" : "#b3b6b8",
                }}
              >
                {checkPwToggle === "none" ? (
                  "ㅤ"
                ) : checkPwToggle === "filled" ? (
                  <p className="txt-red">비밀번호가 일치하지 않아요.</p>
                ) : (
                  <>
                    <Icon
                      icon="checkNone"
                      size={7}
                      color={checkPwToggle == "violet" ? "#952dff" : "#b3b6b8"}
                      stroke=""
                    />
                    비밀번호가 일치 합니다
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="box-">
            <Input
              importState=""
              labelText="이름"
              placeholder="이름을 입력해 주세요."
              valueType=""
              helperTextResult="none"
              iconState="false"
              state={name}
              setState={setName}
              onClick={() => {
                if (name === "") setNameToggle("none");
              }}
              onBlur={() => {
                if (name === "") setNameToggle("noValue");
              }}
              light={nameToggle === "noValue" ? "filled" : nameToggle}
            />
          </div>
          <div className="flex_">
            <div className="flex_ check_flex txt-disabled caption-R">
              {nameToggle === "filled" ? (
                <p className="txt-red">
                  띄어쓰기와 특수문자 없이 10자 이내로 입력해주세요.
                </p>
              ) : nameToggle === "noValue" ? (
                <p className="txt-red">이름을 입력해주세요.</p>
              ) : (
                "ㅤ"
              )}
            </div>
          </div>
          <div className="box-">
            <Input
              importState=""
              labelText="닉네임"
              placeholder="닉네임을 입력해 주세요."
              valueType=""
              helperTextResult="none"
              iconState="false"
              state={nickname}
              setState={setNickname}
              onClick={() => {
                if (nickname === "") setNicknameToggle("none");
              }}
              onBlur={() => {
                if (nickname === "") setNicknameToggle("noValue");
              }}
              light={nicknameToggle === "noValue" ? "filled" : nicknameToggle}
            />
          </div>
          <div className="flex_">
            <div className="flex_ check_flex txt-disabled caption-R">
              {nicknameToggle === "filled" ? (
                <p className="txt-red">
                  띄어쓰기와 특수문자 없이 10자 이내로 입력해주세요.
                </p>
              ) : nicknameToggle === "noValue" ? (
                <p className="txt-red">닉네임을 입력해주세요.</p>
              ) : (
                "ㅤ"
              )}
            </div>
          </div>
          <div
            className="flex_ button-input box- button-full"
            style={{ display: tel ? "none" : "block" }}
          >
            <p className="body-2-B txt-second-default">
              휴대폰<span className="txt-violet-1">*</span>
            </p>
            <ButtonSecondary
              text="PASS 인증"
              state="enabled"
              onclick={verification}
            />
          </div>
          <div
            className="flex_ button-input box-"
            style={{ display: tel == "" ? "none" : "flex" }}
          >
            <TelInput
              importState=""
              labelText="휴대폰"
              placeholder="휴대폰을 입력해 주세요."
              valueType=""
              helperTextResult="none"
              iconState="false"
              state={tel}
              setState={setTel}
              light={telToggle}
            />
            <ButtonSecondary
              text="재인증"
              state="enabled"
              onclick={verification}
            />
            <div className="flex_">
              <div
                className="flex_ check_flex txt-disabled caption-R"
                style={{ color: telToggle == "violet" ? "#952dff" : "#b3b6b8" }}
              >
                <Icon
                  icon="checkNone"
                  size={7}
                  color={telToggle == "violet" ? "#952dff" : "#b3b6b8"}
                  stroke=""
                />
                인증 되었습니다
              </div>
            </div>
          </div>
          <div className="input-box box-">
            <p className="body-2-B txt-second-default">
              프로필<span className="txt-violet-1">*</span>
            </p>
            <Upload
              state={pfFileToggle === "filled" ? "filled" : "default"}
              type="normal"
              fileState={file}
              setFileState={setFile}
              setToggle={setPfFileToggle}
              setModal1={setNotAccessFileModal}
              setModal2={setBigImageModal}
              setModal3={setBigFileModal}
              accept=".jpg, .png, .jpeg"
            />
            <p className="caption-R helper-txt">
              허용 사이즈: <span>800px x 800px</span>{" "}
              <span className="bar">|</span> 파일 형식:{" "}
              <span>JPG,PNG,JPEG</span>
              <span className="bar">|</span> 최대 파일 크기: <span>100mb</span>
            </p>
          </div>
          <div className="flex_" style={{ marginTop: "0.75rem" }}>
            <div className="flex_ check_flex txt-disabled caption-R">
              {pfFileToggle === "filled" ? (
                <p className="txt-red">프로필을 업로드해 주세요.</p>
              ) : (
                "ㅤ"
              )}
            </div>
          </div>
          <div className="input-box box-">
            <p className="body-2-B txt-second-default">
              사업자 등록증<span className="txt-violet-1">*</span>
            </p>
            <Upload
              state={brFileToggle === "filled" ? "filled" : "default"}
              type="normal"
              fileState={file2}
              setFileState={setFile2}
              setToggle={setBrFileToggle}
              setModal1={setNotAccessFileModal}
              setModal2={setBigImageModal}
              setModal3={setBigFileModal}
              accept=".jpg, .png, .jpeg"
            />
            <p className="caption-R helper-txt">
              허용 사이즈: <span>800px x 800px</span>{" "}
              <span className="bar">|</span> 파일 형식:{" "}
              <span>JPG,PNG,JPEG</span>
              <span className="bar">|</span> 최대 파일 크기: <span>100mb</span>
            </p>
          </div>
          <div className="flex_" style={{ marginTop: "0.75rem" }}>
            <div className="flex_ check_flex txt-disabled caption-R">
              {brFileToggle === "filled" ? (
                <p className="txt-red">사업자 등록증을 업로드해 주세요.</p>
              ) : (
                "ㅤ"
              )}
            </div>
          </div>
          <div className="flex_ input-search box-">
            <p className="body-2-B txt-second-default">
              소속<span className="txt-violet-1">*</span>
            </p>
            <SearchBar
              state={orgn}
              setState={setOrgn}
              data={data}
              setResult={setUcmdCd}
              resultFunc={() => setOrgnToggle("violet")}
              onBlur={() => {
                if (orgn === "") setOrgnToggle("noValue");
              }}
              light={orgnToggle === "noValue" ? "filled" : orgnToggle}
            />
          </div>
          <div className="flex_" style={{ marginTop: "0.75rem" }}>
            <div className="flex_ check_flex txt-disabled caption-R">
              {orgnToggle === "filled" ? (
                <p className="txt-red">소속을 선택해 주세요.</p>
              ) : orgnToggle === "noValue" ? (
                <p className="txt-red">소속을 입력해주세요.</p>
              ) : (
                "ㅤ"
              )}
            </div>
          </div>
          <div className="box-">
            <Input
              importState=""
              labelText="소속 전화번호"
              placeholder="소속 전화번호를 입력해주세요."
              valueType=""
              helperTextResult="none"
              iconState="false"
              state={setPhoneNumber(orgnTel)}
              setState={setOrgnTel}
              onBlur={() => {
                if (orgnTel === "") setOrgnTelToggle("noValue");
              }}
              light={orgnTelToggle === "noValue" ? "filled" : orgnTelToggle}
            />
          </div>
          <div className="flex_" style={{ marginBottom: "0.75rem" }}>
            <div className="flex_ check_flex txt-disabled caption-R">
              {orgnTelToggle === "filled" ? (
                <p className="txt-red">올바른 소속 전화번호를 입력해주세요.</p>
              ) : orgnTelToggle === "noValue" ? (
                <p className="txt-red">소속 전화번호를 입력해주세요.</p>
              ) : (
                "ㅤ"
              )}
            </div>
          </div>
          <CheckBox
            size="small"
            label="전체 동의"
            checked={checkState1 && checkState2 && checkState3}
            setCheckState={allCheck}
          />
          <div class="bar bg-gray-5" />
          <CheckBox
            size="small"
            label="(필수) 만 14세 이상이에요."
            checked={checkState1}
            setCheckState={setCheckState1}
          />
          <CheckBox
            size="small"
            label="(선택) 이메일/SMS 등 수신을 동의해요."
            checked={checkState2}
            setCheckState={setCheckState2}
          />
          <CheckBox
            size="small"
            label="(선택) 한국기술마켓의 뉴스레터 발송에 동의해요."
            checked={checkState3}
            setCheckState={setCheckState3}
          />
          <div className="flex_" style={{ marginTop: "0.75rem" }}>
            <div className="flex_ check_flex txt-disabled caption-R">
              {checkToggle === "filled" ? (
                <p className="txt-red">필수 선택 항목을 선택해 주세요.</p>
              ) : (
                "ㅤ"
              )}
            </div>
          </div>
          <Link href="/user/sign_up">
            <LoginBtn
              text="회원가입"
              isActive={checkRegister()}
              onclick={
                checkRegister()
                  ? registerMember
                  : () => {
                      alert("필수 항목들을 모두 입력해주세요.");
                      if (emailToggle !== "violet") setEmailToggle("filled");
                      if (passwordLight !== "violet")
                        setpasswordLight("filled");
                      if (checkPwToggle !== "violet")
                        setCheckPwToggle("filled");
                      if (telToggle !== "violet") setTelToggle("filled");
                      if (nameToggle !== "violet") setNameToggle("filled");
                      if (nicknameToggle !== "violet")
                        setNicknameToggle("filled");
                      if (orgnToggle !== "violet") setOrgnToggle("filled");
                      if (orgnTelToggle !== "violet")
                        setOrgnTelToggle("filled");
                      if (checkToggle !== "violet") setCheckToggle("filled");
                      if (pfFileToggle !== "violet") setPfFileToggle("filled");
                      if (brFileToggle !== "violet") setBrFileToggle("filled");
                    }
              }
            />
          </Link>
          <p className="ps-txt caption-R txt-second-default flex_">
            회원가입 시
            <span onMouseDown={showModalA}>
              <TextBtn text="이용약관" />
              {modalOpenA === true && (
                <ModalGuideA onclick={() => setModalOpenA(!modalOpenA)} />
              )}
            </span>
            및
            <span onMouseDown={showModalB}>
              <TextBtn text="개인정보 처리방침" />
              {modalOpenB === true && (
                <ModalGuideB
                  onclick={() => {
                    setModalOpenB(!modalOpenB);
                  }}
                />
              )}
            </span>
            에 동의하게 됩니다.
          </p>
        </div>
      </div>
    </>
  );
};
export default Component;
