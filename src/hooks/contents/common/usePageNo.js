// @ts-check
import { useLayoutEffect, useState } from "react";

/** 
 * @template T
 * @typedef {[T, React.Dispatch<React.SetStateAction<T>>]} useState<T>
 */

/**
 * @param {Object} param
 * @param {import("next/router").NextRouter} param.router
 * @param {(no: number) => Promise<void>} [param.initData]
 * @returns {number | undefined}
 */
const usePageNo = ({
  router, 
  initData
}) => {
  /** @type {useState<number | undefined>} */
  const [no, setNo] = useState();

	useLayoutEffect(() => {
		if(!router.isReady) return;
		const no = router.query.no;
    if(typeof no === 'string') setNo(parseInt(no))
    else if(typeof no === 'number') setNo(no)
    else setNo(undefined)
	},[]);

  useLayoutEffect(() => {
    if(no) {
      initData?.(no)
    }
  }, [no])

  return no
}

export default usePageNo
