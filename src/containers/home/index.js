import React from 'react';
import Label from "components/label/label";

const Component = () => {
	return(
		<div className="page-wrap">
			<div className='home-container bg-violet-6'>
				<div className="content-container">

					<div className='head-wrap flex_'>
						<img src="/images/user_icon_l.png" alt="user_icon_l" />
						<h1 className='display-5-B '>
							환영합니다. <span className="txt-violet-1">[이름]</span>님
						</h1>
					</div>

					<div className='flex_ box_ radius-20'>
						<span>
							<Label backgroundColor="bg-violet-1" fontColor="txt-white" text="BASIC" icon="false" iconColor=""/>
							<p className="body-3-R"></p>
						</span>
					</div>

				</div>
			</div>
		</div>
	)
};

export default Component;