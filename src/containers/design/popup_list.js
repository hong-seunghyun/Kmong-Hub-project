import React from "react";
import ButtonM from "/src/components/buttons/button_primary_m";
import DropDownMenu from "/src/components/dropsMenu/drops_company_management_menu";
import SearchBar from "/src/components/searchBar/search_bar_none_drops_menu";
import TableHead from "/src/components/table/popup_table_head";
import TableCell from "/src/components/table/popup_table_cell";
import Pagnation from "/src/components/pagnation/pagnation";
import Link from "next/link";
import { useState } from "react";
import { getPopUp } from "../../asset/apis/design/popup";
import { useLayoutEffect } from "react";

const Component = () => {

	const [ searchValue, setSaerchValue ] = useState('');
	const [ page, setPage ] = useState(1);

	const onchange = () => {
		getPopUp(page, 1, searchValue).then(res => {
			console.log(res.data);
		}).catch(err => {
			console.log(err);
		});
	}

	useLayoutEffect(() => {
		onchange();	
	}, []);

	return(
		<div className="page-wrap">
			<div className="design- design-popup">

			<div className="head-wrap flex_">
						<h1 className="display-5-B">
							팝업 관리
						</h1>
						<Link href="/design/popup_add">
							<ButtonM text="팝업 생성" />
						</Link>
					</div>

					<div>
						<div className="flex_ search-wrap">
							<DropDownMenu />
							<SearchBar state={searchValue} setState={setSaerchValue} onchange={onchange}/>
						</div>

						<div className="table-container">
						<TableCell 
								title="[팝업 이름]"
								pc="/images/file.png"
								mobile="/images/file.png"
								dateFrom="YYYY.MM.DD"
								dateTo="YYYY.MM.DD"
								label="노출 중"
								labelBg="bg-violet-1"
								labelColor="txt-white"
								link="/design/popup_detail"
							/>
							<TableCell 
								title="[팝업 이름]"
								pc="/images/file.png"
								mobile="/images/file.png"
								dateFrom="YYYY.MM.DD"
								dateTo="YYYY.MM.DD"
								label="노출 안함"
								labelBg="bg-violet-5"
								labelColor="txt-violet-1"
								link="/design/popup_detail"
							/>
							<Pagnation size="regular" pageIdx={page}/>
						</div>
					</div>
				</div>
				
			</div>
	)
};

export default Component;