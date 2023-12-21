import React from "react";
import Badge from "/src/components/label/badge"
import Radio from "/src/components/radio/radio"
import Input from "/src/components/textFields/textInput.tsx";
import DatePicker from "/src/components/date/date-picker"
import Upload from "/src/components/upload/upload"
import ButtonL from "/src/components/buttons/button_outline_l"
import Button from "/src/components/buttons/button_primary_l"
import Link from "next/link";
import { useState } from "react";
import { createBanner } from "../../asset/apis/design/banner";

const Component = () => {
  const [nameState, setNameState] = useState("");
  const [startState, setStartState] = useState("");
  const [endState, setEndState] = useState("");
  const [pathState, setPathState] = useState("");
  const [delYn, setDelYn] = useState(false);

  const [pcImg, setPcImg] = useState(null);
  const [mobImg, setMobImg] = useState(null);

  const onClickRadio = () => {
    setDelYn(!delYn);
  };

  const addBanner = () => {
		if(delYn === '' || endState === '' || startState === '' || nameState === '' || pathState === '') {
      alert('칸을 모두 채워주세요!');
      return;
		}
    const dto = {
      delYn: delYn ? "Y" : "N",
      expsEndDtm: endState,
      expsStrDtm: startState,
      bnrNm: nameState,
      bnrPath: pathState,
    };
    console.log(dto);
    createBanner(dto, mobImg, pcImg)
      .then((res) => {
        console.log(res.data);
        // window.location = '/design/popup_list';
      })
      .catch((err) => {
        console.log(err);
      });
  };

	return(
		<div className="page-wrap">
			<div className="design- design-popup">

				<div className="head-wrap flex_">
					<h1 className="display-5-B">
						배너 등록/수정
					</h1>
				</div>

				<div className="sub-title body-2-B flex_">
					<Badge value="1"/>
						기본 정보
				</div>

				<div className="box-">
					<Input
						labelText="배너 이름"
						placeholder="테스트명"
						valueType=""
						helperTextResult="none"
						iconState="false"
						state={nameState}
            setState={setNameState}
					/>
				</div>
				<div className="box-">
          <p className="table-caption body-2-B">
            로고 이미지<span className="txt-violet-1">*</span>
          </p>
          <Radio
            label="노출 무제한"
            id="radio-a"
            name="radio-a"
            onclick={onClickRadio}
            checked={delYn}
          />
          <DatePicker setStart={setStartState} setEnd={setEndState} />
        </div>
				<div className="box-">
          <p className="table-caption body-2-B">
            PC 팝업<span className="txt-violet-1">*</span>
          </p>
          <Upload
            state="default"
            type="normal"
            fileState={pcImg}
            setFileState={setPcImg}
          />
          <p className="caption-R helper-txt">
            허용 사이즈: <span>Npx x Npx</span> <span className="bar">|</span>{" "}
            파일 형식: <span>PNG</span>
            <span className="bar">|</span> 최대 파일 크기: <span>50mb</span>
          </p>
        </div>
				<div className="box-">
          <p className="table-caption body-2-B">
            모바일 팝업<span className="txt-violet-1">*</span>
          </p>
          <Upload
            state="default"
            type="normal"
            fileState={mobImg}
            setFileState={setMobImg}
          />
          <p className="caption-R helper-txt">
            허용 사이즈: <span>Npx x Npx</span> <span className="bar">|</span>{" "}
            파일 형식: <span>PNG</span>
            <span className="bar">|</span> 최대 파일 크기: <span>50mb</span>
          </p>
        </div>
				<div className="box-">
          <Input
            labelText="팝업 링크"
            placeholder="www.google.co.kr"
            valueType=""
            helperTextResult="none"
            iconState="false"
            state={pathState}
            setState={setPathState}
          />
        </div>

				<div className="btn-wrap flex_">
						<div className="flex_">
							<Link href="#">
								<ButtonL text="초기화" />
							</Link>
							<Link href="/design/banner_add">
								<Button text="등록" onclick={addBanner} />
							</Link>
						</div>
					</div>
			</div>
				
		</div>
	)
};

export default Component;