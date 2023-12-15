import React, {useState} from "react";
import Icon from "/src/components/icon/icon.tsx";

const Component = (props) => {
	const [ search, setSearch ] = useState("");
	const onChange = (e) => {
		setSearch(e.target.value);
		props.setState(e.target.value);
		props.onchange(e.target.value);
	}

	const filterTitle = props.data.filter((p) => {
		return p.name.replace(" ","").toLocaleLowerCase().includes(search.toLocaleLowerCase());
	})
	return(
		<div className="search-container">
			<div className="input-wrap radius-8 border-gray-4 bg-lightGray">
				<input 
					className="body-3-R txt-primary" 
					type="text" 
					placeholder="검색어를 입력해 주세요."
					value={search}
					onChange={onChange}	
				/>
				<span className="icon_serach">
					<Icon size={16} color="#574AFF" stroke="" icon="search" />
				</span>
			</div>
			<div className="wrap radius-8 border-gray-4" style={{display: (props.data.length == 0 || search === '') ? 'none' : 'block'}}>
				<div className="flex_ result-search-box body-3-R ">
					{
						props.data.map(dummy => <span>{dummy.name}</span>)
					}
				</div>
			</div>
		</div>
	)
} 
export default Component;