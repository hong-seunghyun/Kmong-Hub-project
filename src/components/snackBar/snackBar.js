import React from 'react';
import Icon from 'components/icon/icon.tsx';
import 'scss/public.scss';
import 'scss/style.scss';

const Component = () => {
	return(
		<div className="snackBar-container flex_ radius-8">
			<Icon size={24} color="#574AFF" stroke='' icon='checkCircle'/>
			<p className="body-2-R">
				비밀번호가 변경되었어요.
			</p>
			<Icon size={9} color="#B3B6B8" stroke="none" icon="cancel" className="cancel" />
		</div>
	)
};
export default Component;