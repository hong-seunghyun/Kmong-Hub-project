import React, { useState } from "react";
import Icon from "/src/components/icon/icon.tsx";

const Component = (props) => {
	const [ search, setSearch ] = useState("");
	const [ toggle, setToggle ] = useState(false);

  const dummy = props.datas;

	const onChange = (e) => {
		setSearch(e.target.value);
		setToggle(true);
	}

	const onClick = () => {
		setSearch('');
		setToggle(!toggle);
	}

	const onBlur = () => {
		setToggle(false);
	}

	let filterTitle;

	if(dummy) {
		filterTitle = dummy.filter((p) => {
			return p.title.replace(" ","").toLocaleLowerCase().includes(search.toLocaleLowerCase());
		})
	}
	
	return(
		<div className="drops-menu-container">
			<div className="input-wrap radius-8 border-gray-4 bg-lightGray">
				<input 
					className="body-3-R txt-primary" 
					type="text" 
					placeholder={props.placeholder}
					value={search}
					onChange={onChange}
					onBlur={onBlur}
				/>
				<span className="icon_serach">
					<Icon size={9} color="#464749" stroke="" icon="chevronDown" onClick={onClick}/>
				</span>
			</div>
			<div className="wrap radius-8 border-gray-4" style={{display: toggle ? "block" : "none"}}>
				<div className="flex_ result-search-box  body-3-R ">
					{
						dummy && filterTitle.map(dummy => <span onClick={() => {
							setSearch(dummy.title);
							setToggle(false);
							props.setState(dummy.id);
						}}>{dummy.title}</span>)
					}
				</div>
			</div>
		</div>
	)
} 
export default Component;
