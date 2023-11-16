import React from 'react';
import 'scss/page_style.scss'


import Tab from "components/tabs/settings_tab_fixed";
import Input from "components/textFields/textInput.tsx";
import TextArea from "components/textFields/textArea.tsx";
import Upload from "components/upload/upload"

const Component = () => {
	return(
		<div className="container">
			<div className="page-wrap">
				<div className="setting-contents">
					<h1 className="display-5-B">사이트 설정</h1>
					<Tab />
					<Input labelText="사이트 이름" placeholder="사이트 이름을 입력해주세요." valueType="" helperTextResult="none"/>
					<TextArea labelText="사이트 소개" placeholder="사이트 소개를 입력해 주세요." valueType="" helperTextResult="none"/>
					<div className="favicon-wrap">
						<p className='caption-B'>파비콘</p>
						<Upload state="default" type="normal"/>
						<p className="caption-R helper-txt">
							허용 사이즈: <span>16px x 16px</span> | 파일 형식: <span>ICO</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Component;