import Icon from "/src/components/icon/icon.tsx";


const dummy = [
	{
		id: 1,
		title : "TestDate 1",
	},
	{
		id: 2,
		title : "TestDate 2",
	},
	{
		id: 3,
		title : "TestDate 3",
	},
	{
		id: 4,
		title : "TestDate 4",
	},
	{
		id: 5,
		title : "d",
	},
	{
		id: 6,
		title : "c",
	},
	{
		id: 7,
		title : "b",
	},
	{
		id: 8,
		title : "a",
	},
	{
		id: 9,
		title : "ㄱㄴㄷㄹ",
	},
	{
		id: 10,
		title : "ㅁㅂ ㅅㅇ",
	},
	{
		id: 11,
		title : "ㅈㅋㅍㅎ",
	},
]

const Component = () => {
	const [ search, setSearch ] = useState("");
	const onChange = (e) => {
		props.setState(e.target.value);
		props.onchange();
	}

	const filterTitle = dummy.filter((p) => {
		return p.title.replace(" ","").toLocaleLowerCase().includes(search.toLocaleLowerCase());
	})
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