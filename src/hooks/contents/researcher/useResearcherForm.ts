import { useLayoutEffect, useMemo, useState } from "react"
import { CONTENTS_CREATE_TYPE } from "/src/asset/apis/contents/common/codes"
import { getResearcherCategories } from "/src/asset/apis/contents/researcher/api"
import { DeptMajr, ResearcherCategory, RscRegiDTO } from "/src/asset/apis/contents/researcher/types"
import useRscCarerInfos from "./useRscCarerInfos"
import { setResearcher } from "/src/asset/apis/contents/researcher/api"

type ReactState<T> = [T, React.Dispatch<React.SetStateAction<T>>]
type RscRegiFormStates = Omit<RscRegiDTO & { pflFile?: File }, 'deptMajrs' | 'rscCarerInfos'>
type FormStates = {
  [Key in keyof RscRegiFormStates as `${Key}State`]-?: ReactState<RscRegiFormStates[Key] | undefined>
} & { deptMajrsState: ReactState<DeptMajr[]> }

const useResearcherForm = () => {
  const [crtTypeCd, setCrtTypeCd] = useState<keyof typeof CONTENTS_CREATE_TYPE>()

  const [rscNm, setRscNm] = useState<string>() // 연구자명
  const [deptMajrs, setDeptMajrs] = useState<DeptMajr[]>([]) // 부서/학과
  const [pstnNm, setPstnNm] = useState<string>() // 직책

  const [pflFile, setPflFile] = useState<File>() // 프로필 사진
  const [labNm, setLabNm] = useState<string>() // 연구실
  const [labWebAddr, setLabWebAddr] = useState<string>() // 연구실 홈페이지
  const [hpNo, setHpNo] = useState<string>() // 전화번호
  const [ofcPhcNo, setOfcPhcNo] = useState<string>() // 사무실 전화번호
  const [emailAddr, setEmailAddr] = useState<string>() // 이메일 주소
  const [webAddr, setWebAddr] = useState<string>() // 홈페이지
  const [lctCntn, setLctCntn] = useState<string>() // 강의 내역
  const [inaCntn, setInaCntn] = useState<string>() // 대외활동
  const [aosCntn, setAosCntn] = useState<string>() // 연구 내역
  const [educationCntn, setEducationCntn] = useState<string>() // 학력 내역
  const [ytbPath, setYtbPath] = useState<string>() // 유튜브 주소

  const [categories, setCategories] = useState<ResearcherCategory[]>([]) // 부서/학과 리스트
  const [categorySearchKeyword, setCategorySearchKeyword] = useState<string>() // 부서/학과 검색어
  const [categorySearchResultOpened, setCategorySearchResultOpened] = useState<boolean>(false) // 부서/학과 검색 결과 오픈 여부
  const categorySearchResult = useMemo(() => (
    categories.filter(item => item.catgNm.includes(categorySearchKeyword ?? ''))
  ), [categories, categorySearchKeyword])

  const searchDeptMajr = async () => {
    const res = await getResearcherCategories()
    if (res.status === 200) {
      setCategories(res.data.data)
    } else {
      console.log('error')
    }
  }

  useLayoutEffect(() => {
    searchDeptMajr()
  }, [])

  const appendDeptMajr = (idx: number) => () => {
    const isExist = deptMajrs.filter(item => item.deptMajrNo === categorySearchResult[idx].catgNo)
    if (isExist.length > 0) {
      setCategorySearchResultOpened(false)
      return
    }
    setDeptMajrs([...deptMajrs, {
      deptMajrNo: categorySearchResult[idx].catgNo,
      deptMajrNm: categorySearchResult[idx].catgNm,
      seq: deptMajrs.length + 1,
    }])
    setCategorySearchKeyword('')
    setCategorySearchResultOpened(false)
  }

  const deleteDeptMajr = (idx: number) => () => {
    const filtered = deptMajrs.filter(item => item.seq !== idx)
    const reIndexed = filtered.map((item, index) => ({
      ...item,
      seq: index + 1
    }))
    setDeptMajrs(reIndexed)
  }

  const onChangeCategorySearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategorySearchKeyword(e.target.value)
    if (e.target.value === '') {
      setCategorySearchResultOpened(false)
    } else {
      if (categories.length > 0) {
        setCategorySearchResultOpened(true)
      }
    }
  }

  const {
    rscCarerInfos,
    appendCarerInfo,
    deleteCarerInfo,
    updateStartDate,
    updateEndDate,
    updateHdofYn,
    updateCmpyNm,
    updateRspbTaskCntn,
    rscCarerInfosAvailable
  } = useRscCarerInfos()

  const submitAvailable = useMemo(() => {
    return rscNm !== undefined && deptMajrs.length > 0 && pstnNm && rscCarerInfosAvailable
  }, [rscNm, deptMajrs, pstnNm, rscCarerInfosAvailable])

  const submit = async () => {
    if (crtTypeCd === 'N' && submitAvailable) {
      const rscRegiDto = {
        deptMajrs: {
          deptMajrNo: deptMajrs.length > 0 ? deptMajrs[0].deptMajrNo : undefined,
          seq: deptMajrs[0].seq,
        },
        rscNm: rscNm ?? '',
        pstnNm: pstnNm ?? '',
        crtTypeCd,
        ...(aosCntn !== undefined && { aosCntn }),
        ...(educationCntn !== undefined && { educationCntn }),
        ...(emailAddr !== undefined && { emailAdr: emailAddr }),
        ...(hpNo !== undefined && { hpNo }),
        ...(inaCntn !== undefined && { inaCntn }),
        ...(labNm !== undefined && { labNm }),
        ...(labWebAddr !== undefined && { labWebAddr }),
        ...(lctCntn !== undefined && { lctCntn }),
        ...(ofcPhcNo !== undefined && { ofcPhcNo }),
        ...(rscCarerInfos !== undefined && { rscCarerInfos }),
        ...(webAddr !== undefined && { webAddr }),
        ...(ytbPath !== undefined && { ytbPath }),
      }
      const res = await setResearcher(rscRegiDto, pflFile)
      if (res.status === 200) {
        alert('연구자 등록이 완료되었습니다.')
      }
    }
  }

  const formStates: FormStates = {
    crtTypeCdState: [crtTypeCd, setCrtTypeCd],
    rscNmState: [rscNm, setRscNm],
    deptMajrsState: [deptMajrs, setDeptMajrs],
    pstnNmState: [pstnNm, setPstnNm],
    pflFileState: [pflFile, setPflFile],
    labNmState: [labNm, setLabNm],
    labWebAddrState: [labWebAddr, setLabWebAddr],
    hpNoState: [hpNo, setHpNo],
    ofcPhcNoState: [ofcPhcNo, setOfcPhcNo],
    emailAddrState: [emailAddr, setEmailAddr],
    webAddrState: [webAddr, setWebAddr],
    lctCntnState: [lctCntn, setLctCntn],
    inaCntnState: [inaCntn, setInaCntn],
    aosCntnState: [aosCntn, setAosCntn],
    educationCntnState: [educationCntn, setEducationCntn],
    ytbPathState: [ytbPath, setYtbPath],
  }

  const categoriesStates = {
    categories, setCategories,
    categorySearchKeyword, setCategorySearchKeyword,
    categorySearchResultOpened, setCategorySearchResultOpened,
    categorySearchResult,
    onChangeCategorySearch,
  }

  const carerInfosStates = {
    rscCarerInfos,
    appendCarerInfo,
    deleteCarerInfo,
    updateStartDate,
    updateEndDate,
    updateHdofYn,
    updateCmpyNm,
    updateRspbTaskCntn,
  }

  const deptMajrStates = {
    appendDeptMajr,
    deleteDeptMajr,
  }

  const value = {
    formStates,
    categoriesStates,
    carerInfosStates,
    deptMajrStates,
    submitAvailable,
    submit,
  }

  return value
}

export default useResearcherForm
