import React, { useLayoutEffect, useState } from "react";
import Link from "next/link"
import TableHead from "/src/components/table/researcher_head";
import TableCell from "/src/components/table/researcher_cell";
import Pagination from "/src/components/pagnation/pagination_contents";
import ButtonM from "/src/components/buttons/button_primary_m";
import SearchBar from "/src/components/searchBar/search_bar_contents";
import { getResearchers } from "/src/asset/apis/contents/researcher/api";
import useDropDown from "/src/hooks/contents/components/useDropDown";
import { Researcher } from '/src/asset/apis/contents/researcher/types'
import { RESEARCHER_SEARCH_TYPE } from "/src/asset/apis/contents/researcher/codes";
import DropDownMenu from "/src/components/dropsMenu/drops_contents";

const searchTypes: { id: keyof typeof RESEARCHER_SEARCH_TYPE; label: string }[] = [
  { id: "rscNm", label: "연구자명" },
  { id: "ucmdNm", label: "소속" },
  { id: "deptMajrNm", label: "부서/학과" },
  { id: "pstnNm", label: "직책" },
]

const Component = () => {

  const [researchers, setResearchers] = useState<Researcher[]>([])

  const [page, setPage] = useState(1)
  const [maxPage, setMaxPage] = useState(1)

  const {
    isOpened,
    toggleDropDown,
    currentItem,
    setIndex,
  } = useDropDown(searchTypes)

  const [keyword, setKeyword] = useState<string>()
  const updateItems = async () => {
    const result = await getResearchers({
      currentPage: page,
      searchType: currentItem ? currentItem.id : undefined,
      searchValue: keyword
    }).then(res => {
      setMaxPage(res.data.pagingInfo?.totPage ?? 1)
      return res.data.data
    }).catch(err => {
      console.log(err);
    })
    setResearchers(result ?? [])
  }

  useLayoutEffect(() => {
    updateItems()
  }, [page])

  return (
    <div className="container">
      <div className="page-wrap">
        <div className="researcher-contents">
          <div className="head-wrap flex_">
            <h1 className="display-5-B">
              연구자 관리
            </h1>
            <Link href="/researcher/add">
              <ButtonM text="연구자 등록" />
            </Link>
          </div>
          <div className="sub-page-0">
            <div className="flex_ search-wrap">
              <DropDownMenu
                placeholder={"전체"}
                items={searchTypes}
                currentItem={currentItem}
                isOpened={isOpened}
                toggleDropDown={toggleDropDown}
                setIndex={setIndex}
              />
              <SearchBar
                setKeyword={setKeyword}
                updateItems={updateItems}
              />
            </div>
            <div className="table-container">
              <TableHead
                headChoice="번호"
                headCategory="상태"
                headTitle="연구자명"
                headBelong="소속"
                headWriter="부서/학과"
                headPosition="직책"
                headEtc="관리"
              />
              {researchers.map((r) => (
                <TableCell
                  id={r.rscNo}
                  img={''}
                  name={r.rscNm}
                  belong={r.ucmdNm}
                  major={r.deptMajrNm}
                  position={r.pstnNm}
                  saveStatus={r.saveStat}
                />
              ))}
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
