import React from "react";
import LoginBtn from "/src/components/buttons/button_primary_l";
import { kotechUrl } from "/src/asset/config/config.json";
import Link from "next/link";

const Component = () => {
  const verification = async () => {
    window.addEventListener("message", (message) => {
			if(message.data != '') {
				console.log(message.data);
				window.location = `/user/find_result_id?hpno=${message.data}`;
			}
    });

    const left = window.screen.width / 2 - 500 / 2;
    const top = window.screen.height / 2 - 800 / 2;
    const option = `menubar=no, toolbar=no, resizable=no, width=500, height=600, left=${left}, top=${top}`;
    const origin = url.origin;
    await window.open(
      `${kotechUrl}/api/v1/nice/encrypt/data?returnUrl=${kotechUrl}/api/v1/nice/decrypt/data&redirectUrl=${origin}/user/verification?to=/user/find_id`,
      "nicePopup",
      option
    );
  };

  return (
    <div className="login waiting-sign-up">
      <h1 className="display-5-B">아이디 찾기</h1>
      <p className="body-3-R sub-title txt-second-default">
        아이디를 찾기 위해 먼저 휴대전화로 <br />
        본인인증 해주세요.
      </p>
      <Link href="/user/find_id">
        <LoginBtn text="본인인증" onclick={verification} />
      </Link>
    </div>
  );
};
export default Component;
