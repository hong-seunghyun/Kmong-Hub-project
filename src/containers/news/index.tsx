import React, { useLayoutEffect, useState } from "react";
import ButtonM from "/src/components/buttons/button_primary_m";
import DropDownMenu from "/src/components/dropsMenu/drops_contents";
import SearchBar from "/src/components/searchBar/search_bar_contents";
import Pagination from "/src/components/pagnation/pagination_contents";
import Link from "next/link";
import { News } from "/src/asset/apis/contents/news/types";
import useDropDown from "/src/hooks/contents/components/useDropDown";
import { getNews, getNewsCategories } from "/src/asset/apis/contents/news/api";
import ContentsTableHead from "/src/components/table/technology_index_table_vertical_head";
import ContentsTableCell from "/src/components/table/technology_index_table_vertical_cell";

const FIXED_STATUS: { id: 'Y' | 'N'; label: string }[] = [
  { id: 'Y', label: '고정' },
  { id: 'N', label: '미고정' }
] as const

const Component = () => {

  const [news, setNews] = useState<News[]>([])

  const [page, setPage] = useState(1)
  const [maxPage, setMaxPage] = useState(1)

  const [categories, setCategories] = useState<{ id: number; label: string }[]>([])

  const {
    isOpened,
    toggleDropDown,
    currentItem,
    setIndex
  } = useDropDown(categories)

  const fixedDropDown = useDropDown(FIXED_STATUS)

  const [keyword, setKeyword] = useState<string>()

  const updateItems = async () => {
    const result = await getNews({
      currentPage: page,
      catgNo: currentItem?.id,
      fixYn: fixedDropDown.currentItem?.id,
      searchValue: keyword,
      limit: 10
    }).then(res => {
      setMaxPage(res.data.pagingInfo?.totPage ?? 1)
      return res.data.data
    })

    setNews(result ?? [])
  }

  useLayoutEffect(() => {
    updateItems()
  }, [page])

  const initCategories = async () => {
    const result = await getNewsCategories().then(res => {
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
      <div className="contents-technology contents- contents-news">
        <div className="transaction-01">

          <div className="head-wrap flex_">
            <h1 className="display-5-B">
              뉴스 관리
            </h1>
            <Link href="/news/add_1">
              <ButtonM text="등록" />
            </Link>
          </div>

          <div>
            <div className="flex_ search-wrap">
              <span className="flex_">
                <DropDownMenu
                  placeholder={'카테고리'}
                  items={categories}
                  currentItem={currentItem}
                  isOpened={isOpened}
                  toggleDropDown={toggleDropDown}
                  setIndex={setIndex}
                />
                <DropDownMenu
                  placeholder={'고정 여부'}
                  items={FIXED_STATUS}
                  currentItem={fixedDropDown.currentItem}
                  isOpened={fixedDropDown.isOpened}
                  toggleDropDown={fixedDropDown.toggleDropDown}
                  setIndex={fixedDropDown.setIndex}
                />
              </span>
              <SearchBar
                setKeyword={setKeyword}
                updateItems={updateItems}
              />
            </div>

            <div className="table-container">
              <ContentsTableHead
                headChoice="번호"
                headCategory="상태"
                headTitle="제목"
                headWriter="작성자"
                headDate="등록일"
                headEtc="관리"
              />
              {news.map((item) => (
                <ContentsTableCell
                  saveStatus={undefined}
                  id={item.newsNo}
                  title={item.titleNm}
                  writer={item.mbrNm}
                  date={item.createdDate}
                  link={`/news/temporary_detail?no=${item.newsNo}`}
                  img={item.thumAddr}
                  pin={`${item.nwsFixed === 'Y'}`}
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
