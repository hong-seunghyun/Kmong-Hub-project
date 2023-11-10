import React, {useState} from 'react';
import Icon from "components/icon/icon.tsx";
import 'scss/public.scss'
import 'scss/style.scss'

const Component = () => {
	const [isButton, setButton ] = useState(false);

	const onClickActive = () => {
		setButton(!isButton);
	}

	const ButtonSecondaryS = () => {
		return(
			<button className={`btn_ radius-8 ac-purple btn-s caption-R ${isButton ? 'pressed' : ''}`} onClick={onClickActive} >
				<span className="flex_">
						<Icon size={8.3} color='#fff' stroke='#fff' icon='plus' />
						label 
						<Icon size={9} color='#fff' stroke='#fff' icon='chevronRight' />
				</span>
			</button>
		)
	}

	const ButtonSecondaryM = () => {
		return(
			<button className={`btn_ radius-8 ac-purple btn-m body-3-R ${isButton ? 'pressed' : ''}`} onClick={onClickActive} >
				<span className="flex_">
						<Icon size={8.3} color='#fff' stroke='#fff' icon='plus' />
						label 
						<Icon size={9} color='#fff' stroke='#fff' icon='chevronRight' />
				</span>
			</button>
		)
	}

	const ButtonSecondaryL = () => {
		return(
			<button className={`btn_ radius-8 ac-purple btn-l body-2-R ${isButton ? 'pressed' : ''}`} onClick={onClickActive} >
				<span className="flex_">
					<Icon size={11.6} color='#fff' stroke='#fff' icon='plus' />
						label 
						<Icon size={13} color='#fff' stroke='#fff' icon='chevronRight' />
				</span>
			</button>
		)
	}

	const ButtonSecondaryXl = () => {
		return(
			<button className={`btn_ radius-8 ac-purple btn-xl body-1-R ${isButton ? 'pressed' : ''}`} onClick={onClickActive} >
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
				<ButtonSecondaryS />
				<p style={{margin:'20px'}} />
				<button className={'btn_ radius-8 ac-purple btn-s caption-R disabled'} >
					<span className="flex_">
						<Icon size={8.3} color='inherit' stroke='inherit' icon='plus' />
							label 
						<Icon size={9} color='inherit' stroke='inherit' icon='chevronRight' />
					</span>
				</button>
			</span>
			
			<span>
			<ButtonSecondaryM />
				<p style={{margin:'20px'}} />
				<button className={'btn_ radius-8 ac-purple btn-m body-3-R disabled'} >
					<span className="flex_">
						<Icon size={8.3} color='inherit' stroke='inherit' icon='plus' />
							label 
						<Icon size={9} color='inherit' stroke='inherit' icon='chevronRight' />
					</span>
				</button>
			</span>

			<span>
			<ButtonSecondaryL />
				<p style={{margin:'20px'}} />
				<button className={'btn_ radius-8 ac-purple btn-l body-2-R disabled'} >
					<span className="flex_">
						<Icon size={11.6} color='inherit' stroke='inherit' icon='plus' />
							label 
							<Icon size={13} color='inherit' stroke='inherit' icon='chevronRight' />
					</span>
				</button>
			</span>

			<span>
			<ButtonSecondaryXl />
				<p style={{margin:'20px'}} />
				<button className={'btn_ radius-8 ac-purple btn-xl body-1-R disabled'} >
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