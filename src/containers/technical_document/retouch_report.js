import React from "react";
import Link from "next/link";
import Badge from "/src/components/label/badge";
import Input from "/src/components/textFields/textInput.tsx";
import ButtonL from "/src/components/buttons/button_outline_l"
import Button from "/src/components/buttons/button_primary_l"
import DropsMenu from "/src/components/dropsMenu/drops_menu";
import Icon from "/src/components/icon/icon.tsx"
import DatePicker from "/src/components/date/date-picker-single"
import Upload from "/src/components/upload/upload"
import CheckBox from "/src/components/radio/checkbox"
import CompanyInput from "/src/components/searchBar/search_bar_company_management_menu"
import { Editor } from "@tinymce/tinymce-react";
import { useLayoutEffect } from "react";
import { getTechDetails } from "../../asset/apis/tech";
import { useRouter } from "next/router";
import { useState } from "react";

const drop_datas = [
	{
		id: "P",
		title: '특허'
	},
	{
		id: "T",
		title: '논문'
	},
	{
		id: "R",
		title: '보고서'
	}
];

const send_datas = [
	{
		id: 'O',
		title: '출원 중'
	},
	{
		id: 'O',
		title: '미공개 상태'
	},
	{
		id: 'O',
		title: '공개 상태'
	},
	{
		id: 'O',
		title: '등록 완료'
	},
	{
		id: "O",
		title: '취하 상태'
	},
	{
		id: 'O',
		title: '거절 상태'
	}
];

const Component = () => {

	const router = useRouter();
	const [ data, setData ] = useState([]);

	const [ typeCd, setTypeCd ] = useState('P');
  const [ tcqNm, setTcqNm ] = useState('');
  const [ rsacUcmdCd, setRsacUcmdCd ] = useState('');
  const [ apyNo, setApyNo ] = useState('');
  const [ apyAd, setApyAd ] = useState('');
  const [ statCd, setStatCd ] = useState('');
  const [ rgstNo, setRgstNo ] = useState('');
  const [ ivtNm, setIvtNm ] = useState('');
  const [ ipcVal, setIpcVal ] = useState('');
  const [ cpcVal, setCpcVal ] = useState('');
  const [ piuaYn, setPiuaYn ] = useState('');
  
  const [ orgn, setOrgn ] = useState('');
  const [ file, setFile ] = useState('');

	useLayoutEffect(() => {
		if(!router.isReady) return;
		const no = router.query.no;
		getTechDetails(no).then(res => {
			console.log(res.data);
			setData(res.data.data);
			initData(res.data.data);
		}).catch(err => {
			console.log(err);
		});
	},[router.isReady]);

	const initData = (data) => {
		setTcqNm(data.tcqNm);
		setRsacUcmdCd(data.rsacUcmdCd);
		setOrgn(data.orgnNm);
		setApyNo(data.apyNo);
		setRgstNo(data.rgstNo);
	}

	return(
		<div className="page-wrap">
			<div className="board- board-add document- technical-document-add">

				<div className="head-wrap flex_">
					<h1 className="display-5-B">
						기술문서 등록/수정
					</h1>
				</div>

				<div className="content- content-2">
					<div className="sub-title body-2-B flex_">
						<Badge value="1"/>
							기본 정보
					</div>
					<div className="box-">
						<Input labelText="기술명" placeholder="기술명을 입력해 주세요." helperTextResult="none" iconState="false" state={tcqNm} setState={setTcqNm}/>
					</div>

					<div className="input-search box-">
					<p className="table-caption body-2-B">소속<span className="txt-violet-1">*</span></p>
						<CompanyInput
              labelText="소속"
              placeholder="소속을 검색해 주세요."
              valueType=""
              helperTextResult="none"
              iconState="false"
            /> 
					</div>

					<div className="box-">
						<Input importState="none" labelText="출원번호" placeholder="출원번호를 입력해 주세요." helperTextResult="none" iconState="false" state={apyNo} setState={setApyNo}/>
					</div>

					<div className="box-">
						<Input importState="none" labelText="등록번호" placeholder="등록번호 입력해 주세요." helperTextResult="none" iconState="false" state={rgstNo} setState={setRgstNo}/>
					</div>

					<div className="flex_ box- flex_date">
						<div>
							<p className="table-caption body-2-B">상태<span className="txt-violet-1">*</span></p>
							<DropsMenu datas={send_datas} setState={setStatCd} default={statCd}/>
						</div>
						<div>
							<p className="table-caption body-2-B">출원 일자<span className="txt-violet-1">*</span></p>
							<DatePicker />
						</div>
					</div>

					<div className="box-">
						<Input labelText="발명자" placeholder="발명자를 입력해 주세요." helperTextResult="none" iconState="false"/>
					</div>

					<div className="box-">
						<Input labelText="IPC" placeholder="IPC를 입력해 주세요." helperTextResult="none" iconState="false"/>
					</div>

					<div className="box-">
						<Input labelText="CPC" placeholder="CPC를 입력해 주세요." helperTextResult="none" iconState="false"/>
					</div>

					<div className="box-">
						<p className="table-caption body-2-B">첨부파일<span className="txt-violet-1">*</span></p>
						<Upload state="done" type="normal" file=""/>
						<p className="caption-R helper-txt">
						파일 형식: <span>PDF, DOCX, HWP</span> <span className="bar">|</span> 최대 파일 크기: <span>500mb</span>
						</p>
					</div>
					<div className="box-">
						<p className="table-caption body-2-B">상세정보<span className="txt-violet-1">*</span></p>
						<Editor />
					</div>
					<div className="box- check-box">
						<CheckBox size="small" label="개인정보 수집 및 이용에 동의합니다." />
					</div>
					<div className="btn-wrap flex_">
						<div className="flex_">
							<Link href="#">
								<ButtonL text="초기화" />
							</Link>
							<Link href="/technical_document">
								<Button text="저장" />
							</Link>
						</div>
					</div>
				</div>
				
			</div>
				
		</div>
	)
};

export default Component;