import React, { useMemo, useState } from 'react'

const useIptKwdCntn = () => {
  const [iptKwdCntn, setIptKwdCntn] = useState([])
  const [currentKwdCntn, setCurrentKwdCntn] = useState('')

  const appendIptKwdCntn = () => {
    /** 중복 안되게끔 */
    if (iptKwdCntn.includes(currentKwdCntn)) {
      return
    }
    setIptKwdCntn([...iptKwdCntn, currentKwdCntn])
    setCurrentKwdCntn('')
  }

  const onEnterIptKwdCntn = (e) => {
    if (e.key === 'Enter') {
      appendIptKwdCntn()
    }
  }
  
  const deleteIptKwdCntn = (index) => () => {
    setIptKwdCntn(iptKwdCntn.filter((_, i) => i !== index))
  }

  const value = useMemo(() => ({
    iptKwdCntn,
    currentKwdCntn,
    setCurrentKwdCntn,
    appendIptKwdCntn,
    onEnterIptKwdCntn,
    deleteIptKwdCntn,
  }), [iptKwdCntn, currentKwdCntn])

  return value
}

export default useIptKwdCntn
