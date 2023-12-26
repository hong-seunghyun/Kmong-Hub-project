import React from "react";
import Tabs from "/src/components/tabs/login_tab";
import Input from "/src/components/textFields/textInput.tsx";
import InputPassword from "/src/components/textFields/passwordInput.tsx";
import LoginBtn from "/src/components/buttons/button_primary_l";
import TextBtn from "/src/components/buttons/text_button_underline_primary_m";
import Link from "next/link";
import Badge from "/src/components/label/badge";
import Icon from "/src/components/icon/icon.tsx";
import { useRouter } from "next/router";
import { useLayoutEffect } from "react";
import { findPassword, rePassword } from "../../asset/apis/verification";
import { useState } from "react";
import { useEffect } from "react";
import Modal from "/src/components/modal/modal.js";

const Component = () => {
  const router = useRouter();
  const [modalState, setModalState] = useState(false);
  const [modalValue, setModalValue] = useState({
    text: "사이트를 이용하시려면, 회원가입해 주세요.",
    title: "회원가입하신 내역이 없어요.",
  });

  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  let email = "";
  let hpNo = "";
  let mbrNo = "";

  function containsNumbers(str) {
    return /[0-9]/.test(str);
  }

  function containsAlphabet(str) {
    return /[!@#^*_]/g.test(str);
  }

  function isBetween8and12(str) {
    return str.length >= 8 && str.length <= 12;
  }

  const changePassword = () => {
    if (password !== password2) {
      alert("패스워드가 일치하지 않습니다!");
      return;
    }
    rePassword({ mbrNo, password })
      .then((res) => {
        window.location = "/user/find_pw_4";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useLayoutEffect(() => {
    if (!router.isReady) return;
    hpNo = router.query.hpno
      .replace(/[^0-9]/g, "")
      .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
      .replace(/(\-{1,2})$/g, "");
    email = router.query.email;
    findPassword({ email, hpNo })
      .then((res) => {
        mbrNo = res.data.data.mbrNo;
      })
      .catch((err) => {
        setModalState(true);
        // alert("유저 정보가 잘못 되었습니다.");
        window.location = "/";
      });
  });

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
                text: "메인으로",
                onClick: () => {
                  setModalState(false);
                  router.push("/");
                },
              },
            ]}
          />
        </div>
      )}
      <div className="login find- sing-up find-3">
        <h1 className="display-5-B flex_">
          비밀번호 재설정
          <div className="flex_">
            <Badge value="1" />
            <Badge value="2" />
            <Badge value="3" />
          </div>
        </h1>
        <p className="body-3-R sub-title txt-second-default">
          비밀번호를 찾기 위해 먼저 휴대 전화로 본인인증 해주세요.
        </p>
        <div className="sign-up-form">
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
            />
            <div className="flex_">
              <div
                className="flex_ check_flex txt-disabled caption-R"
                style={{
                  color: containsNumbers(password) ? "#952dff" : "#b3b6b8",
                }}
              >
                <Icon
                  icon="checkNone"
                  size={7}
                  color="#b3b6b8"
                  stroke=""
                  style={{
                    color: containsNumbers(password) ? "#952dff" : "#b3b6b8",
                  }}
                />
                숫자 입력
              </div>
              <div
                className="flex_ check_flex txt-disabled caption-R"
                style={{
                  color: isBetween8and12(password) ? "#952dff" : "#b3b6b8",
                }}
              >
                <Icon
                  icon="checkNone"
                  size={7}
                  color="#b3b6b8"
                  stroke=""
                  style={{
                    color: isBetween8and12(password) ? "#952dff" : "#b3b6b8",
                  }}
                />
                8자 이상 ~ 12자 이하
              </div>
              <div
                className="flex_ check_flex txt-disabled caption-R"
                style={{
                  color: containsAlphabet(password) ? "#952dff" : "#b3b6b8",
                }}
              >
                <Icon
                  icon="checkNone"
                  size={7}
                  color="#b3b6b8"
                  stroke=""
                  style={{
                    color: containsAlphabet(password) ? "#952dff" : "#b3b6b8",
                  }}
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
              state={password2}
              setState={setPassword2}
            />
          </div>
          <Link
            href={`/user/find_pw_3?hpno=${router.query.hpno}&email=${router.query.email}`}
          >
            <LoginBtn text="확인" onclick={changePassword} />
          </Link>
        </div>
      </div>
    </>
  );
};
export default Component;
