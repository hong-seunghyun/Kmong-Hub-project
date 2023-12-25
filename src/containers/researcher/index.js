// @ts-check
import React, { useLayoutEffect, useMemo, useState } from "react";
import Link from "next/link"
import TableHead from "/src/components/table/researcher_head";
import TableCell from "/src/components/table/researcher_cell";
import Pagination from "/src/components/pagnation/pagination_contents";
import ButtonM from "/src/components/buttons/button_primary_m";
import DropDownMenu from "/src/components/dropsMenu/drops_contents";
import SearchBar from "/src/components/searchBar/search_bar_contents";
import { getResearchers } from "/src/asset/apis/contents/researcher/api";
import useDropDown from "/src/hooks/contents/components/useDropDown";
import * as rt from '/src/asset/apis/contents/researcher/types'
import { CONTENTS_SAVE_STATUS } from "/src/asset/apis/contents/common/codes";

/** @type {{ id: rt.ResearcherSearchType; label: string}[]} */
const searchTypes = [
  { id: "rscNm", label: "연구자명" },
  { id: "ucmdNm", label: "소속" },
  { id: "deptMajrNm", label: "부서/학과" },
  { id: "pstnNm", label: "직책" },
] 

/**
 * @template T
 * @typedef {[T, React.Dispatch<React.SetStateAction<T>>]} useState<T>
 */

const Component = () => {

  /** @type {useState<rt.Researcher[]>} */
  const [researchers, setResearchers] = useState([])

  const [page, setPage] = useState(1)
  const [maxPage, setMaxPage] = useState(1)

  /** @type {useState<number | undefined>} */
  const [searchTypeIndex, setSearchTypeIndex] = useState()
  const currentSearchType = useMemo(() => 
    searchTypeIndex ? searchTypes[searchTypeIndex] : undefined, 
    [searchTypeIndex]
  )

  const {
    isOpened,
    toggleDropDown,
    currentItem,
    setIndexWithValidation,
  } = useDropDown({
    items: searchTypes,
    indexState: [searchTypeIndex, setSearchTypeIndex],
  })

  /** @type {useState<string | undefined>} */
  const [keyword, setKeyword] = useState()

  const updateItems = async () => {
    const result = await getResearchers({
      currentPage: page,
      searchType: currentSearchType?.id,
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
  }, [page, currentSearchType])

  return(
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
                setIndexWithValidation={setIndexWithValidation}
              />
              <SearchBar
                setKeyword={setKeyword}
                updateItems={updateItems}
              />
            </div>
            <div className="table-container">
              <TableHead
                headChoice="선택"
                headCategory="상태"
                headTitle="제목"
                headBelong="소속"
                headWriter="부서/학과"
                headPosition="직책"
                headEtc="관리"
              />
              {researchers.map((/** @type {rt.Researcher} */r, index) => (
                <TableCell 
                  labelBg="bg-mint-1"
                  label={CONTENTS_SAVE_STATUS[r.saveStat]}
                  labelColor="txt-white"
                  img={''}
                  title={r.rscNm}
                  belong={r.ucmdNm}
                  writer={r.deptMajrNm}
                  position={r.pstnNm}
                  link="/researcher/detail"
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
