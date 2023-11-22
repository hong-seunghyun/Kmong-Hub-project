import React from "react";


const Component = (props) => {
	const propsACtiveNumber = props.activeSubTab;

	const userGuideA = () => {
    window.location.href="/etc/user-guide-01";
  };
	const userGuideB = () => {
    window.location.href="/etc/user-guide-02";
  };

	return(
		<div className="tab-container">
			<ul className="flex_">
				<li className={`tab-item body-3-B ${props.active === 0 ? "active" : ""}`}>
					<span onClick={()=>{
							userGuideA();
						}}>
						개인정보 처리방침
					</span>
				</li>

				<li className={`tab-item body-3-B ${props.active === 1 ? "active" : ""}`}>
					<span onClick={()=>{
							userGuideB();
						}}>
						이용약관
					</span>
				</li>
			</ul>
		</div>
	)
}
export default Component;