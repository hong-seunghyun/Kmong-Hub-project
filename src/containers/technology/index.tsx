import React, { useLayoutEffect, useState } from "react";
import ButtonM from "/src/components/buttons/button_primary_m";
import DropDownMenu from "/src/components/dropsMenu/drops_contents";
import SearchBar from "/src/components/searchBar/search_bar_contents";
import TableHead from "/src/components/table/technology_index_table_vertical_head";
import TableCell from "/src/components/table/technology_index_table_vertical_cell";
import Pagination from "/src/components/pagnation/pagination_contents";
import useDropDown from "/src/hooks/contents/components/useDropDown";
import { getTechCategories, getTechTransfers } from "/src/asset/apis/contents/transfer/api";
import { TechTransfer } from "/src/asset/apis/contents/transfer/types";
import Link from "next/link";

const Component = () => {

  const [techs, setTechs] = useState<TechTransfer[]>([])

  const [page, setPage] = useState(1)
  const [maxPage, setMaxPage] = useState(1)

  const [categories, setCategories] = useState<{ id: number; label: string }[]>([])

  const {
    isOpened,
    toggleDropDown,
    currentItem,
    setIndex
  } = useDropDown(categories)

  const [keyword, setKeyword] = useState<string>()

  const updateItems = async () => {
    const result = await getTechTransfers({
      currentPage: page,
      catgNo: currentItem?.id,
      searchValue: keyword,
      limit: 10
    }).then(res => {
      setMaxPage(res.data.pagingInfo?.totPage ?? 1)
      return res.data.data
    })

    setTechs(result ?? [])
  }

  useLayoutEffect(() => {
    updateItems()
  }, [page])

  const initCategories = async () => {
    const result = await getTechCategories().then(res => {
      const result = res.data.data.map((item) => ({
        id: item.catgNo,
        label: item.catgNm
      }))
      return result
    }).catch(err => console.log(err))
    setCategories(result ?? [])
  }

  useLayoutEffect(() => {
    initCategories()
  }, [])

  return (
    <div className="page-wrap">
      <div className="contents-technology contents-">
        <div className="transaction-01">

          <div className="head-wrap flex_">
            <h1 className="display-5-B">
              기술 이전 관리
            </h1>
            <Link href="/technology/add">
              <ButtonM text="기술이전 등록" />
            </Link>
          </div>

          <div>
            <div className="flex_ search-wrap pc-search-wrap">
              <span className="flex_">
                <DropDownMenu
                  placeholder={'전체'}
                  items={categories}
                  currentItem={currentItem}
                  isOpened={isOpened}
                  toggleDropDown={toggleDropDown}
                  setIndex={setIndex}
                />
                <DropDownMenu />
              </span>
              <SearchBar
                setKeyword={setKeyword}
                updateItems={updateItems}
              />
            </div>

            {/*<div className="flex_ search-wrap m-search-wrap">
              <span className="flex_">
                <DropDownMenu placeholder={'전체'} />
                <DropDownMenu />
              </span>
              <SearchBar />
            </div>*/}

            <div className="table-container">
              <TableHead
                headChoice="번호"
                headCategory="상태"
                headTitle="제목"
                headWriter="작성자"
                headDate="등록일"
                headEtc="관리"
              />
              {techs.map((tech) => (
                <TableCell
                  id={tech.ttfNo}
                  saveStatus={tech.saveStat}
                  title={tech.tcqTitleNm}
                  writer={tech.mbrNm}
                  date={tech.createdDate}
                  img={tech.thumAddr}
                  pin={`${tech.ttfFixed === 'Y'}`}
                  link={`/technology/detail?no=${tech.ttfNo}`}
                />
              ))}
              <Pagination
                page={page}
                maxPage={maxPage}
                pageSize={10}
                setPage={setPage}
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
};

export default Component;
