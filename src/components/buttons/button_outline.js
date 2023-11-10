import React, {useState} from 'react';
import 'scss/public.scss'
import 'scss/style.scss'

const Component = () => {
	const [isButton, setButton ] = useState(false);

	const onClickActive = () => {
		setButton(!isButton);
	}

	const ButtonOutlineS = () => {
		return(
			<button className={`btn_ border-gray-3 radius-8 bg-white btn-s caption-R ${isButton ? 'pressed' : ''}`} onClick={onClickActive} >
				label
			</button>
		)
	}

	const ButtonOutlineM = () => {
		return(
			<button className={`btn_ border-gray-3 radius-8 bg-white btn-m body-3-R ${isButton ? 'pressed' : ''}`} onClick={onClickActive} >
				label
			</button>
		)
	}

	const ButtonOutlineL = () => {
		return(
			<button className={`btn_ border-gray-3 radius-8 bg-white btn-l body-2-R ${isButton ? 'pressed' : ''}`} onClick={onClickActive} >
				label
			</button>
		)
	}

	const ButtonOutlineXl = () => {
		return(
			<button className={`btn_ border-gray-3 radius-8 bg-white btn-xl body-1-R ${isButton ? 'pressed' : ''}`} onClick={onClickActive} >
				label
			</button>
		)
	}

	return(
		<div className='flex_' style={{gap:'20px', }}>
			<span>
				<ButtonOutlineS />
				<p style={{margin:'20px'}} />
				<button className={'btn_ border-gray-4 radius-8 bg-white btn-s body-3-R disabled'} >
					label
				</button>
			</span>
			
			<span>
			<ButtonOutlineM />
				<p style={{margin:'20px'}} />
				<button className={'btn_ border-gray-4 radius-8 bg-white btn-m body-3-R disabled'} >
					label
				</button>
			</span>

			<span>
			<ButtonOutlineL />
				<p style={{margin:'20px'}} />
				<button className={'btn_ border-gray-4 radius-8 bg-white btn-l body-3-R disabled'} >
					label
				</button>
			</span>

			<span>
			<ButtonOutlineXl />
				<p style={{margin:'20px'}} />
				<button className={'btn_ border-gray-4 radius-8 bg-white btn-xl body-3-R disabled'} >
					label
				</button>
			</span>
		</div>
	)
}
export default Component;