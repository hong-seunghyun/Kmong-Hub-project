import React from "react";
import Link from "next/link";
import Badge from "/src/components/label/badge";
import Input from "/src/components/textFields/textInput.tsx";
import CompanyInput from "/src/components/searchBar/search_bar_company_management_menu"
import ButtonL from "/src/components/buttons/button_outline_l"
import Button from "/src/components/buttons/button_primary_l"
import DropsMenu from "/src/components/dropsMenu/drops_menu";
import Icon from "/src/components/icon/icon.tsx"
import DatePicker from "/src/components/date/date-picker-single"
import Upload from "/src/components/upload/upload"
import CheckBox from "/src/components/radio/checkbox"
import { useEffect } from "react";
import { useState } from "react";
import { searchOrgn } from "../../asset/apis/signup";
import { addPatent, addReport } from "../../asset/apis/tech";

const Component = () => {

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

	const [ typeCd, setTypeCd ] = useState('T');
  const [ tcqNm, setTcqNm ] = useState('');
  const [ rsacUcmdCd, setRsacUcmdCd ] = useState('');
	const [ uniqueNo, setUniqueNo ] = useState('');
  const [ apyAd, setApyAd ] = useState('');
  const [ sbmyn, setSbmyn ] = useState('');
  const [ ivtNm, setIvtNm ] = useState('');
  const [ orgCntn, setOrgCntn ] = useState('');
  const [piuaYn, setPiuaYn] = useState("");
  
  const [ data, setData ] = useState([]);
  const [ orgn, setOrgn ] = useState('');
  const [ file, setFile ] = useState('');

  const searchOrgan = async (organ) => {
		await searchOrgn({query: organ}).then(res => {
			setData(res.data.result.rows);
		}).catch(err => {
			console.log(err);
		});
	}

  const createReport = () => {
    addReport({
      typeCd,
      tcqNm,
      rsacUcmdCd,
      apyAd,
      statCd,
      rgstNo,
      ivtNm,
      ipcVal,
      cpcVal,
      piuaYn
    }).then(res => {
      console.log(res.data);
    }).catch(err => {
      console.log(err);
    });
  }

	useEffect(() => {
    console.log(typeCd);
    if(typeCd === 'P') {
      window.location = '/technical_document/add';
    } else if(typeCd === 'T') {
      window.location = '/technical_document/add_2';
    }
		searchOrgan();
  }, [typeCd]);

	return(
		<div className="page-wrap">
			<div className="board- board-add document- technical-document-add">

				<div className="head-wrap flex_">
					<h1 className="display-5-B">
						기술문서 등록/수정
					</h1>
				</div>

				<div className="sub-title body-2-B flex_">
          <Badge value="1" />
          유형 선택
        </div>
        <DropsMenu placeholder={"유형을 선택해 주세요."} datas={drop_datas} setState={setTypeCd} default="보고서"/>

				<div className="content- content-2">
					<div className="sub-title body-2-B flex_">
						<Badge value="2"/>
							기본 정보
					</div>
					<div className="box-">
						<Input labelText="기술명" placeholder="기술명을 입력해 주세요." helperTextResult="none" iconState="false" state={tcqNm} setState={setTcqNm}/>
					</div>

					<div className="flex_ input-search box-">
						<CompanyInput labelText="연구기관" placeholder="연구기관을 검색해 주세요." valueType="" helperTextResult="none" iconState="false" state={orgn} setState={setOrgn} data={data} setResult={setRsacUcmdCd}/>
						<Icon icon="search" size={16} stroke="none" color="#574AFF" /> 
					</div>

					<div className="box-">
						<Input importState="none" labelText="문서번호" placeholder="문서번호를 입력해 주세요." helperTextResult="none" iconState="false" state={uniqueNo} setState={setUniqueNo}/>
					</div>

					<div className="flex_ box- flex_date">
						<div>
							<p className="table-caption body-2-B">발행연도<span className="txt-violet-1">*</span></p>
							<DatePicker setDate={setApyAd}/>
						</div>
					</div>

					<div className="box-">
						<Input labelText="발명자" placeholder="발명자를 입력해 주세요." helperTextResult="none" iconState="false" state={ivtNm} setState={setIvtNm}/>
					</div>

					<div className="box-">
						<Input labelText="출처" placeholder="출처를 입력해 주세요." helperTextResult="none" iconState="false" state={orgCntn} setState={setOrgCntn}/>
					</div>

					<div className="box-">
						<p className="table-caption body-2-B">첨부파일<span className="txt-violet-1">*</span></p>
						<Upload state="default" type="pdf" fileState={file} setFileState={setFile}/>
						<p className="caption-R helper-txt">
						파일 형식: <span>PDF, DOCX, HWP</span> <span className="bar">|</span> 최대 파일 크기: <span>500mb</span>
						</p>
					</div>
					<div className="box- check-box">
						<CheckBox size="small" label="개인정보 수집 및 이용에 동의합니다." setCheckState={setPiuaYn}/>
					</div>
					<div className="btn-wrap flex_">
						<div className="flex_">
							<Link href="#">
								<ButtonL text="초기화" />
							</Link>
							<Link href="/add_3">
								<Button text="저장" onclick={createReport}/>
							</Link>
						</div>
					</div>
				</div>
				
			</div>
				
		</div>
	)
};

export default Component;