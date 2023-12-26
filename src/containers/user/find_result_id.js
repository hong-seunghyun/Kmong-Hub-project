import React from "react";
import LoginBtn from "/src/components/buttons/button_primary_l";
import OutlineBtn from "/src/components/buttons/button_outline_l";
import Link from "next/link";
import { findEmail } from "../../asset/apis/verification";
import { useState } from "react";
import { useRouter } from "next/router";
import { useLayoutEffect } from "react";
import Modal from "/src/components/modal/modal.js";

const Component = () => {
  const [email, setEmail] = useState("");
  const [createdDate, setCreatedDate] = useState("");

  const [mobileNo, setMobileNo] = useState("");

  const [modalState, setModalState] = useState(false);
  const [modalValue, setModalValue] = useState({
    text: "사이트를 이용하시려면, 회원가입해 주세요.",
    title: "회원가입하신 내역이 없어요.",
  });

  const router = useRouter();

  useLayoutEffect(() => {
    if (!router.isReady) return;
    if (router.query.hpno == null || router.query.hpno == "") return;
    setMobileNo(router.query.hpno);
    const hpNo = mobileNo
      .replace(/[^0-9]/g, "")
      .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
      .replace(/(\-{1,2})$/g, "");
    console.log(hpNo);
    findEmail({ hpNo })
      .then((res) => {
        setEmail(res.data.data.email);
        setCreatedDate(`${res.data.data.createdDate} 가입`);
      })
      .catch((err) => {
        setModalState(true);
        setEmail("찾으시는 이메일이 없습니다!");
        setCreatedDate("회원가입을 먼저 해주세요!");
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
      <div className="login waiting-sign-up find-">
        <h1 className="display-5-B">이메일 찾기 결과</h1>
        <div className="body-3-R sub-title-box txt-second-default radius-8 bg-lightGray">
          <p className="body-2-B">{email}</p>
          <p className="body-3-R txt-third">{createdDate}</p>
        </div>
        <Link href="/user/login">
          <LoginBtn text="로그인" />
        </Link>
        <Link href="/user/find_pw_1">
          <OutlineBtn text="비밀번호 찾기" />
        </Link>
      </div>
    </>
  );
};
export default Component;
