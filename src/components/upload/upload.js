import React from 'react';
import 'scss/public.scss'
import 'scss/components_style.scss'
import Icon from 'components/icon/icon.tsx'
import Label from 'components/label/label'
import ButtonSecondaryS from "components/buttons/button_secondary_s";

const Component = (props) => {
	return(
		<div className={`upload-container radius-8 ${props.state} ${props.type}`}>
			<div className="img-box">
				<img className="img-file" src="images/file.png" alt="file" />
				<img className="img-preview" src="images/sample-img.png" alt="file" />
				<Label backgroundColor="bg-violet-5" fontColor="txt-violet-1" text="보고서" icon="false" iconColor=""/>
			</div>
			<div className="text-box body-3-R">
				<div className="normal-box">
					업로드할 파일을 드래그하거나<br />
					<span>업로드</span>해주세요
				</div>
				<div className="technology-box">
					원하는 <span>기술문서를 선택</span>해 주세요.
				</div>
			</div>
			<div className="proceeding-box">
				<div className="flex_ title-line body-3-B">
					<span>파일명.확장자</span>
					<Icon icon="cancel" size={9} color="#464749" stroke=''/>
				</div>
				<div className="proceeding-line radius-8">
					<span></span>
				</div>
				<div className="sub-text-line flex_ caption-R">
					<span>
						파일크기 mb
					</span>
					<span className="situation">
						업로드 중... 5%
					</span>
				</div>
			</div>
			<div className="done-box">
				<div className="done-technology-text-box flex_">
					<div className="text-wrap">
						<h6 className="body-3-B">기술문서명</h6>
						<p className="caption-R">연구자명<span>|</span>등록연도</p>
					</div>
					<Icon icon="cancel" size={9} color="#464749" stroke=''/>
				</div>

				<div className="done-normal-text-box flex_">
					<div className="text-wrap">
						<h6 className="body-3-B">파일명.확장자</h6>
						<p className="caption-R">파일크기 mb</p>
					</div>
					<Icon icon="cancel" size={9} color="#464749" stroke=''/>
				</div>

				<div className="done-preview-text-box flex_">
					<div className="text-wrap">
						<h6 className="body-3-B">파일명.확장자</h6>
						<p className="caption-R">파일크기 mb</p>
					</div>
					<div className="flex_">
						<ButtonSecondaryS text="AI 수정"/>
						<Icon icon="cancel" size={9} color="#464749" stroke=''/>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Component;