import { AxiosResponse } from "axios"

type PagingInfo = {
  page: number
  scale: number
  scaleStartPage: number
  scaleEndPage: number
  totPage: number
  totElements: number
  pervpage: number
  nextPage: number
}

export type ApiResponse<T = any> = Promise<AxiosResponse<{
  status: number
  result: string
  message: string
  pagingInfo?: PagingInfo
  data: T
}, any>>
