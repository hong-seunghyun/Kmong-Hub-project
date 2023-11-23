import React from "react";


const Component = (props) => {
	const propsACtiveNumber = props.activeSubTab;

	const contentsDefaultLink = () => {
    window.location.href="/contents";
  };
	const settingNewsLink = () => {
    window.location.href="/contents/news";
  };
	const settingEventLink = () => {
    window.location.href="/contents/event";
  };
	const settingSupportLink = () => {
    window.location.href="/contents/support";
  };
	const settingContentsLink = () => {
    window.location.href="/contents/contents";
  };


	return(
		<div className="tab-container">
			<ul className="flex_">
				<li className={`tab-item body-3-B ${props.active === 0 ? "active" : ""}`}>
					<span onClick={()=>{
							contentsDefaultLink();
						}}>
						기술이전
					</span>
				</li>

				<li className={`tab-item body-3-B ${props.active === 1 ? "active" : ""}`}>
					<span onClick={()=>{
							settingNewsLink();
						}}>
						뉴스
					</span>
				</li>

				<li className={`tab-item body-3-B ${props.active === 2 ? "active" : ""}`}>
					<span onClick={()=>{
							settingEventLink();
						}}>
						행사
					</span>
				</li>

				<li className={`tab-item body-3-B ${props.active === 3 ? "active" : ""}`}>
					<span onClick={()=>{
							settingSupportLink();
						}}>
						지원 사업
					</span>
				</li>

				<li className={`tab-item body-3-B ${props.active === 4 ? "active" : ""}`}>
					<span onClick={()=>{
							settingContentsLink();
						}}>
						콘텐츠 노출
					</span>
				</li>
			</ul>
		</div>
	)
}
export default Component;