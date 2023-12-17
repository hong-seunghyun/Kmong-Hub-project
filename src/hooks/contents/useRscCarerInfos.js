import React, { useCallback, useMemo, useState } from "react";

const useRscCarerInfos = () => {
  /** 경력 정보 */
  const [rscCarerInfos, setRscCarerInfos] = useState([{
    carerSeq: 1, // 순서
    cmpyNm: undefined,  // 회사명
    hdofYn: 'N',  //재직여부
    jncpmYm: undefined, // 입사년월
    resignYm: undefined, // 퇴사년월
    rspbTaskCntn: undefined // 담당업무 내용
  }])

  /** 경력 정보 추가 */
  const appendCarerInfo = useCallback(() => {
    setRscCarerInfos(prev => {
      return [...prev, {
        carerSeq: prev.length + 1,
        cmpyNm: undefined,  // 회사명
        hdofYn: 'N',  //재직여부
        jncpmYm: undefined, // 입사년월
        resignYm: undefined, // 퇴사년월
        rspbTaskCntn: undefined // 담당업무 내용
      }]
    })
  }, [rscCarerInfos])

  /** 경력 정보 삭제 */
  const deleteCarerInfo = useCallback((index) => () => {
    setRscCarerInfos(prev => {
      const filtered = prev.filter((item, i) => i !== index)
      return filtered.map((item, i) => ({...item, carerSeq: i + 1}))
    })
  }, [rscCarerInfos])

  /** 입사년월 업데이트 */
  const updateStartDate = useCallback((index) => (date) => {
    setRscCarerInfos(prev => {
      const updated = prev.map((item, i) => {
        if(i === index) {
          return {...item, jncpmYm: date}
        }
        return item
      })
      return updated
    }) 
  }, [rscCarerInfos])

  /** 퇴사년월 업데이트 */
  const updateEndDate = useCallback((index) => (date) => {
    setRscCarerInfos(prev => {
      const updated = prev.map((item, i) => {
        if(i === index) {
          return {...item, resignYm: date}
        }
        return item
      })
      return updated
    }) 
  }, [rscCarerInfos])

  /** 재직 여부 업데이트 */
  const updateHdofYn = useCallback((index) => (checked) => {
    setRscCarerInfos(prev => {
      const updated = prev.map((item, i) => {
        if(i === index) {
          return {...item, hdofYn: checked ? 'Y' : 'N'}
        }
        return item
      })
      return updated
    })
  }, [])

  /** 회사명 업데이트 */
  const updateCmpyNm = useCallback((index) => (value) => {
    setRscCarerInfos(prev => {
      const updated = prev.map((item, i) => {
        if(i === index) {
          return {...item, cmpyNm: value}
        }
        return item
      })
      return updated
    })
  }, [])

  /** 담당 업무 업데이트 */
  const updateRspbTaskCntn = useCallback((index) => (value) => {
    setRscCarerInfos(prev => {
      const updated = prev.map((item, i) => {
        if(i === index) {
          return {...item, rspbTaskCntn: value}
        }
        return item
      })
      return updated
    })
  }, [])

  /** 경력 정보 입력 완료 여부 */
  const rscCarerInfosAvailable = useMemo(() => {
    return rscCarerInfos.reduce((acc, curr) => (
      acc && curr.cmpyNm && curr.jncpmYm && curr.resignYm && curr.rspbTaskCntn
    ), rscCarerInfos.length > 0)
  }, [rscCarerInfos])
  
  const value = useMemo(() => ({
    rscCarerInfos,
    appendCarerInfo,
    deleteCarerInfo,
    updateStartDate,
    updateEndDate,
    updateHdofYn,
    updateCmpyNm, 
    updateRspbTaskCntn, 
    rscCarerInfosAvailable
  }), [rscCarerInfos])

  return value
}

export default useRscCarerInfos
