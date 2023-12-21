import React from "react";
import { useEffect, useRef, useState } from "react";
import ButtonL from "/src/components/buttons/button_outline_l"
import ButtonErrorL from "/src/components/buttons/button_error_l"
import Button from "/src/components/buttons/button_primary_l"
import Link from "next/link";
import Label from "/src/components/label/label";
import Editor from "/src/components/editorBox/index"
import TextBtn from "/src/components/buttons/text_button_underline_primary_m"
import { useLayoutEffect } from "react";
import { useRouter } from "next/router";
import { getOrgnDetails, getTechDetails } from "../../asset/apis/tech";
import { set } from "date-fns";

const Component = () => {
	const router = useRouter();
	const [ data, setData ] = useState({
		tcqNm: '기술기술',
		orgCntn: 'aaa',
		cpcVal: 'bbb',
		ipcVal: 'ccc',
		ivtNm: 'ddd',
		apyAd: 'eee',
		statCd: 'fff',
		rgstNo: 'ggg',
		apyNo: 'hhh',
		orgnNm: 'iii',
		techDocDetails: [
			{
				filePath: 'asdfasdf'
			}
		]
	});
	const [ isTabOne, setTabOne ] = useState(true);
	const [ isTabTwo, setTabTwo ] = useState(false);


	useLayoutEffect(() => {
		if(!router.isReady) return;
		const no = router.query.no;
		getTechDetails(no).then(res => {
			console.log(res.data);
			setData(res.data.data);
		}).catch(err => {
			console.log(err);
		});
	},[router.isReady]);


	const Tab = () => {
		const scrollRef = useRef(null);

		const [isDrag, setIsDrag] = useState(false);
		const [startX, setStartX] = useState();
		
	
		const onDragStart = (e) => {
			e.preventDefault();
			setIsDrag(true);
			setStartX(e.pageX + scrollRef.current.scrollLeft);
		};
	
		const onDragEnd = () => {
			setIsDrag(false);
		};
	
		const onDragMove = (e) => {
			if (isDrag) {
				const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;
		
				scrollRef.current.scrollLeft = startX - e.pageX;
		
				if (scrollLeft === 0) {
					setStartX(e.pageX);
				} else if (scrollWidth <= clientWidth + scrollLeft) {
					setStartX(e.pageX + scrollLeft);
				}
			}
		};
	
		const throttle = (func, ms) => {
			let throttled = false;
			return (...args) => {
				if (!throttled) {
					throttled = true;
					setTimeout(() => {
						func(...args);
						throttled = false;
					}, ms);
				}
			};
		};
	
		const delay = 100;
		const onThrottleDragMove = throttle(onDragMove, delay);

		const onClickTabOne = () => {
			setTabOne(true)
			setTabTwo(false)
		}

		const onClickTabTwo = () => {
			setTabOne(false)
			setTabTwo(true)
		}

	
		

		return(
			<div className="tab-container tab-scrollable" 
				ref={scrollRef}  
				onMouseDown={onDragStart}
				onMouseMove={isDrag ? onThrottleDragMove : null}
				onMouseUp={onDragEnd}
				onMouseLeave={onDragEnd}
			>
				<ul className="flex_">
					<li className={`tab-item body-2-B ${isTabOne? 'active':''}`}
					onClick={()=>{onClickTabOne()}}
					>
					<span>
						<Link href="#">
							기본 정보
							</Link>
						</span>
					</li>

					<li className={`tab-item body-2-B ${isTabTwo? 'active':''}`}
					onClick={()=>{onClickTabTwo()}}
					>
					<span>
						<Link href="#">
							상세 정보
							</Link>
						</span>
					</li>
				</ul>
			</div>
		)
	};


	const DetailA = () => {
		return(
			<table className="table-horizontal-container radius-20 body-3-R">
				<tbody>
					<tr>
						<th className="thead ">
							유형
						</th>
						<td className="tbody">
							<Label 
									backgroundColor="bg-violet-5" 
									fontColor="txt-violet-1" 
									text="논문" 
									icon="false" 
									iconColor=""
								/>
						</td>
					</tr>
					<tr>
						<th className="thead">
							연구기관
						</th>
						<td className="tbody">
							{data.orgnNm}
						</td>
					</tr>
					<tr>
						<th className="thead">
							문서번호
						</th>
						<td className="tbody">
							{data.tdcNo}
						</td>
					</tr>
					<tr>
						<th className="thead">
							출원일자
						</th>
						<td className="tbody">
							{data.apyAd}
						</td>
					</tr>
					<tr>
						<th className="thead">
							투고 여부
						</th>
						<td className="tbody">
							{data.sbmyn}
						</td>
					</tr>
					<tr>
						<th className="thead">
							발명자
						</th>
						<td className="tbody">
							{data.ivtNm}
						</td>
					</tr>
					<tr>
						<th className="thead">
						출처
						</th>
						<td className="tbody">
						{data.orgCntn}
						</td>
					</tr>
					<tr>
						<th className="thead">
						원문
						</th>
						<td className="tbody">
							<TextBtn text="PDF 보기" link={data.techDocDetails[0].filePath}/>
						</td>
					</tr>
				</tbody>
			</table>
		)
	}

	const DetailB = () => {

		return(
			<Editor />
		)
	}


	return data ? (
		<div className="container">
			<div className="page-wrap">
				<div className="contents- contents-technology contents-news contents-news-detail document-">
					<h1 className="display-5-B title flex_">
						{data.tcqNm}
					</h1>
					<Tab />
					
					<p className="table-caption body-2-B">기본 정보</p>
						
					{isTabOne === true && <DetailA />}
					{isTabTwo === true && <DetailB />}
					<div className="btn-wrap flex_">
						<div className="flex_">
							<Link href="/technical_document">
								<ButtonL text="목록으로" />
							</Link>
						</div>
						<div className="flex_">
							<Link href="#">
								<ButtonErrorL text="삭제 요청" />
							</Link>
							<Link href="/technical_document/retouch_patent">
								<Button text="수정 요청" />
							</Link>
						</div>
					</div>

				</div>
			</div>
		</div>
	) : (<></>)
}
export default Component;