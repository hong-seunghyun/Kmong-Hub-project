/**
 * @file 날짜 관련 함수 모음
 * @author 강민석
 */

/** 
 * @param {string} dateString 
 * @returns {boolean}
 * */
export const isValidDate = (dateString) => {
  const date = new Date(dateString)
  return !isNaN(date.getTime())
}

/**
 * @param {Date} date
 * @returns {string}
 */
export const dateToString = (date) => {
  return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`
}

/** 
 * @param {string} dateString 
 * @returns {string}
 **/
export const convertDateToStr = (dateString) => {
  if (!isValidDate(dateString)) return dateString
  const date = new Date(dateString)
  return dateToString(date)
}
