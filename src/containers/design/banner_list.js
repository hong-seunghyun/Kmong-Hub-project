import React from "react";
import ButtonM from "/src/components/buttons/button_primary_m";
import DropDownMenu from "/src/components/dropsMenu/drops_company_management_menu";
import SearchBar from "/src/components/searchBar/search_bar_company_management_menu";
import TableHead from "/src/components/table/popup_table_head";
import TableCell from "/src/components/table/popup_table_cell";
import Pagnation from "/src/components/pagnation/pagnation";
import Link from "next/link";
import { useLayoutEffect } from "react";
import { getBanner } from "../../asset/apis/design/banner";
import { useState } from "react";

const Component = () => {

  const [ searchValue, setSaerchValue ] = useState('');
	const [ page, setPage ] = useState(1);
	const [ datas, setDatas ] = useState([]);

	const onchange = () => {
		getBanner(page, 10, searchValue).then(res => {
			console.log(res.data);
			setDatas(res.data.data);
		}).catch(err => {
			console.log(err);
		});
	}

	const drop_datas = [
		{
			id: 0,
			title: '노출 중'
		},
		{
			id: 1,
			title: '노출 안함'
		}
	]

	useLayoutEffect(() => {
		onchange();
	}, [page]);

  return (
    <div className="page-wrap">
      <div className="design- design-popup">
        <div className="head-wrap flex_">
          <h1 className="display-5-B">배너 관리</h1>
          <Link href="/design/banner_add">
            <ButtonM text="배너 생성" />
          </Link>
        </div>

        <div>
          <div className="flex_ search-wrap">
            <DropDownMenu datas={drop_datas}/>
            <SearchBar />
          </div>

          <div className="table-container">
            <TableHead
              headTitle="제목"
              headPc="PC 이미지"
              headMobile="모바일 이미지"
              headDate="기간"
              headCategory="상태"
              headEtc="관리"
            />
            {
              datas.map((data) => {
                return <TableCell 
                  title={data.bnrNm}
                  pc={data.pcImgPath}
                  mobile={data.mobImgPath}
                  dateFrom={data.expsStrDtm && data.expsStrDtm.split(' ')[0]}
                  dateTo={data.expsEndDtm && data.expsEndDtm.split(' ')[0]}
                  label="노출 중"
                  labelBg="bg-violet-1"
                  labelColor="txt-white"
                  link={`/design/banner_detail?bnrNo=${data.bnrNo}`}
                  />;
              })
            }
            <Pagnation size="regular" setPageIdx={setPage}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
