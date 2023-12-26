import React, { useLayoutEffect, useState } from "react";
import Badge from "/src/components/label/badge"
import Upload from "/src/components/upload/upload"
import Label from "/src/components/label/label"
import BtnCta from "/src/components/buttons/button_cta"
import PrimaryBtn from "/src/components/buttons/button_primary_l"
import Link from "next/link";
import { getMembership } from "/src/asset/apis/design/indexApis";

const Component = () => {

	const [ membership, setMembership ] = useState({});

	useLayoutEffect(() => {
		getMembership().then(res => {
			console.log(res.data);
			setMembership(res.data);
		}).catch(err => {
			console.log(err);
		})
	},[]);

	return(
		<div className="page-wrap">
			<div className="design-">
				<h1 className="display-5-B">디자인 보관함</h1>
				<div className="content- content-1">
					<div className="sub-title body-2-B flex_">
						<Badge value="1"/>
							기본 정보
					</div>

					<p className="table-caption body-2-B">로고 이미지<span className="txt-violet-1">*</span></p>
					<Upload state="default" type="normal"/>
					<p className="caption-R helper-txt">
						허용 사이즈: <span>Npx x Npx</span> <span className="bar">|</span> 파일 형식: <span>PNG</span><span className="bar">|</span> 최대 파일 크기: <span>00mb</span>
					</p>
					<div className="m-24" />
					<p className="table-caption body-2-B">대표 색상<span className="txt-violet-1">*</span></p>
					<div className="custom-box flex_ radius-8 border-gray-3">
						<span className="color-"></span>
						<span className="caption-R ">
							#
							<span className="txt-second-default">
								000000
							</span>
						</span>
					</div>
				</div>

				<div className="content- content-2">
					<div className="sub-title body-2-B flex_">
						<Badge value="2"/>
							스킨 정보
					</div>

					<div className="flex_ skin-box">
						<div className="active">
							<div className="skin-wrap radius-20">
								<img src="/images/design-skin-1.png" alt="skin" />
								<Link href="#">
									미리보기
								</Link>
							</div>
							<p className="txt-disabled caption-R">
								기본 스킨
							</p>
							<div className="flex_ body-2-B">
								<Label text="FREE" backgroundColor="bg-purple-1" fontColor="txt-white" icon="false" iconColor=""/>
								스킨명
							</div>
						</div>

						<div>
							<div className="skin-wrap radius-20">
								<img src="/images/design-skin-1.png" alt="skin" />
								<Link href="#">
									미리보기
								</Link>
							</div>
							<p className="txt-disabled caption-R">
								유료 스킨
							</p>
							<div className="flex_ body-2-B">
								<Label text="BASIC" backgroundColor="bg-pink-1" fontColor="txt-white" icon="false" iconColor=""/>
								스킨명
							</div>
						</div>

						<div className="done">
							<div className="skin-wrap radius-20 ">
								<img src="/images/design-skin-1.png" alt="skin" />
								<Link href="#">
									미리보기
								</Link>
								<BtnCta text="업그레이드하고 이용하기" />
							</div>
							<p className="txt-disabled caption-R">
								유료 스킨
							</p>
							<div className="flex_ body-2-B">
								<Label text="PREMIUM" backgroundColor="bg-mint-1" fontColor="txt-white" icon="false" iconColor=""/>
								스킨명
							</div>
						</div>
					</div>
				</div>

				<div className="button-wrap flex_">
						<PrimaryBtn text="저장하기" state="default"/>
					</div>

			</div>
		</div>
	)
};

export default Component;