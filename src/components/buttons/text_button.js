import React, {useState} from 'react';
import Icon from "components/icon/icon.tsx";
import 'scss/public.scss'
import 'scss/style.scss'

const Component = () => {
	const [isButton, setButton ] = useState(false);

	const onClickActive = () => {
		setButton(!isButton);
	}

	const TextButtonUnderlineS = () => {
		return(
		<button className={`btn_ txt-second caption-R ${isButton ? 'pressed' : ''}`} onClick={onClickActive} >
			<span className="flex_">
				<Icon size={8.3} color='inherit' stroke='inherit' icon='plus' />
				label 
				<Icon size={9} color='inherit' stroke='inherit' icon='chevronRight' />
			</span>
		</button>
		)
	}

	const TextButtonUnderlineM = () => {
		return(
		<button className={`btn_ txt-second body-3-R ${isButton ? 'pressed' : ''}`} onClick={onClickActive} >
			<span className="flex_">
				<Icon size={8.3} color='inherit' stroke='inherit' icon='plus' />
				label 
				<Icon size={9} color='inherit' stroke='inherit' icon='chevronRight' />
			</span>
		</button>
		)
	}

	const TextButtonUnderlineL = () => {
		return(
		<button className={`btn_ txt-second body-2-R ${isButton ? 'pressed' : ''}`} onClick={onClickActive} >
			<span className="flex_">
				<Icon size={11.6} color='inherit' stroke='inherit' icon='plus' />
					label 
				<Icon size={13} color='inherit' stroke='inherit' icon='chevronRight' />
			</span>
		</button>
		)
	}

	const TextButtonUnderlineXl = () => {
		return(
		<button className={`btn_ txt-second body-1-R ${isButton ? 'pressed' : ''}`} onClick={onClickActive} >
			<span className="flex_">
				<Icon size={11.6} color='inherit' stroke='inherit' icon='plus' />
					label 
				<Icon size={13} color='inherit' stroke='inherit' icon='chevronRight' />
			</span>
		</button>
		)
	}

	return(
		<div className='flex_' style={{gap:'20px'}}>
			<span>
				<TextButtonUnderlineS />
			</span>
			
			<span>
				<TextButtonUnderlineM />
			</span>

			<span>
				<TextButtonUnderlineL />
			</span>

			<span>
				<TextButtonUnderlineXl />
			</span>
		</div>
	)
}
export default Component;