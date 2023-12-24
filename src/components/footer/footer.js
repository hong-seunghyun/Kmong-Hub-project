import React from "react";
import Link from "next/link"

const Component = () => {
	return(
		<footer className="bg-gray-1 body-3-R txt-disabled flex_">
				<div className="flex_">
					<span>(주) 한국기술마켓</span>
					<span className="bar">ㅣ</span>
					<span>대표이사 : 지영광</span>
					<span className="bar">ㅣ</span>
					<span>개인정보보호책임자 : 지영광</span>
					<span className="bar">ㅣ</span>
					<span>사업자등록번호 : 319-81-02124</span>
					<span className="bar">ㅣ</span>
					<span><Link href="/etc/user-guide-01">개인정보 처리방침</Link></span>
					<span className="bar">ㅣ</span>
					<span><Link href="/etc/user-guide-02">이용약관</Link></span>
				</div>
				<p>
				© 2023 Kotechmarket Corp.
				</p>
		</footer>
	)
};
export default Component;