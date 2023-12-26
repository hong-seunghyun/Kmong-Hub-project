import React, { useEffect, useLayoutEffect, useState } from "react";
import Tab from "/src/components/tabs/mypage_tab_fixed";
import DatePicker from "/src/components/date/date-picker";
import SearchBox from "/src/components/searchBar/search_bar_mypage_history";
import TableHead from "/src/components/table/table_vertical_head";
import TableCell from "/src/components/table/table_vertical_cell";
import Pagnation from "/src/components/pagnation/pagnation";
import { getPayInfoList } from "../../asset/apis/mypage/myPayInfoApis";

const Component = () => {
  const [pageIdx, setPageIdx] = useState(1);
  const [payInfo, setPayInfo] = useState([]);
  const getValue = async () => {
    await getPayInfoList({ currentIdx: pageIdx })
      .then((e) => {
        // console.log("data : ", e.data.data);
        setPayInfo([...e.data.data]);
      })
      .catch((e) => console.log(e));
  };
  useLayoutEffect(() => {
    getValue();
  }, []);

  useEffect(() => {
    getValue();
  }, [pageIdx]);

  return (
    <div className="container">
      <div className="page-wrap">
        <div className="mypage-contents mypage-history">
          <h1 className="display-5-B">마이페이지</h1>
          <Tab active={2} />
          <div className="sub-page-0">
            <div className="flex_ search-box">
              <DatePicker />
              <SearchBox />
            </div>
            <div className="table-container">
              <TableHead
                headChoice="번호"
                headCategory="결제 플랜"
                headTitle="결제금액"
                headDate="결제 일자"
                headEtc="관리"
              />
              {payInfo.map((e, idx) => (
                <TableCell
                  labelBg="bg-purple-1"
                  labelColor="txt-white"
                  label="FREE"
                  number={idx + 1}
                  title={`${e.paymAmt ? e.paymAmt : ""}원`}
                  date={`${e.useStrAd ? e.useStrAd : "YYYY.MM.DD HH:MM:SS"}`}
                  choice="number"
                />
              ))}

              <Pagnation
                size="regular"
                pageIdx={pageIdx}
                setPageIdx={setPageIdx}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Component;
