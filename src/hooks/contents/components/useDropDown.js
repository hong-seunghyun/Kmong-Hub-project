// @ts-check
import React, { useMemo, useState } from "react";

/**
 * @typedef DropDownItem
 * @type {Object}
 * @property {number | string} [id] 드롭다운 항목 아이디
 * @property {string} label 드롭다운 항목 라벨
 */

/**
 * @typedef DropDownHook
 * @type {Object}
 * @property {boolean} isOpened
 * @property {() => void} toggleDropDown
 * @property {DropDownItem} [currentItem] 현재 선택된 드롭다운 항목
 * @property {(idx: number) => void} setIndexWithValidation 인덱스를 설정하는 함수
 */

/**
 * @template T
 * @typedef {[T, React.Dispatch<React.SetStateAction<T>>]} useState<T>
 */

/**
 * @param {Object} param
 * @param {DropDownItem[]} param.items 드롭다운 항목 리스트
 * @param {useState<number | undefined>} param.indexState 선택된 항목의 인덱스 state
 * @returns {DropDownHook}
 */
function useDropDown ({
  items,
  indexState: [index, setIndex],
}) {

  const [isOpened, setIsOpened] = useState(/** @type {boolean} */false);

  const setIndexWithValidation = (/** @type {number | undefined} */idx) => {
    if(idx === undefined || idx < 0 || idx >= items.length) return;
    setIndex(idx);
  }
  
  const toggleDropDown = () => setIsOpened(!isOpened)

  const currentItem = useMemo(() => index !== undefined ? items[index] : undefined, [items, index])

  /** @type {DropDownHook} */
  const value = {
    isOpened,
    toggleDropDown,
    currentItem,
    setIndexWithValidation,
  }

  return value
}

export default useDropDown;
