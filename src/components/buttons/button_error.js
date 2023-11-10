import React, {useState} from 'react';
import Icon from "components/icon/icon.tsx";
import 'scss/public.scss'
import 'scss/style.scss'

const Component = () => {
	const [isButton, setButton ] = useState(false);

	const onClickActive = () => {
		setButton(!isButton);
	}

	const ButtonErrorS = () => {
		return(
		<button className={`btn_ radius-8 wrong-red btn-s caption-R ${isButton ? 'pressed' : ''}`} onClick={onClickActive} >
			<span className="flex_">
				<Icon size={8.3} color='#fff' stroke='#fff' icon='plus' />
				label 
				<Icon size={9} color='#fff' stroke='#fff' icon='chevronRight' />
			</span>
		</button>
		)
	}

	const ButtonErrorM = () => {
		return(
		<button className={`btn_ radius-8 wrong-red btn-m body-3-R ${isButton ? 'pressed' : ''}`} onClick={onClickActive} >
			<span className="flex_">
			<Icon size={8.3} color='#fff' stroke='#fff' icon='plus' />
				label 
				<Icon size={9} color='#fff' stroke='#fff' icon='chevronRight' />
			</span>
		</button>
		)
	}

	const ButtonErrorL = () => {
		return(
		<button className={`btn_ radius-8 wrong-red btn-l body-2-R ${isButton ? 'pressed' : ''}`} onClick={onClickActive} >
			<span className="flex_">
				<Icon size={11.6} color='#fff' stroke='#fff' icon='plus' />
					label 
				<Icon size={13} color='#fff' stroke='#fff' icon='chevronRight' />
			</span>
		</button>
		)
	}

	const ButtonErrorXl = () => {
		return(
		<button className={`btn_ radius-8 wrong-red btn-xl body-1-R ${isButton ? 'pressed' : ''}`} onClick={onClickActive} >
			<span className="flex_">
			<Icon size={11.6} color='#fff' stroke='#fff' icon='plus' />
				label 
				<Icon size={13} color='#fff' stroke='#fff' icon='chevronRight' />
			</span>
		</button>
		)
	}

	return(
		<div className='flex_' style={{gap:'20px'}}>
			<span>
				<ButtonErrorS />
				<p style={{margin:'20px'}} />
				<button className={'btn_ radius-8 wrong-red btn-s caption-R disabled'} >
					<span className="flex_">
					<Icon size={8.3} color='inherit' stroke='inherit' icon='plus' />
						label 
						<Icon size={9} color='inherit' stroke='inherit' icon='chevronRight' />
					</span>
				</button>
			</span>
			
			<span>
				<ButtonErrorM />
				<p style={{margin:'20px'}} />
				<button className={'btn_ radius-8 wrong-red btn-m body-3-R disabled'} >
					<span className="flex_">
						<Icon size={8.3} color='inherit' stroke='inherit' icon='plus' />
							label 
						<Icon size={9} color='inherit' stroke='inherit' icon='chevronRight' />
					</span>
				</button>
			</span>

			<span>
				<ButtonErrorL />
				<p style={{margin:'20px'}} />
				<button className={'btn_ radius-8 wrong-red btn-l body-2-R disabled'} >
					<span className="flex_">
					<Icon size={11.6} color='inherit' stroke='inherit' icon='plus' />
						label 
						<Icon size={13} color='inherit' stroke='inherit' icon='chevronRight' />
					</span>
				</button>
			</span>

			<span>
				<ButtonErrorXl />
				<p style={{margin:'20px'}} />
				<button className={'btn_ radius-8 wrong-red btn-xl body-1-R disabled'} >
					<span className="flex_">
					<Icon size={11.6} color='inherit' stroke='inherit' icon='plus' />
						label 
						<Icon size={13} color='inherit' stroke='inherit' icon='chevronRight' />
					</span>
				</button>
			</span>
		</div>
	)
}
export default Component;