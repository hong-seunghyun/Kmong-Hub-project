import React from "react";
import ButtonL from "/src/components/buttons/button_outline_l"
import SelectLabel from "/src/components/label/select_label";
import Button from "/src/components/buttons/button_primary_l"
import Link from "next/link";
import Icon from "/src/components/icon/icon"
import Badge from "/src/components/label/badge"
import Upload from "/src/components/upload/upload"
import Input from "/src/components/textFields/textInput"
import TextArea from "/src/components/textFields/textArea"
import DatePicker from "/src/components/date/date-picker-single"
import CheckBox from "/src/components/radio/checkbox"
import useResearcherForm from "/src/hooks/contents/researcher/useResearcherForm";

const ManualForm = () => {
  const {
    formStates: {
      rscNmState: [rscNm, setRscNm],
      deptMajrsState: [deptMajrs, setDeptMajrs],
      pstnNmState: [pstnNm, setPstnNm],
      pflFileState: [pflFile, setPflFile],
      labNmState: [labNm, setLabNm],
      labWebAddrState: [labWebAddr, setLabWebAddr],
      hpNoState: [hpNo, setHpNo],
      ofcPhcNoState: [ofcPhcNo, setOfcPhcNo],
      emailAddrState: [emailAddr, setEmailAddr],
      webAddrState: [webAddr, setWebAddr],
      lctCntnState: [lctCntn, setLctCntn],
      inaCntnState: [inaCntn, setInaCntn],
      aosCntnState: [aosCntn, setAosCntn],
      educationCntnState: [educationCntn, setEducationCntn],
      ytbPathState: [ytbPath, setYtbPath],
    },
    categoriesStates: {
      categories,
      setCategories,
      categorySearchKeyword,
      setCategorySearchKeyword,
      categorySearchResultOpened,
      setCategorySearchResultOpened,
      categorySearchResult,
      onChangeCategorySearch,
    },
    carerInfosStates: {
      rscCarerInfos,
      appendCarerInfo,
      deleteCarerInfo,
      updateStartDate,
      updateEndDate,
      updateHdofYn,
      updateCmpyNm,
      updateRspbTaskCntn,
    },
    deptMajrStates: {
      appendDeptMajr,
      deleteDeptMajr,
    },
    submitAvailable,
    submit,
  } = useResearcherForm()

  return (
    <>
      <div className="sub-title body-2-B flex_">
        <Badge value="2" />
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
        <Upload state="default" type="normal" fileState={pflFile} setFileState={setPflFile} />
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
          setStateFunc={onChangeCategorySearch}
          state={categorySearchKeyword}
        />
        <Icon icon="search" size={16} stroke="none" color="#574AFF" />
        <Icon icon="delete" size={16} stroke="none" color="#B3B6B8" />
        <div
          className="wrap radius-8 border-gray-4"
          style={{ display: categorySearchResultOpened ? "block" : "none" }}
        >
          <div className="flex_ result-search-box body-3-R ">
            {
              categorySearchResult.map((item, index) => (
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
        />
      </div>

      <div className="input-wrap">
        <Input importState="none" labelText="연구실" placeholder="연구실 명을 입력해 주세요." valueType="" helperTextResult="none" iconState="false" state={labNm} setState={setLabNm} />
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
          state={emailAddr}
          setState={setEmailAddr}
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
          <Badge value="3" />
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
            <TextArea
              labelText="" placeholder="담당하신 업무와 성과에 대해 간단명료하게 적어주세요" valueType="" helperTextResult="none"
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
          <Badge value="4" />
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
          <Badge value="5" />
          강의
        </div>
        <div className="input-wrap">
          <p className="table-caption body-2-B">강의 내역<span className="txt-violet-1">*</span></p>
          <TextArea
            labelText="" placeholder="강의 내역을 입력해 주세요." valueType="" helperTextResult="none"
            state={lctCntn}
            setState={setLctCntn}
          />
        </div>
      </div>

      <div className="content- ">
        <div className="sub-title body-2-B flex_">
          <Badge value="6" />
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
          <Badge value="7" />
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
          <Badge value="8" />
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
  )
}

export default ManualForm
