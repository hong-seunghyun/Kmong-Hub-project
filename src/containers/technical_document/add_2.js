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
import Radio from "/src/components/radio/radio"
import { useEffect } from "react";
import { useState } from "react";
import { searchOrgn } from "../../asset/apis/signup";
import { addPatent } from "../../asset/apis/tech";

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
  const [ apyNo, setApyNo ] = useState('');
  const [ apyAd, setApyAd ] = useState('');
  const [ statCd, setStatCd ] = useState('');
  const [ rgstNo, setRgstNo ] = useState('');
  const [ ivtNm, setIvtNm ] = useState('');
  const [ ipcVal, setIpcVal ] = useState('');
  const [ cpcVal, setCpcVal ] = useState('');
  const [ piuaYn, setPiuaYn ] = useState('');
  
  const [ data, setData ] = useState([]);
  const [ orgn, setOrgn ] = useState('');
  const [ file, setFile ] = useState('');

  const searchOrgan = async () => {
		await searchOrgn().then(res => {
			setData(res.data.result.rows);
			console.log(res.data.result.rows);
		}).catch(err => {
			console.log(err);
		});
	}

  const createThesis = () => {
    addPatent({
      typeCd,
      tcqNm,
      rsacUcmdCd,
      apyNm,
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
    } else if(typeCd === 'R') {
      window.location = '/technical_document/add_3';
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
        <DropsMenu placeholder={"유형을 선택해 주세요."} datas={drop_datas} setState={setTypeCd} default="논문"/>

				<div className="content- content-2">
					<div className="sub-title body-2-B flex_">
						<Badge value="2"/>
							기본 정보
					</div>
					<div className="box-">
            <Input
              labelText="기술명"
              placeholder="기술명을 입력해 주세요."
              helperTextResult="none"
              iconState="false"
              setState={setTcqNm}
              state={tcqNm}
            />
          </div>

					<div className="flex_ input-search box-">
            <CompanyInput
              labelText="연구 기관"
              placeholder="연구 기관을 검색해 주세요."
              valueType=""
              helperTextResult="none"
              iconState="false"
              state={orgn} setState={setOrgn} data={data} setResult={setRsacUcmdCd}
            />
            <Icon icon="search" size={16} stroke="none" color="#574AFF" />
          </div>

					<div className="box-">
						<Input importState="none" labelText="문서번호" placeholder="문서번호를 입력해 주세요." helperTextResult="none" iconState="false"/>
					</div>

					<div className="flex_ box- flex_date">
						<div>
							<p className="table-caption body-2-B">발행연도<span className="txt-violet-1">*</span></p>
							<DatePicker />
						</div>
						<div>
							<p className="table-caption body-2-B">투고 선택<span className="txt-violet-1">*</span></p>
							<div className="flex_">
								<Radio label="O" id="radio-a-1" name="radio-a" /> 
								<Radio label="X" id="radio-a-1" name="radio-a" /> 
							</div>
						</div>
					</div>

					<div className="box-">
						<Input labelText="발명자" placeholder="발명자를 입력해 주세요." helperTextResult="none" iconState="false"/>
					</div>

					<div className="box-">
						<Input labelText="출처" placeholder="출처를 입력해 주세요." helperTextResult="none" iconState="false"/>
					</div>

					<div className="box-">
						<p className="table-caption body-2-B">첨부파일<span className="txt-violet-1">*</span></p>
						<Upload state="default" type="normal" file=""/>
						<p className="caption-R helper-txt">
						파일 형식: <span>PDF, DOCX, HWP</span> <span className="bar">|</span> 최대 파일 크기: <span>500mb</span>
						</p>
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