import React, { useEffect, useState } from "react";
import Tab from "/src/components/tabs/settings_tab_fixed";
import OutlineBtn from "/src/components/buttons/button_outline_l";
import PrimaryBtn from "/src/components/buttons/button_primary_l";
import ToggleSwich from "/src/components/radio/slide_toggle_btn";
import Radio from "/src/components/radio/radio";
import { getSiteSttg, setSiteSttg } from "../../asset/apis/siteApis";
import { useRecoilState } from "recoil";
import {
  AddrAtom,
  BirthAtom,
  BsSectorAtom,
  CncnTcqSprYnCdAtom,
  ComAddrAtom,
  ComNmAtom,
  ComNoAtom,
  ComUrlAtom,
  SexAtom,
  SiteBcmemIdAtom,
  StartYearAtom,
  TechFieldAtom,
} from "../../store/setting/join/atom";

const TabContents = () => {
  const [addr, setAddr] = useRecoilState(AddrAtom);
  const [startYear, setStartYear] = useRecoilState(StartYearAtom);
  const [birth, setBirth] = useRecoilState(BirthAtom);
  const [comAddr, setComAddr] = useRecoilState(ComAddrAtom);
  const [sex, setSex] = useRecoilState(SexAtom);
  const [comNo, setComNo] = useRecoilState(ComNoAtom);
  const [comNm, setComNm] = useRecoilState(ComNmAtom);
  const [comUrl, setComUrl] = useRecoilState(ComUrlAtom);
  const [bsSector, setBsSector] = useRecoilState(BsSectorAtom);
  const [techField, setTechField] = useRecoilState(TechFieldAtom);

  return (
    <div className="sub-page-0">
      <div className="flex_">
        <div>
          <h6 className="body-2-B">주소</h6>
          <div className="flex_ radio-wrap">
            <ToggleSwich
              id="toggle-a"
              state="default"
              checked={addr !== "N"}
              setState={setAddr}
              onclick={() => setAddr("N")}
            />
            <span className="flex_">
              <Radio
                id="radio-a"
                label="필수"
                state={addr !== "I" && "disabled"}
                name="radio-0"
                onclick={() => setAddr("I")}
                checked={addr === "I"}
              />
              <Radio
                id="radio-b"
                label="선택"
                state={addr !== "O" && "disabled"}
                name="radio-0"
                onclick={() => setAddr("O")}
                checked={addr === "O"}
              />
            </span>
          </div>
        </div>

        <div>
          <h6 className="body-2-B">창업 연도</h6>
          <div className="flex_ radio-wrap">
            <ToggleSwich
              id="toggle-b"
              state="default"
              checked={startYear !== "N"}
              setState={setStartYear}
              onclick={() => setStartYear("N")}
            />
            <span className="flex_">
              <Radio
                id="radio-c"
                label="필수"
                state={startYear !== "I" && "disabled"}
                name="radio-1"
                onclick={() => setStartYear("I")}
                checked={startYear === "I"}
              />
              <Radio
                id="radio-d"
                label="선택"
                state={startYear !== "O" && "disabled"}
                name="radio-1"
                onclick={() => setStartYear("O")}
                checked={startYear === "O"}
              />
            </span>
          </div>
        </div>

        <div>
          <h6 className="body-2-B">생년월일</h6>
          <div className="flex_ radio-wrap">
            <ToggleSwich
              id="toggle-c"
              state="default"
              checked={birth !== "N"}
              setState={setBirth}
              onclick={() => setBirth("N")}
            />
            <span className="flex_">
              <Radio
                id="radio-e"
                label="필수"
                state={birth !== "I" && "disabled"}
                name="radio-2"
                onclick={() => setBirth("I")}
                checked={birth === "I"}
              />
              <Radio
                id="radio-f"
                label="선택"
                state={birth !== "O" && "disabled"}
                name="radio-2"
                onclick={() => setBirth("O")}
                checked={birth === "O"}
              />
            </span>
          </div>
        </div>

        <div>
          <h6 className="body-2-B">회사 주소</h6>
          <div className="flex_ radio-wrap">
            <ToggleSwich
              id="toggle-d"
              state="default"
              checked={comAddr !== "N"}
              setState={setComAddr}
              onclick={() => setComAddr("N")}
            />
            <span className="flex_">
              <Radio
                id="radio-g"
                label="필수"
                state={comAddr !== "I" && "disabled"}
                name="radio-3"
                onclick={() => setComAddr("I")}
                checked={comAddr === "I"}
              />
              <Radio
                id="radio-h"
                label="선택"
                state={comAddr !== "O" && "disabled"}
                name="radio-3"
                onclick={() => setComAddr("O")}
                checked={comAddr === "O"}
              />
            </span>
          </div>
        </div>

        <div>
          <h6 className="body-2-B">성별</h6>
          <div className="flex_ radio-wrap">
            <ToggleSwich
              id="toggle-e"
              state="default"
              checked={sex !== "N"}
              setState={setSex}
              onclick={() => setSex("N")}
            />
            <span className="flex_">
              <Radio
                id="radio-i"
                label="필수"
                state={sex !== "I" && "disabled"}
                name="radio-4"
                onclick={() => setSex("I")}
                checked={sex === "I"}
              />
              <Radio
                id="radio-j"
                label="선택"
                state={sex !== "O" && "disabled"}
                name="radio-4"
                onclick={() => setSex("O")}
                checked={sex === "O"}
              />
            </span>
          </div>
        </div>

        <div>
          <h6 className="body-2-B">회사 전화번호</h6>
          <div className="flex_ radio-wrap">
            <ToggleSwich
              id="toggle-f"
              state="default"
              checked={comNo !== "N"}
              setState={setComNo}
              onclick={() => setComNo("N")}
            />
            <span className="flex_">
              <Radio
                id="radio-k"
                label="필수"
                state={comNo !== "I" && "disabled"}
                name="radio-5"
                onclick={() => setComNo("I")}
                checked={comNo === "I"}
              />
              <Radio
                id="radio-l"
                label="선택"
                state={comNo !== "O" && "disabled"}
                name="radio-5"
                onclick={() => setComNo("O")}
                checked={comNo === "O"}
              />
            </span>
          </div>
        </div>

        <div>
          <h6 className="body-2-B">회사이름</h6>
          <div className="flex_ radio-wrap">
            <ToggleSwich
              id="toggle-g"
              state="default"
              checked={comNm !== "N"}
              setState={setComNm}
              onclick={() => setComNm("N")}
            />
            <span className="flex_">
              <Radio
                id="radio-m"
                label="필수"
                state={comNm !== "I" && "disabled"}
                name="radio-6"
                onclick={() => setComNm("I")}
                checked={comNm === "I"}
              />
              <Radio
                id="radio-n"
                label="선택"
                state={comNm !== "O" && "disabled"}
                name="radio-6"
                onclick={() => setComNm("O")}
                checked={comNm === "O"}
              />
            </span>
          </div>
        </div>

        <div>
          <h6 className="body-2-B">회사 URL</h6>
          <div className="flex_ radio-wrap">
            <ToggleSwich
              id="toggle-h"
              state="default"
              checked={comUrl !== "N"}
              setState={setComUrl}
              onclick={() => setComUrl("N")}
            />
            <span className="flex_">
              <Radio
                id="radio-o"
                label="필수"
                state={comUrl !== "I" && "disabled"}
                name="radio-7"
                onclick={() => setComUrl("I")}
                checked={comUrl === "I"}
              />
              <Radio
                id="radio-p"
                label="선택"
                state={comUrl !== "O" && "disabled"}
                name="radio-7"
                onclick={() => setComUrl("O")}
                checked={comUrl === "O"}
              />
            </span>
          </div>
        </div>

        <div>
          <h6 className="body-2-B">사업분야</h6>
          <div className="flex_ radio-wrap">
            <ToggleSwich
              id="toggle-i"
              state="default"
              checked={bsSector !== "N"}
              setState={setBsSector}
              onclick={() => setBsSector("N")}
            />
            <span className="flex_">
              <Radio
                id="radio-q"
                label="필수"
                state={bsSector !== "I" && "disabled"}
                name="radio-8"
                onclick={() => setBsSector("I")}
                checked={bsSector === "I"}
              />
              <Radio
                id="radio-r"
                label="선택"
                state={bsSector !== "O" && "disabled"}
                name="radio-8"
                onclick={() => setBsSector("O")}
                checked={bsSector === "O"}
              />
            </span>
          </div>
        </div>

        <div>
          <h6 className="body-2-B">관심 기술 분야 선택</h6>
          <div className="flex_ radio-wrap">
            <ToggleSwich
              id="toggle-j"
              state="default"
              checked={techField !== "N"}
              setState={setTechField}
              onclick={() => setTechField("N")}
            />
            <span className="flex_">
              <Radio
                id="radio-s"
                label="필수"
                state={techField !== "I" && "disabled"}
                name="radio-9"
                onclick={() => setTechField("I")}
                checked={techField === "I"}
              />
              <Radio
                id="radio-t"
                label="선택"
                state={techField !== "O" && "disabled"}
                name="radio-9"
                onclick={() => setTechField("O")}
                checked={techField === "O"}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Component = () => {
  const [subTab, setSubTab] = useState(0);
  const [activeSubTab, setActiveSubTab] = useState(0);

  const [addrYnCd, setAddr] = useRecoilState(AddrAtom);
  const [fdtYrYnCd, setStartYear] = useRecoilState(StartYearAtom);
  const [brdtYnCd, setBirth] = useRecoilState(BirthAtom);
  const [cmpyAddrYnCd, setComAddr] = useRecoilState(ComAddrAtom);
  const [cmpyPhcNoYnCd, setComNo] = useRecoilState(ComNoAtom);
  const [cmpyNmYnCd, setComNm] = useRecoilState(ComNmAtom);
  const [cmpyUrlYnCd, setComUrl] = useRecoilState(ComUrlAtom);
  const [sexYnCd, setSex] = useRecoilState(SexAtom);
  const [bizSprYnCd, setBsSector] = useRecoilState(BsSectorAtom);
  const [cncnTcqSprYnCd, setCncnTcqSprYnCd] = useRecoilState(TechFieldAtom);
  const [siteBcmemId, setSiteId] = useRecoilState(SiteBcmemIdAtom);

  const getValue = async () => {
    await getSiteSttg()
      .then((e) => {
        setAddr(e.data.data.addrYnCd);
        setStartYear(e.data.data.fdtYrYnCd);
        setBirth(e.data.data.brdtYnCd);
        setComAddr(e.data.data.cmpyAddrYnCd);
        setComNo(e.data.data.cmpyPhcNoYnCd);
        setComNm(e.data.data.cmpyNmYnCd);
        setComUrl(e.data.data.cmpyUrlYnCd);
        setSex(e.data.data.sexYnCd);
        setBsSector(e.data.data.bizSprYnCd);
        setSiteId(e.data.data.siteBcmemId);
        setCncnTcqSprYnCd(e.data.data.cncnTcqSprYnCd);
      })
      .catch((e) => console.log(e));
  };

  const setValue = async () => {
    await setSiteSttg({
      addrYnCd,
      bizSprYnCd,
      brdtYnCd,
      cmpyAddrYnCd,
      cmpyNmYnCd,
      cmpyPhcNoYnCd,
      cmpyUrlYnCd,
      cncnTcqSprYnCd,
      fdtYrYnCd,
      nmYnCd: "Y",
      sexYnCd,
      siteBcmemId,
    });
  };

  useEffect(() => {
    getValue();
  }, []);

  const setInitValue = () => {
    setAddr("N");
    setStartYear("N");
    setBirth("N");
    setComAddr("N");
    setComNo("N");
    setComNm("N");
    setComUrl("N");
    setSex("N");
    setBsSector("N");
    setCncnTcqSprYnCd("N");
  };

  return (
    <div className="container">
      <div className="page-wrap">
        <div className="setting-contents setting-join">
          <h1 className="display-5-B">사이트 설정</h1>
          <Tab setSubTab={setSubTab} activeSubTab={activeSubTab} active={5} />
          <TabContents />
          <div className="button-wrap flex_">
            <OutlineBtn text="초기화" state="default" onclick={setInitValue} />
            <PrimaryBtn text="저장" onclick={setValue} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Component;
