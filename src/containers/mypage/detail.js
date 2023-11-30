import React, { useState } from "react";
import Icon from "/src/components/icon/icon.tsx"
import Input from "/src/components/textFields/textInput.tsx"
import InputPassword from "/src/components/textFields/passwordInput.tsx"
import ButtonSecondary from "/src/components/buttons/button_secondary_l"
import Upload from "/src/components/upload/upload"
import OutlineBtn from "/src/components/buttons/button_outline_l"
import PrimaryBtn from "/src/components/buttons/button_primary_l"
import Label from "/src/components/label/label";

const Component = () => {

	return(
		<div className="container">
			<div className="page-wrap">
				<div className="mypage-contents mypage-detail">
					<h1 className="display-5-B">마이페이지</h1>

					<div className="title-box flex_ bg-lightGray body-3-R">
						<div className="flex_ txt-third">
							<Icon icon="card" size={13} stroke="#b3b6b8" color="none" />
							나의 플랜
						</div>
						<div className="flex_">
							<span className="txt-violet-1 txt_">
								만료까지 [N]일 남았어요.
							</span>
							<Label text="BASIC" backgroundColor="bg-violet-1" fontColor="txt-white" icon="false" />
							N개월
						</div>
					</div>

					<div className="flex_ button-input">
						<Input importState="" labelText="이메일" placeholder="kotech@kotech.co.kr" valueType="" helperTextResult="none" iconState="true"/>
						<ButtonSecondary text="중복 확인" state="disabled"/>
					</div>

					<div className="flex_ button-input">
						<InputPassword importState="" labelText="비밀번호" placeholder="*******" valueType="" helperTextResult="none" iconState="true"/>
						<ButtonSecondary text="변경" state="defalut"/>
					</div>

					<div className="flex_ button-input">
						<Input importState="" labelText="휴대폰 번호" placeholder="01012345678" valueType="" helperTextResult="none" iconState="false"/>
						<ButtonSecondary text="변경" state="defalut"/>
					</div>

					<div className="box-">
						<Input importState="" labelText="이름" placeholder="미나 마수드" valueType="" helperTextResult="none" iconState="false"/>
					</div>

					<div className="box-">
						<Input importState="none" labelText="닉네임" placeholder="알라딘" valueType="" helperTextResult="none" iconState="false"/>
					</div>

					<div className="box-">
						<p className="body-2-B txt-second-default">프로필</p>
						<Upload state="default" type="normal"/>
						<p className="caption-R helper-txt">
							허용 사이즈: <span>800px x 800px</span> <span className="bar">|</span> 파일 형식: <span>JPG,PNG,JPEG</span><span className="bar">|</span> 최대 파일 크기: <span>100mb</span>
						</p>
					</div>

					<div className="flex_ input-search">
						<Input labelText="소속" placeholder="한국기술HUB" valueType="" helperTextResult="none" iconState="false"/>
						<Icon icon="search" size={16} stroke="#EAEDF0" fill="none" /> 
					</div>

					<div className="flex_ button-input">
						<Input importState="" labelText="소속 전화번호" placeholder="01012345678" valueType="" helperTextResult="none" iconState="false"/>
						<ButtonSecondary text="변경" state="defalut"/>
					</div>

					<div className="button-wrap flex_">
						<OutlineBtn text="탈퇴" state="default"/>
						<PrimaryBtn text="저장" state="default"/>
					</div>

				</div>
			</div>
		</div>
	)
}
export default Component;