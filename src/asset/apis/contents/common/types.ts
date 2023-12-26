/**
 * 기술이전, 행사, 지원사업, 뉴스 검색 파라미터
 * */
export type ContentsSearchParams = {
  currentPage: number
  catgNo?: number
  fixYn?: 'Y' | 'N'
  limit: number
  searchValue?: string;
}

/**
 * 기술이전, 행사, 지원사업, 뉴스 카테고리 유닛
 */
export type ContentsCategory = {
  ctntCatgId: number
  catgNo: number
  catgNm: string
  useYn: 'Y' | 'N'
}
