import React from 'react';
import Layout from 'components/layout/app/main-index';

const Component = () => {
	return(
		<Layout>
			<div className="rate-plan-container">
				<h1 className="heading-1-B">요금제</h1>
				<table>
					<thead>
						<tr>
							<th className="function">요금제별 제공 기능</th>
							<th className='free'>FREE</th>
							<th className='basic'>BASIC</th>
							<th className='premium'>PREMIUM</th>
							<th className='business'>BUSINESS</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>금액</th>
							<td>무료</td>
							<td>월 100,000원</td>
							<td>월 300,000원</td>
							<td>월 500,000원</td>
						</tr>
						<tr>
							<th>AI 콘텐츠 생성</th>
							<td>5회</td>
							<td>월 30개</td>
							<td>월 50회</td>
							<td>월 100회</td>
						</tr>
						<tr>
							<th>뉴스레터 발송 </th>
							<td>10건</td>
							<td>월 1,000건</td>
							<td>월 3,000건</td>
							<td>월 10,000건</td>
						</tr>
						<tr>
							<th>이메일 발송 </th>
							<td>10건</td>
							<td>월 1,000건</td>
							<td>월 3,000건</td>
							<td>월 10,000건</td>
						</tr>
						<tr className='state-tr'>
							<th>도메인 설정 </th>
							<td className='fail'>사용불가</td>
							<td>사용</td>
							<td>사용</td>
							<td>사용</td>
						</tr>
						<tr>
							<th>SMS 발송 </th>
							<td>10건</td>
							<td>월 1,000건</td>
							<td>월 3,000건</td>
							<td>월 10,000건</td>
						</tr>
						<tr>
							<th>전자계약 발송 </th>
							<td>10개</td>
							<td>월 50건</td>
							<td>월 100건</td>
							<td>월 500건</td>
						</tr>
						<tr className='state-tr'>
							<th>운영자 관리 기능</th>
							<td className='fail'>사용불가</td>
							<td className='fail'>사용불가</td>
							<td>사용</td>
							<td>사용</td>
						</tr>
						<tr className='state-tr'>
							<th>AI 챗봇 사용</th>
							<td className='fail'>사용불가</td>
							<td className='fail'>사용불가</td>
							<td>사용</td>
							<td>사용</td>
						</tr>
						<tr>
							<th>웹사이트 용량</th>
							<td>500MB</td>
							<td>10GB</td>
							<td>100GB</td>
							<td>1TB</td>
						</tr>
						<tr>
							<th>트레픽 제한</th>
							<td>1GB</td>
							<td>10GB</td>
							<td>100GB</td>
							<td>500GB</td>
						</tr>
					</tbody>
				</table>
			</div>
		</Layout>
	)
}
export default Component;