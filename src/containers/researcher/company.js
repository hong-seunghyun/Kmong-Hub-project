// @ts-check
import React, { useLayoutEffect, useState } from "react";
import Link from "next/link"
import TableHead from "/src/components/table/table_vertical_head";
import TableCell from "/src/components/table/table_vertical_cell";
import Pagnation from "/src/components/pagnation/pagnation";
import ButtonM from "/src/components/buttons/button_primary_m";
import DropDownMenu from "/src/components/dropsMenu/drops_contents";
import SearchBar from "/src/components/searchBar/search_bar_company_management_menu";
import { getResearcherCategories } from "../../asset/apis/contents/researcher/api";
import { searchOrgn } from "../../asset/apis/signup";
import useDropDown from "/src/hooks/contents/components/useDropDown";
import * as rt from "/src/asset/apis/contents/researcher/types";

/**
 * @template T
 * @typedef {[T, React.Dispatch<React.SetStateAction<T>>]} useState<T>
 */

const Component = () => {

  const [keyword, setKeyword] = useState()
  const [orgs, setOrgs] = useState([])

  /** @type {useState<number | undefined>} */
  const [orgIndex, setOrgIndex] = useState(undefined)

  /** @type {useState<rt.ResearcherCategory[]>} */
  const [categories, setCategories] = useState([])

  const {
    isOpened,
    toggleDropDown,
    currentItem,
    setIndexWithValidation,
  } = useDropDown({
    items: orgs,
    indexState: [orgIndex, setOrgIndex],
  })

  useLayoutEffect(() => {
    (async () => {
      await searchOrgn().then(res => {
        const orgs = res.data.result.rows
        setOrgs(orgs.map(org => ({ id: org.id, label: org.name })))
      }).catch(err => {
        console.log(err);
      })
    })()
  }, [])

  useLayoutEffect(() => {
    (async () => {
      await getResearcherCategories().then(res => {
        setCategories(res.data.data)
      }).catch(err => {
        console.log(err);
      })
    })()
  }, [keyword, orgIndex])

	const TabContents = () => {
		return(
			<div className="sub-page-0">
				<div className="flex_ search-wrap">
					<DropDownMenu
            placeholder="전체"
            items={orgs}
            isOpened={isOpened}
            toggleDropDown={toggleDropDown}
            setIndexWithValidation={setIndexWithValidation}
            currentItem={currentItem}
          />
					<SearchBar />
				</div>
				<div className="table-container">
					<TableHead
						headChoice="번호"
						headTitle="소속"
						headWriter="부서/학과"
						headDate="등록일"
						headEtc="관리"
					/>
          {categories.map(({catgNm, catgNo, createdDate, ucmdNm }) => {
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
          <Pagnation size="regular"/>
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
