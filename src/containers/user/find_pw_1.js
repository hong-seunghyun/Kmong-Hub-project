import React from "react";
import Tabs from "/src/components/tabs/login_tab";
import Input from "/src/components/textFields/textInput.tsx";
import InputPassword from "/src/components/textFields/passwordInput.tsx";
import LoginBtn from "/src/components/buttons/button_primary_l";
import TextBtn from "/src/components/buttons/text_button_underline_primary_m";
import Link from "next/link";
import Badge from "/src/components/label/badge";
import { useState } from "react";
import { checkTheEmail } from "../../asset/apis/signup";
import Modal from "/src/components/modal/modal.js";
import { useRouter } from "next/router";

const Component = () => {
  const router = useRouter();
  const [email, setEmail] = useState();
  const [modalState, setModalState] = useState(false);
  const [modalValue, setModalValue] = useState({
    text: "사이트를 이용하시려면, 회원가입해 주세요.",
    title: "회원가입하신 내역이 없어요.",
  });

  const checkEmail = () => {
    checkTheEmail({ email })
      .then((res) => {
        window.location = `/user/find_pw_2?email=${email}`;
      })
      .catch((_) => {
        setModalState(true);
        // alert("존재 하지 않는 이메일 입니다!");
      });
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
      <div className="login find- find-1">
        <h1 className="display-5-B flex_">
          비밀번호 찾기
          <div className="flex_">
            <Badge value="1" />
            <Badge value="2" />
            <Badge value="3" />
          </div>
        </h1>
        <p className="body-3-R sub-title txt-second-default">
          가입한 아이디를 입력해 주세요.
        </p>
        <div className="login-form">
          <Input
            importState="none"
            labelText="이메일"
            placeholder="이메일을 입력해주세요."
            valueType=""
            helperTextResult="none"
            iconState="true"
            state={email}
            setState={setEmail}
          />
          <Link href="/user/find_pw_1">
            <LoginBtn text="다음" onclick={checkEmail} />
          </Link>
          <div className="flex_ body-3-R find-id">
            <Link href="/user/find_id">
              <TextBtn text="혹시 이메일을 잊으셨나요?" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Component;
