import React, { useEffect, useLayoutEffect, useState } from "react";
import Link from "next/link"
import TableHead from "/src/components/table/table_vertical_head";
import TableCell from "/src/components/table/table_vertical_cell";
import Pagnation from "/src/components/pagnation/pagnation";
import ButtonM from "/src/components/buttons/button_primary_m";
import DropDownMenu from "/src/components/dropsMenu/drops_company_management_menu";
import SearchBar from "/src/components/searchBar/search_bar_company_management_menu";
import { getResearcherCategory } from "../../asset/apis/contents/researcher";

const Component = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    alert('검색, 페이지네이션 기능은 임시 비활성화 상태입니다.')
  }, [])

  useLayoutEffect(() => {
    (async function() {
      const res = await getResearcherCategory();
      if(res.status === 200) {
        setData(res.data.data)
      }
    })()
  }, [])

	const TabContents = () => {
		return(
			<div className="sub-page-0">
        {/*
				<div className="flex_ search-wrap">
					<DropDownMenu />
					<SearchBar />
				</div>
        */}
				<div className="table-container">
					<TableHead
						headChoice="번호"
						headTitle="소속"
						headWriter="부서/학과"
						headDate="등록일"
						headEtc="관리"
					/>
          {data.map(({catgNm, catgNo, createdDate, ucmdNm }, idx) => {
            const date = new Date(createdDate);
            const year = date.getFullYear();
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const day = date.getDate().toString().padStart(2, '0');
            const dateStr = `${year}.${month}.${day}`
            return <TableCell 
              choice="number"
              number={`${catgNo}`}
              title={ucmdNm}
              writer={catgNm}
              date={dateStr}
              link={`/researcher/company_detail?no=${catgNo}`}
            />
          })}
          {/*<Pagnation size="regular"/>*/}
				</div>
			</div>
		)
	}

	return(
		<div className="container">
			<div className="page-wrap">
				<div className="researcher-contents researcher-company">
					<div className="head-wrap flex_">
						<h1 className="display-5-B">
							소속 정보
						</h1>
						<Link href="/researcher/company_add">
							<ButtonM text="부서/학과 등록" />
						</Link>
					</div>
					<TabContents />
				</div>
			</div>
		</div>
	)
}
export default Component;
