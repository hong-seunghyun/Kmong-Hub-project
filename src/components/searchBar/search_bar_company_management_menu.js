import Icon from "/src/components/icon/icon.tsx";

const Component = (props) => {
	const onChange = (e) => {
		props.setState(e.target.value);
		props.onchange();
	}

	return(
		<div className="search-container">
			<div className="input-wrap radius-8 border-gray-4 bg-lightGray">
				<input 
					className="body-3-R txt-primary" 
					type="text" 
					placeholder="검색어를 입력해 주세요."
					value={props.state}
					onChange={onChange}	
				/>
				<span className="icon_serach">
					<Icon size={16} color="#574AFF" stroke="" icon="search" />
				</span>
			</div>
		</div>
	)
} 
export default Component;