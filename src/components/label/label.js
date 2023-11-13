import React from 'react';
import Icon from 'components/icon/icon.tsx';
import 'scss/public.scss';
import 'scss/style.scss';

const Component = () => {
	return(
		<div className="flex_" style={{gap:'20px'}}>
			<div className="flex_" style={{flexDirection:'column', gap:'20px'}}>
				<div className="label-wrap flex_inline radius-8 label_ bg-violet-5 txt-violet-1 icon_label">
					<Icon size={13} color="#574AFF" stroke='' icon='ai'/>
					<p className="caption-R">
						label
					</p>
				</div>

				<div className="label-wrap flex_inline radius-8 label_ bg-violet-5 txt-violet-1">
					<p className="caption-R">
						label
					</p>
				</div>
			</div>

			<div className="flex_" style={{flexDirection:'column', gap:'20px'}}>
				<div className="label-wrap flex_inline radius-8 label_ bg-violet-1 txt-white icon_label">
					<Icon size={13} color="#fff" stroke='' icon='ai'/>
					<p className="caption-R">
						label
					</p>
				</div>

				<div className="label-wrap flex_inline radius-8 label_ bg-violet-1 txt-white">
					<p className="caption-R">
						label
					</p>
				</div>
			</div>

			<div className="flex_" style={{flexDirection:'column', gap:'20px'}}>
				<div className="label-wrap flex_inline radius-8 label_ bg-purple-1 txt-white icon_label">
					<Icon size={13} color="#fff" stroke='' icon='ai'/>
					<p className="caption-R">
						label
					</p>
				</div>

				<div className="label-wrap flex_inline radius-8 label_ bg-purple-1 txt-white">
					<p className="caption-R">
						label
					</p>
				</div>
			</div>

			<div className="flex_" style={{flexDirection:'column', gap:'20px'}}>
				<div className="label-wrap flex_inline radius-8 label_ bg-pink-1 txt-white icon_label">
					<Icon size={13} color="#fff" stroke='' icon='ai'/>
					<p className="caption-R">
						label
					</p>
				</div>

				<div className="label-wrap flex_inline radius-8 label_ bg-pink-1 txt-white">
					<p className="caption-R">
						label
					</p>
				</div>
			</div>

			<div className="flex_" style={{flexDirection:'column', gap:'20px'}}>
				<div className="label-wrap flex_inline radius-8 label_ bg-mint-1 txt-white icon_label">
					<Icon size={13} color="#fff" stroke='' icon='ai'/>
					<p className="caption-R">
						label
					</p>
				</div>

				<div className="label-wrap flex_inline radius-8 label_ bg-mint-1 txt-white">
					<p className="caption-R">
						label
					</p>
				</div>
			</div>

			<div className="flex_" style={{flexDirection:'column', gap:'20px'}}>
				<div className="label-wrap flex_inline radius-8 label_ bg-gold-1 txt-white icon_label">
					<Icon size={13} color="#fff" stroke='' icon='ai'/>
					<p className="caption-R">
						label
					</p>
				</div>

				<div className="label-wrap flex_inline radius-8 label_ bg-gold-1 txt-white">
					<p className="caption-R">
						label
					</p>
				</div>
			</div>

			<div className="flex_" style={{flexDirection:'column', gap:'20px'}}>
				<div className="label-wrap flex_inline radius-8 label_ bg-wrong-red-hover txt-white icon_label">
					<Icon size={13} color="#fff" stroke='' icon='ai'/>
					<p className="caption-R">
						label
					</p>
				</div>

				<div className="label-wrap flex_inline radius-8 label_ bg-wrong-red-hover txt-white">
					<p className="caption-R">
						label
					</p>
				</div>
			</div>

			<div className="flex_" style={{flexDirection:'column', gap:'20px'}}>
				<div className="label-wrap flex_inline radius-8 label_ bg-gray-6 txt-third icon_label">
					<Icon size={13} color="#B3B6B8" stroke='' icon='ai'/>
					<p className="caption-R">
						label
					</p>
				</div>

				<div className="label-wrap flex_inline radius-8 label_ bg-gray-6 txt-third">
					<p className="caption-R">
						label
					</p>
				</div>
			</div>
		</div>
	)
};
export default Component;