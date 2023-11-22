import React from "react";

import Icon from "/src/components/icon/icon.tsx";
const Component = () => {
	return(
		<div>
			<div className="pagnation-container body-3-R pagnation-R flex_">
				<span className="pagnation_box arrow">
					<Icon size={13} color="" stroke="none" icon="chevronLeft" />
				</span>
				<div className="flex_ pagnation-wrap">
					<span className="pagnation_box active">
						1
					</span>
					<span className="pagnation_box">
						2
					</span>
					<span className="pagnation_box">
						3
					</span>
					<span className="pagnation_box">
						4
					</span>
					<span className="pagnation_box">
						5
					</span>
					<span className="pagnation_box">
						6
					</span>
					<span className="pagnation_box">
						7
					</span>
					<span className="pagnation_box">
						8
					</span>
					<span className="pagnation_box">
						9
					</span>
					<span className="pagnation_box">
						10
					</span>
				</div>
				<span className="pagnation_box arrow">
					<Icon size={13} color="" stroke="none" icon="chevronRight" />
				</span>
			</div>

			<div style={{margin:"20px"}} />

			<div className="pagnation-container body-3-R pagnation-R flex_">
				<span className="pagnation_box arrow disabled">
					<Icon size={13} color="" stroke="none" icon="chevronLeft" />
				</span>
				<div className="flex_ pagnation-wrap">
					<span className="pagnation_box disabled">
						1
					</span>
					<span className="pagnation_box disabled">
						2
					</span>
					<span className="pagnation_box disabled">
						3
					</span>
					<span className="pagnation_box disabled">
						4
					</span>
					<span className="pagnation_box disabled">
						5
					</span>
					<span className="pagnation_box disabled">
						6
					</span>
					<span className="pagnation_box disabled">
						7
					</span>
					<span className="pagnation_box disabled">
						8
					</span>
					<span className="pagnation_box disabled">
						9
					</span>
					<span className="pagnation_box disabled">
						10
					</span>
				</div>
				<span className="pagnation_box arrow disabled">
					<Icon size={13} color="" stroke="none" icon="chevronRight" />
				</span>
			</div>

			<div style={{margin:"20px"}} />

			<div className="pagnation-container body-3-R pagnation-S flex_">
				<span className="pagnation_box arrow">
					<Icon size={13} color="" stroke="none" icon="chevronLeft" />
				</span>
				<div className="flex_ pagnation-wrap">
					<span className="pagnation_box active">
						1
					</span>
					<span className="pagnation_box">
						2
					</span>
					<span className="pagnation_box">
						3
					</span>
					<span className="pagnation_box">
						4
					</span>
					<span className="pagnation_box">
						5
					</span>
					<span className="pagnation_box">
						6
					</span>
					<span className="pagnation_box">
						7
					</span>
					<span className="pagnation_box">
						8
					</span>
					<span className="pagnation_box">
						9
					</span>
					<span className="pagnation_box">
						10
					</span>
				</div>
				<span className="pagnation_box arrow">
					<Icon size={13} color="" stroke="none" icon="chevronRight" />
				</span>
			</div>
		</div>
	)
};
export default Component;