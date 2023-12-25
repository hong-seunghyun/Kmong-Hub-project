// @ts-check
import React, { useEffect, useMemo, useState, useLayoutEffect } from "react";
import ButtonL from "/src/components/buttons/button_outline_l"
import Button from "/src/components/buttons/button_primary_l"
import Link from "next/link";
import Icon from "/src/components/icon/icon"
import Badge from "/src/components/label/badge"
import Input from "/src/components/textFields/textInput"
import { searchOrgn } from "../../asset/apis/signup";
import { setResearcherCategory } from "/src/asset/apis/contents/researcher/api";
import { useRouter } from "next/router";
import usePageNo from "/src/hooks/contents/common/usePageNo";

const Component = () => {

	const router = useRouter();
  const no = usePageNo({ router })

  const [orgn, setOrgn] = useState('');
	const [ucmdCd, setUcmdCd] = useState('');
	const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [toggle, setToggle] = useState(false);

  const searchResult = useMemo(() => (
    data.filter(item => item.name.includes(search))
  ), [data, search])

  const [deptMajrNm, setDeptMajrNm] = useState('');

	const searchOrgan = async () => {
		await searchOrgn().then(res => {
      console.log(res.data.result.rows);
			setData(res.data.result.rows);
		}).catch(err => {
			console.log(err);
		});
	}

  const onClickSpan = (/** @type {number} */idx) => () => {
    setUcmdCd(String(searchResult[idx].id));
    setSearch(searchResult[idx].name)
    setOrgn(searchResult[idx].name)
    setToggle(false)
  }

  const onChange = (e) => {
    setSearch(e.target.value);
    if(data.length == 0) setToggle(false);
    else setToggle(true)
  }

  const onBlur = () => {
    setToggle(false);
  }

  const submitAvailable = useMemo(() => {
    return orgn !== "" && ucmdCd !== "" && deptMajrNm !== "";
  }, [orgn, ucmdCd, deptMajrNm])

  const submit = async () => {
    const res = await setResearcherCategory({
      deptMajrNm, 
      ...(no !== undefined && {deptMajrNo: no}),
      ucmdCd, 
      ucmdNm: orgn, 
      useYn: "Y",
      catgNm: deptMajrNm
    })

    if(res.status === 200 || res.status === 201) {
      const msg = no ? '부서 수정이 완료되었습니다.' : '부서 등록이 완료되었습니다.'
      alert(msg)
    } else {
      alert('일시적인 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.')
    }
  }

  const onClickReset = () => {
    setOrgn("");
    setSearch("");
    setUcmdCd("");
    setDeptMajrNm("");
  }

  useEffect(() => {
    searchOrgan()
  }, [])

	return(
		<div className="page-wrap">
			<div className="contents-technology contents- contents-news-writer contents-event-writer contents-technology-retouch researcher-add researcher-contents">
				<h1 className="flex_ display-5-B">
					소속 등록/수정
        </h1>

        <div className="sub-title body-2-B flex_">
          <Badge value="1"/>
          기본 정보
        </div>

        <div className="content-1 content-wrap">
          <div className="input-wrap input-search search-container-large">
            <Input 
              labelText="소속" 
              placeholder="소속을 입력해 주세요." 
              valueType="" 
              helperTextResult="none" 
              iconState="false"
              setStateFunc={onChange}
              state={search}
            />
            <Icon icon="search" size={16} stroke="none" color="#574AFF" /> 
            <Icon icon="delete" size={16} stroke="none" color="#B3B6B8" /> 
            <div
              className="wrap radius-8 border-gray-4"
              style={{ display: toggle ? "block" : "none" }}
            >
              <div className="flex_ result-search-box body-3-R ">
                {
                  searchResult.map((item, index) => (
                    <span
                      onClick={onClickSpan(index)}
                    >
                      {item.name}
                    </span>
                  ))
                }
              </div>
            </div>
          </div>
        </div>

				<div className="input-wrap">
					<Input labelText="부서/학과" placeholder="부서 또는 학과를 입력해주세요 (예: 컴퓨터공학과)" valueType="" helperTextResult="none" iconState="false" state={deptMajrNm} setState={setDeptMajrNm}/>
					<p className="caption-R helper-txt">
						학부표기 방법: 컴퓨터공학부 / 컴퓨터공학과
					</p>
				</div>

				<div className="btn-wrap flex_">
					<div className="flex_">
						<Link href="#">
							<ButtonL text="초기화" onclick={onClickReset} />
						</Link>
						<Link href="/researcher/company">
							<Button text="저장" state={!submitAvailable ? 'disabled' : ''} onclick={submit} />
						</Link>
					</div>
				</div>

			</div>
		</div>
	)
}
export default Component;
