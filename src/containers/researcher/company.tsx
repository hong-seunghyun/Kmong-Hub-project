import React, { useLayoutEffect, useMemo, useState } from "react";
import Link from "next/link"
import TableHead from "/src/components/table/table_vertical_head";
import TableCell from "/src/components/table/table_vertical_cell";
import Pagination from "/src/components/pagnation/pagination_contents";
import ButtonM from "/src/components/buttons/button_primary_m";
import DropDownMenu from "/src/components/dropsMenu/drops_contents";
import SearchBar from "/src/components/searchBar/search_bar_contents";
import { getResearcherCategories } from "../../asset/apis/contents/researcher/api";
import { searchOrgn } from "../../asset/apis/signup";
import useDropDown from "/src/hooks/contents/components/useDropDown";
import { ResearcherCategory } from "/src/asset/apis/contents/researcher/types";

const Component = () => {

  const [categories, setCategories] = useState<ResearcherCategory[]>([])

  const [page, setPage] = useState(1)
  const [maxPage, setMaxPage] = useState(1)

  const [orgs, setOrgs] = useState<{ id: number; label: string }[]>([])

  const {
    isOpened,
    toggleDropDown,
    currentItem,
    index,
    setIndex,
  } = useDropDown(orgs)

  const [keyword, setKeyword] = useState<string>()

  const updateItems = async () => {
    const result = await getResearcherCategories().then(res => {
      // setMaxPage(res.data.pagingInfo?.totPage ?? 1)
      return res.data.data
    }).catch(err => console.log(err))
    setCategories(result ?? [])
  }

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
    updateItems()
  }, [page, index])

  return (
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
          <div className="sub-page-0">
            <div className="flex_ search-wrap">
              <DropDownMenu
                placeholder="전체"
                items={orgs}
                isOpened={isOpened}
                toggleDropDown={toggleDropDown}
                setIndex={setIndex}
                currentItem={currentItem}
              />
              <SearchBar
                setKeyword={setKeyword}
                updateItems={updateItems}
              />
            </div>
            <div className="table-container">
              <TableHead
                headChoice="번호"
                headTitle="소속"
                headWriter="부서/학과"
                headDate="등록일"
                headEtc="관리"
              />
              {categories.map(({ catgNm, catgNo, createdDate, ucmdNm }) => {
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
              <Pagination
                page={page}
                setPage={setPage}
                maxPage={maxPage}
                pageSize={10}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Component;
