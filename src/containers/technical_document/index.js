import React from "react";
import ButtonM from "/src/components/buttons/button_primary_m";
import DropDownMenu from "/src/components/dropsMenu/drops_company_management_menu";
import SearchBar from "/src/components/searchBar/search_bar_none_drops_menu";
import TableHead from "/src/components/table/table_vertical_head";
import TableCell from "/src/components/table/technology_table_vertical_cell";
import Pagnation from "/src/components/pagnation/pagnation";
import Link from "next/link";
import { useLayoutEffect } from "react";
import { getTechList } from "../../asset/apis/tech";
import { useState } from "react";

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

  const [ techList, setTechList ] = useState([]);
  const [ typeCd, setTypeCd ] = useState('');

  useLayoutEffect(() => {
    getTechList(1, 5).then(res => {
      console.log(res.data.data);
      setTechList(res.data.data);
    }).catch(err => {
      console.log(err);
    })
  },[]);

  return (
    <div className="page-wrap">
      <div className="contents-technology contents- document-">
        <div className="transaction-01">
          <div className="head-wrap flex_">
            <h1 className="display-5-B">기술문서 관리</h1>
            <Link href="/technical_document/add">
              <ButtonM text="기술문서  등록" />
            </Link>
          </div>

          <div>
            <div className="flex_ search-wrap">
              <DropDownMenu datas={drop_datas} setState={setTypeCd}/>
              <SearchBar />
            </div>

            <div className="table-container">
              <TableHead
                headChoice="번호"
                headCategory="카테고리"
                headTitle="기술명"
                headWriter="연구원"
                headDate="등록연도"
                headEtc="관리"
              />
              {
                techList.map((tech) => {
                  return <TableCell
                    labelBg={tech.typeCd == 'P' ? "bg-violet-5" : tech.typeCd == 'T' ? 'bg-violet-1' : 'bg-purple-1'}
                    labelColor={tech.typeCd == 'P' ? "txt-violet-1" : tech.typeCd == 'T' ? "txt-white" : "txt-white"}
                    label={tech.typeCd == 'P' ? "특허" : tech.typeCd == 'T' ? '논문' : '보고서'}
                    choice="number"
                    number={tech.tdcNo  }
                    title={tech.tcqNm}
                    writer={tech.ivtNm}
                    date={tech.apyAd}
                    link={`/technical_document/detail_${tech.typeCd == 'P' ? "patent" : tech.typeCd == 'T' ? 'thesis' : 'report'}_1?no=${tech.tdcNo}`}
                  />
                })
              }
              
              {/* <TableCell
                labelBg="bg-violet-5"
                labelColor="txt-violet-1"
                label="특허"
                choice="number"
                number="1"
                title="기술이전명"
                writer="미나 마수드 외 2명"
                date="YYYY.MM.DD"
                link="/technical_document/detail_patent_1"
              />
              <TableCell
                labelBg="bg-violet-5"
                labelColor="txt-violet-1"
                label="특허"
                choice="number"
                number="1"
                title="기술이전명"
                writer="미나 마수드 외 2명"
                date="YYYY.MM.DD"
                link="/technical_document/detail_patent_1"
              />
              <TableCell
                labelBg="bg-violet-5"
                labelColor="txt-violet-1"
                label="특허"
                choice="number"
                number="1"
                title="기술이전명"
                writer="미나 마수드 외 2명"
                date="YYYY.MM.DD"
                link="/technical_document/detail_patent_1"
              />
              <TableCell
                labelBg="bg-violet-1"
                labelColor="txt-white"
                label="논문"
                choice="number"
                number="1"
                title="기술이전명"
                writer="미나 마수드 외 2명"
                date="YYYY.MM.DD"
                link="/technical_document/detail_thesis_1"
              />
              <TableCell
                labelBg="bg-violet-1"
                labelColor="txt-white"
                label="논문"
                choice="number"
                number="1"
                title="기술이전명"
                writer="미나 마수드 외 2명"
                date="YYYY.MM.DD"
                link="/technical_document/detail_thesis_1"
              />
              <TableCell
                labelBg="bg-violet-1"
                labelColor="txt-white"
                label="논문"
                choice="number"
                number="1"
                title="기술이전명"
                writer="미나 마수드 외 2명"
                date="YYYY.MM.DD"
                link="/technical_document/detail_thesis_1"
              />
              <TableCell
                labelBg="bg-purple-1"
                labelColor="txt-white"
                label="보고서"
                choice="number"
                number="1"
                title="기술이전명"
                writer="미나 마수드 외 2명"
                date="YYYY.MM.DD"
                link="/technical_document/detail_report_1"
              />
              <TableCell
                labelBg="bg-purple-1"
                labelColor="txt-white"
                label="보고서"
                choice="number"
                number="1"
                title="기술이전명"
                writer="미나 마수드 외 2명"
                date="YYYY.MM.DD"
                link="/technical_document/detail_report_1"
              />
              <TableCell
                labelBg="bg-purple-1"
                labelColor="txt-white"
                label="보고서"
                choice="number"
                number="1"
                title="기술이전명"
                writer="미나 마수드 외 2명"
                date="YYYY.MM.DD"
                link="/technical_document/detail_report_1"
              /> */}

              <Pagnation size="regular" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
