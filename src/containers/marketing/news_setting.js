import React from "react";
import Link from "next/link"
import Icon from "/src/components/icon/icon.tsx"
import ButtonPrimary from "/src/components/buttons/button_primary_s"
import Tab from "/src/components/tabs/news_tab_fixed"
import Input from "/src/components/textFields/textInput.tsx"
import Upload from "/src/components/upload/upload"
import OutlineBtn from "/src/components/buttons/button_outline_l"
import PrimaryBtn from "/src/components/buttons/button_primary_l"

const Component = () => {

	const TabContents = () => {
		return(
			<div className="sub-page-0">
				<div className="input-box">
					<Input labelText="기관명" placeholder="기관명을 입력해 주세요." valueType="" helperTextResult="none" iconState="false"/>
				</div>

				<div className="input-box">
					<Input labelText="메인컬러" placeholder="메인컬러를 입력해 주세요." valueType="" helperTextResult="none" iconState="false"/>
				</div>

				<div className="input-box">
					<p className="body-2-B txt-second-default">프로필<span className="txt-violet-1">*</span></p>
					<Upload state="default" type="normal"/>
					<p className="caption-R helper-txt">
						허용 사이즈: <span>813px x 540px</span> <span className="bar">|</span> 파일 형식: <span>JPG,PNG,JPEG</span><span className="bar">|</span> 최대 파일 크기: <span>100mb</span>
					</p>
				</div>
			</div>
		)
	}

	return(
		<div className="container">
			<div className="page-wrap">
				<div className="marketing-contents email-history news-history">
					<h1 className="display-5-B flex_">
						뉴스레터 발송 관리
						<div className="flex_ body-3-R txt-second-default bg-violet-6">
							<span className="flex_">
								<Icon icon="mail" size={9} color="#574AFF" stroke="none" />
								남은 발송 횟수
							</span>
							<span className="flex_">
								<span className="txt-red body-3-B">
									0
								</span>
								/
								<span className="txt-primary body-3-B total-cnt">
									7000
								</span>
							</span>
							<Link href="/marketing/email_writer">
								<ButtonPrimary text="이메일 발송" />
							</Link>
						</div>
					</h1>
					<Tab active={0}/>
					<TabContents />
					<div className="button-wrap flex_">
						<OutlineBtn text="초기화" state="disabled"/>
						<PrimaryBtn text="저장" state="disabled"/>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Component;