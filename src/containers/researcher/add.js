import React, { useCallback, useMemo, useState, useEffect, useLayoutEffect } from "react";
import ButtonL from "/src/components/buttons/button_outline_l"
import SelectLabel from "/src/components/label/select_label";
import Button from "/src/components/buttons/button_primary_l"
import Link from "next/link";
import Label from "/src/components/label/label";
import Icon from "/src/components/icon/icon.tsx"
import Badge from "/src/components/label/badge"
import Radio from "/src/components/radio/radio"
import Upload from "/src/components/upload/upload"
import Input from "/src/components/textFields/textInput.tsx"
import TextArea from "/src/components/textFields/textArea.tsx"
import DatePicker from "/src/components/date/date-picker-single"
import CheckBox from "/src/components/radio/checkbox"
import { setResearcher, getResearcherCategory } from "/src/asset/apis/contents/researcher";
import useRscCarerInfos from "../../hooks/contents/useRscCarerInfos";

const Component = () => {

  const [registType, setRegistType] = useState(-1)

  /** 필수값 */
  const [rscNm, setRscNm] = useState() // 연구자명
  const [deptMajrs, setDeptMajrs] = useState([]) // 부서/학과
  const [pstnNm, setPstnNm] = useState() // 직책
  const crtTypeCd = useMemo(() => {
    if(registType === 0) return 'A'
    if(registType === 1) return 'B'
    if(registType === 2) return 'N'
    return null
  }) // 생성 유형 코드

  /** 선택값 */
  const [pflFile, setPflFile] = useState() // 프로필 사진
  const [labNm, setLabNm] = useState() // 연구실
  const [labWebAddr, setLabWebAddr] = useState() // 연구실 홈페이지
  const [hpNo, setHpNo] = useState() // 전화번호
  const [ofcPhcNo, setOfcPhcNo] = useState() // 사무실 전화번호
  const [emailAdr, setEmailAdr] = useState() // 이메일 주소
  const [webAddr, setWebAddr] = useState() // 홈페이지
  const [lctCntn, setLctCntn] = useState() // 강의 내역
  const [inaCntn, setInaCntn] = useState() // 대외활동
  const [aosCntn, setAosCntn] = useState() // 연구 내역
  const [educationCntn, setEducationCntn] = useState() // 학력 내역
  const [ytbPath, setYtbPath] = useState() // 유튜브 주소

  
  const [search, setSearch] = useState("")
  const [toggle, setToggle] = useState(false)

  const [data, setData] = useState([])
  const searchResult = useMemo(() => (
    data.filter(item => item.catgNm.includes(search))
  ), [data, search])

  const searchDeptMajr = useCallback(async () => {
    const res = await getResearcherCategory()
    if(res.status === 200) {
      setData(res.data.data)
    } else {
      console.log('error')
    }
  })

  useLayoutEffect(() => {
    searchDeptMajr()
  }, [])

  const appendDeptMajr = useCallback((idx) => () => {
    const isExist = deptMajrs.filter(item => item.deptMajrNo === searchResult[idx].catgNo)
    if(isExist.length > 0) {
      setToggle(false)
      return
    }
    setDeptMajrs([...deptMajrs, {
      deptMajrNo: searchResult[idx].catgNo,
      deptMajrNm: searchResult[idx].catgNm,
      seq: deptMajrs.length + 1,
    }])
    setSearch('')
    setToggle(false)
  }, [deptMajrs, searchResult])

  const deleteDeptMajr = useCallback((idx) => () => {
    const filtered = deptMajrs.filter(item => item.seq !== idx)
    const reIndexed = filtered.map((item, index) => ({
      ...item,
      seq: index + 1
    }))
    setDeptMajrs(reIndexed)
  }, [deptMajrs])
  const onChange = (e) => {
    setSearch(e.target.value);
    if(data.length == 0) setToggle(false);
    else setToggle(true)
  }

  const {
    rscCarerInfos,
    appendCarerInfo,
    deleteCarerInfo,
    updateStartDate,
    updateEndDate, 
    updateHdofYn, 
    updateCmpyNm, 
    updateRspbTaskCntn, 
    rscCarerInfosAvailable
  } = useRscCarerInfos()

  const submitAvailable = useMemo(() => {
    return rscNm && deptMajrs.length > 0 && pstnNm && rscCarerInfosAvailable
  }, [rscNm, deptMajrs, pstnNm, rscCarerInfosAvailable])

  const formData = useMemo(() => {
    const _formData = new FormData();
    const dto = {
      rscNm,
      deptMajrs: {
        deptMajrNo: deptMajrs.length > 0 ? deptMajrs[0].deptMajrNo : undefined, 
        //seq: deptMajrs.length > 0 ? deptMajrs[0].seq : undefined,
      },
      pstnNm,
      ...(crtTypeCd && {crtTypeCd}), 
      ...(aosCntn && {aosCntn}),
      ...(educationCntn && {educationCntn}),
      ...(emailAdr && {emailAdr}),
      ...(hpNo && {hpNo}),
      ...(inaCntn && {inaCntn}),
      ...(labNm && {labNm}),
      ...(labWebAddr && {labWebAddr}),
      ...(lctCntn && {lctCntn}),
      ...(ofcPhcNo && {ofcPhcNo}),
      ...(rscCarerInfos && {rscCarerInfos}),
      ...(webAddr && {webAddr}),
      ...(ytbPath && {ytbPath}),
    }

    console.log(JSON.stringify(dto))

    const blob = new Blob([JSON.stringify(dto)], { type: "application/json" });

    _formData.append("rscRegiDto", blob);
    if(pflFile) {
      _formData.append("pflFile", pflFile);
    }
    return _formData;
  }, [
      aosCntn,
      deptMajrs,
      crtTypeCd,
      deptMajrs,
      educationCntn,
      emailAdr,
      hpNo,
      inaCntn,
      labNm,
      labWebAddr,
      lctCntn,
      ofcPhcNo,
      pstnNm,
      rscCarerInfos,
      rscNm,
      webAddr,
      ytbPath, 
      pflFile
    ])

  const submit = useCallback(async () => {
    if(registType === 2) {
      const res = await setResearcher(formData)
      if (res.status === 200) {
        alert('연구자 등록이 완료되었습니다.')
      }
    }
  }, [formData])

  return(
    <div className="page-wrap">
      <div className="contents-technology contents- contents-news-writer contents-event-writer contents-technology-retouch researcher-add researcher-contents">
        <h1 className="flex_ display-5-B">
          연구자 등록/수정
          <span className="flex_ ai-cnt bg-lightGray radius-8">
            <span className="flex_ caption-R txt-disabled">
              <Icon icon="ai" size={13} color="#574AFF" stroke="" />
              AI 생성 1회 사용 중
            </span>
            <span className="flex_ total-cnt body-3-R txt-second-default">
              AI 수정 가능 횟수
              <span className="flex_ number- body-3-B">
                <span className="left txt-violet-1">
                  40
                </span>
                <span className="txt-disabled">
                  /
                </span>
                <span className="total ">
                  40
                </span>
              </span>
            </span>
          </span>
        </h1>

        <div className="sub-title body-2-B flex_">
          <Badge value="1"/>
          유형 선택
        </div>

        <div className="content-1 content-wrap">
          <div className="flex_ radio-flex">
            <span className="flex_">
              <Radio label="파일 업로드" state="disabled" name="radio-a" id="radio-a-2"/>
              <Label text="AI 사용" backgroundColor="bg-violet-5" fontColor="txt-violet-1" icon="true" iconColor="#574AFF"/>
            </span>
            <span className="flex_">
              <Radio label="텍스트 입력" state="disabled" name="radio-a" id="radio-a-3"/>
              <Label text="AI 사용" backgroundColor="bg-violet-5" fontColor="txt-violet-1" icon="true" iconColor="#574AFF"/>
            </span>
            <span className="flex_">
              <Radio 
                label="사용 안함" 
                name="radio-a" 
                id="radio-a-4"
                onclick={() => {
                  setRegistType(2)
                }}
                checked={registType === 2}
              />
            </span>
          </div>
        </div>

        {registType === 2 && ( 
          <>
            <div className="sub-title body-2-B flex_">
              <Badge value="2"/>
              기본 정보
            </div>

            <div className="input-wrap">
              <Input 
                labelText="연구자명" 
                placeholder="연구자명을 입력해 주세요."
                valueType="" 
                helperTextResult="none" 
                iconState="false"
                state={rscNm}
                setState={setRscNm}
              />
            </div>

            <div className="input-wrap">
              <p className="table-caption body-2-B">연구자 프로필</p>
              <Upload state="default" type="normal" fileState={pflFile} setFileState={setPflFile}/>
              <p className="caption-R helper-txt">
                허용 사이즈: <span>800px x 800px</span> <span className="bar">|</span> 파일 형식: <span>JPG,PNG,JPEG</span><span className="bar">|</span> 최대 파일 크기: <span>100mb</span>
              </p>
            </div>

            <div className="input-wrap input-search search-container-large">
              <Input 
                labelText="부서/학과" 
                placeholder="부서/학과를 입력해 주세요." 
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
                        onClick={appendDeptMajr(index)}
                      >
                        {item.catgNm}
                      </span>
                    ))
                  }
                </div>
            </div>
            </div>
            <div className="flex_ select-flex">
              {deptMajrs.map((item, index) => ( 
                <SelectLabel 
                  backgroundColor="bg-violet-5" 
                  fontColor="txt-violet-1" 
                  text={item.deptMajrNm} 
                  icon="true" 
                  iconColor="#574AFF"
                  onClickDelete={deleteDeptMajr(item.seq)}
                />
              ))}
            </div>

            <div className="input-wrap">
              <Input 
                labelText="직책" 
                placeholder="직책을 입력해 주세요." 
                valueType="" 
                helperTextResult="none" 
                iconState="false"
                state={pstnNm}
                setState={setPstnNm}
                required
              />
            </div>

            <div className="input-wrap">
              <Input importState="none" labelText="연구실" placeholder="연구실 명을 입력해 주세요." valueType="" helperTextResult="none" iconState="false" 
                state={labNm}
                setState={setLabNm}
              />
            </div>

            <div className="input-wrap">
              <Input importState="none" labelText="연구실 홈페이지" placeholder="연구실 홈페이지를 입력해 주세요." valueType="" helperTextResult="none" iconState="false"
                state={labWebAddr}
                setState={setLabWebAddr}
              />
            </div>

            <div className="input-wrap">
              <Input importState="none" labelText="휴대폰 번호" placeholder="휴대폰 번호를 입력해 주세요." valueType="" helperTextResult="none" iconState="false"
                state={hpNo}
                setState={setHpNo}
              />
            </div>

            <div className="input-wrap">
              <Input importState="none" labelText="사무실 전화번호" placeholder="사무실 전화번호를 입력해 주세요." valueType="" helperTextResult="none" iconState="false"
                state={ofcPhcNo}
                setState={setOfcPhcNo}
              />
            </div>

            <div className="input-wrap">
              <Input importState="none" labelText="이메일" placeholder="이메일을 입력해 주세요." valueType="" helperTextResult="none" iconState="false"
                state={emailAdr}
                setState={setEmailAdr}
              />
            </div>

            <div className="input-wrap">
              <Input importState="none" labelText="홈페이지" placeholder="홈페이지를 입력해 주세요." valueType="" helperTextResult="none" iconState="false"
                state={webAddr}
                setState={setWebAddr}
              />
            </div>

            <div className="content-4 content-wrap">
              <div className="sub-title body-2-B flex_">
                <Badge value="3"/>
                경력 정보
              </div>
              {rscCarerInfos.map((item, index) => (
                <div className="direct_input radius-8">
                  <p className="direct_input_title flex_">
                    경력
                    <button
                      onClick={deleteCarerInfo(index)}
                    >
                      <Icon icon="cancel" size={9} color="#464749" stroke="none" />
                    </button>
                  </p>
                  <p className="table-caption body-2-B">회사명<span className="txt-violet-1">*</span></p>
                  <Input importState="none" labelText="회사명" placeholder="회사명을 입력해 주세요." valueType="" helperTextResult="none" iconState="false" state={item.cmpyNm} setState={updateCmpyNm(index)}
                  />
                  <div className="flex_ right-flex">
                    <div>
                      <p className="table-caption body-2-B">입사년월<span className="txt-violet-1">*</span></p>
                      <DatePicker setDate={updateStartDate(index)} />
                    </div>
                    <div>
                      <p className="table-caption body-2-B">퇴사년월<span className="txt-violet-1">*</span></p>
                      <DatePicker setDate={updateEndDate(index)} />
                      <CheckBox size="small" label="재직 중" setCheckState={updateHdofYn(index)} />
                    </div>
                  </div>
                  <p className="table-caption body-2-B">담당 업무<span className="txt-violet-1">*</span></p>
                  <TextArea labelText="" placeholder="담당하신 업무와 성과에 대해 간단명료하게 적어주세요" valueType="" helperTextResult="none"
                    state={item.rspbTaskCntn}
                    setState={updateRspbTaskCntn(index)}
                  />
                </div>
              ))}
              <div className="flex_ button-input custom-button-wrap">
                <div className="custom-button bg-white flex_ radius-8" onClick={appendCarerInfo}>
                  <Icon icon="plus" size={13} color="#464749" stroke="none" />
                  경력 추가
                </div>
              </div>
            </div>

            <div className="content- ">
              <div className="sub-title body-2-B flex_">
                <Badge value="4"/>
                연구할 동영상
              </div>
              <div className="input-wrap">
                <p className="table-caption body-2-B">유튜브 URL<span className="txt-violet-1">*</span></p>
                <Input importState="" labelText="유튜브 URL" placeholder="URL을 입력해 주세요." valueType="" helperTextResult="none" iconState="false"
                  state={ytbPath}
                  setState={setYtbPath}
                />
              </div>
            </div>

            <div className="content- ">
              <div className="sub-title body-2-B flex_">
                <Badge value="5"/>
                강의
              </div>
              <div className="input-wrap">
                <p className="table-caption body-2-B">강의 내역<span className="txt-violet-1">*</span></p>
                <TextArea labelText="" placeholder="강의 내역을 입력해 주세요." valueType="" helperTextResult="none"
                  state={lctCntn}
                  setState={setLctCntn}
                />
              </div>
            </div>

            <div className="content- ">
              <div className="sub-title body-2-B flex_">
                <Badge value="6"/>
                대외활동
              </div>
              <div className="input-wrap">
                <p className="table-caption body-2-B">활동 내역<span className="txt-violet-1">*</span></p>
                <TextArea labelText="" placeholder="활동 내역을 입력해 주세요." valueType="" helperTextResult="none"
                  state={inaCntn}
                  setState={setInaCntn}
                />
              </div>
            </div>

            <div className="content- ">
              <div className="sub-title body-2-B flex_">
                <Badge value="7"/>
                연구분야
              </div>
              <div className="input-wrap">
                <p className="table-caption body-2-B">연구 내역<span className="txt-violet-1">*</span></p>
                <TextArea labelText="" placeholder="연구 내역을 입력해 주세요." valueType="" helperTextResult="none"
                  state={aosCntn}
                  setState={setAosCntn}
                />
              </div>
            </div>

            <div className="content- ">
              <div className="sub-title body-2-B flex_">
                <Badge value="8"/>
                학력
              </div>
              <div className="input-wrap">
                <p className="table-caption body-2-B">학력 내역<span className="txt-violet-1">*</span></p>
                <TextArea labelText="" placeholder="학력 내역을 입력해 주세요." valueType="" helperTextResult="none"
                  state={educationCntn}
                  setState={setEducationCntn}
                />
              </div>
            </div>

            <div className="flex_ check_flex">
              <CheckBox size="small" label="한국기술HUB에서 연구원 정보를 수집/활용하는 것에 동의해요." />
              <p className="caption-R txt-third">
                등록된 정보는 연구원 등록 및 조회, 기술이전 및 사업화 지원 업무에만 사용돼요
              </p>
            </div>

            <div className="btn-wrap flex_">
              <div className="flex_">
                <Link href="#">
                  <ButtonL text="초기화" />
                </Link>
                <Link href="/researcher/">
                  <Button text="저장" state={!submitAvailable ? 'disabled' : ''} onclick={submit} />
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
export default Component;
