import React, { useLayoutEffect, useState } from "react";
import ButtonM from "/src/components/buttons/button_primary_m";
import DropDownMenu from "/src/components/dropsMenu/drops_contents";
import SearchBar from "/src/components/searchBar/search_bar_contents";
import TableHead from "/src/components/table/technology_index_table_vertical_head";
import Pagnation from "/src/components/pagnation/pagination_contents";
import Link from "next/link";
import useDropDown from "/src/hooks/contents/components/useDropDown";
import { getEventCategories, getEvents } from "/src/asset/apis/contents/event/api";
import { Event } from "/src/asset/apis/contents/event/types";
import TableCell from "/src/components/table/technology_index_table_vertical_cell";

const Component = () => {

  const [events, setEvents] = useState<Event[]>([])

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
    const result = await getEvents({
      currentPage: page,
      catgNo: currentItem?.id,
      searchValue: keyword,
      limit: 10
    }).then(res => {
      setMaxPage(res.data.pagingInfo?.totPage ?? 1)
      return res.data.data
    })

    setEvents(result)
  }

  useLayoutEffect(() => {
    updateItems()
  }, [page])

  const initCategories = async () => {
    const result = await getEventCategories().then(res => {
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
      <div className="contents-technology contents- contents-event">
        <div className="transaction-01">

          <div className="head-wrap flex_">
            <h1 className="display-5-B">
              행사 관리
            </h1>
            <Link href="/event/add_1">
              <ButtonM text="행사 등록" />
            </Link>
          </div>

          <div>
            <div className="flex_ search-wrap">
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

            <div className="table-container">
              <TableHead
                headChoice="번호"
                headCategory="상태"
                headTitle="제목"
                headWriter="작성자"
                headDate="등록일"
                headEtc="관리"
              />
              {events.map((event) => (
                <TableCell
                  pin={`${event.evenFixed === 'Y'}`}
                  saveStatus={undefined}
                  id={event.evenNo}
                  title={event.titleNm}
                  writer={event.mbrNm}
                  date={event.createdDate}
                  img={event.thumAddr}
                  link={`/event/detail?no=${event.evenNo}`}
                />
              ))}
              <Pagnation
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
};

export default Component;
