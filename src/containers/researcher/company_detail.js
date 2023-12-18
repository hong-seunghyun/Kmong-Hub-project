import React, { useState, useLayoutEffect, useEffect } from "react";
import TextButton from "/src/components/buttons/text_button_underline_primary_s"
import ButtonL from "/src/components/buttons/button_outline_l"
import ButtonErrorL from "/src/components/buttons/button_error_l"
import Button from "/src/components/buttons/button_primary_l"
import Link from "next/link";
import { useRouter } from "next/router";
import Upload from "/src/components/upload/upload"
import { deleteResearcherCategory } from "../../asset/apis/contents/researcher";

const Component = () => {

	const router = useRouter();
	const [data,setData ] = useState();

  const [no, setNo] = useState();

  useEffect(() => {
    alert('수정 및 삭제만 가능합니다.')
  }, [])

	useLayoutEffect(() => {
		if(!router.isReady) return;
		const no = router.query.no;
    setNo(no)
	},[]);

  const deleteDetail = async () => {
    await deleteResearcherCategory({
      deptMajrNo: no
    }).then(res => {
      if(res.status === 200) {
        alert('삭제되었습니다.')
        router.push('/researcher/company')
      }
    })
  }

	return(
		<div className="container">
			<div className="page-wrap">
				<div className="member- member-detail researcher-detail">
					<h1 className="display-5-B title">소속 상세</h1>
					
					<p className="table-caption body-2-B">기본 정보</p>
						<table className="table-horizontal-container radius-20 body-3-R">
						<tbody>
							<tr>
								<th className="thead ">
									소속
								</th>
								<td className="tbody">
                  -
								</td>
							</tr>
							<tr>
								<th className="thead ">
									부서/학과
								</th>
								<td className="tbody">
                  -
								</td>
							</tr>
							<tr>
								<th className="thead ">
									최종 수정일
								</th>
								<td className="tbody">
                  -
								</td>
							</tr>
							
						</tbody>
					</table>

					<div className="btn-wrap flex_">
						<div className="flex_">
							<Link href="/researcher/company">
								<ButtonL text="목록으로" />
							</Link>
						</div>
						<div className="flex_">
							<Link href="#">
								<ButtonErrorL text="삭제" onclick={deleteDetail} />
							</Link>
							<Link href={`/researcher/company_add?no=${no}`}>
								<Button text="수정" />
							</Link>
						</div>
					</div>

				</div>
			</div>
		</div>
	)
}
export default Component;
