import React, {useState} from "react";
import Icon from "/src/components/icon/icon.tsx";

const Component = (props) => {
	const [ search, setSearch ] = useState("");

	const dummy = props.datas;

	const onChange = (e) => {
		setSearch(e.target.value);
	}

	const filterTitle = dummy.filter((p) => {
		return p.title.replace(" ","").toLocaleLowerCase().includes(search.toLocaleLowerCase());
	})
	return(
		<div className="drops-menu-container">
			<div className="input-wrap radius-8 border-gray-4 bg-lightGray">
				<input 
					className="body-3-R txt-primary" 
					type="text" 
					placeholder={props.placeholder}
					value={search}
					onChange={onChange}	
				/>
				<span className="icon_serach">
					<Icon size={9} color="#464749" stroke="" icon="chevronDown" />
				</span>
			</div>
			<div className="wrap radius-8 border-gray-4">
				<div className="flex_ result-search-box  body-3-R ">
					{
						filterTitle.map(dummy => <span>{dummy.title}</span>)
					}
				</div>
			</div>
		</div>
	)
} 
export default Component;