import React, { useEffect, useState, useRef } from "react";
import Icon from "/src/components/icon/icon.tsx";
import Label from "/src/components/label/label";
import ButtonSecondaryS from "/src/components/buttons/button_secondary_s";
import { sleep } from "../../util/sleep";

const Component = (props) => {
  const [fileSize, setFileSize] = useState(null);
  const [process, setProcess] = useState(20);

  const [state, setState] = useState(null);
  const [type, setType] = useState(null);
  const [urlState, setUrlState] = useState(null);

  const fileInputRef = useRef();

  useEffect(() => {
    if (props.urlState) {
      setState("done");
      setType("preview");
      props.setFileState(props.fileState);
    }
  }, [props.fileState]);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    props.setFileState(file);
    setFileSize(e.target.files[0].size);
    const MAX_SIZE = 100 * 1024 * 1024;

    if (fileSize > MAX_SIZE) {
      alert("이미지가 너무 무겁습니다!");
    }

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        getImageSize(reader.result);
        if (imgWidth + imgHeight > 1600) {
          alert("이미지 크기가 너무 큽니다!");
        }

        setUrlState(reader.result);
      };
      reader.readAsDataURL(file);

      setState("proceeding");

      await sleep(300);
      setProcess(50);

      await sleep(200);
      setProcess(80);

      await sleep(100);

      const ext = e.target.files[0].name.split('0').pop().toLowerCase();
      if(ext in ['jpg', 'jpeg', 'png']) {
        setState("done");
        setType("preview");
      } else if(ext in ['hwp', 'docx', 'pdf']) {
        setState('done');
        setType('technology')
      } else {
        console.log('지원되지 않는 파일 형식입니다.');
        setState('default');
        setType(props.type)
      }
    }
  };

  const [imgWidth, setImgWidth] = useState(0);
  const [imgHeight, setImgHeight] = useState(0);

  const getImageSize = () => {
    const img = new Image();
    img.src = props.urlState;

    img.onload = () => {
      setImgWidth(img.width);
      setImgHeight(img.height);
    };
  };

  const handleSpanClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div
      className={`upload-container radius-8 ${state || props.state} ${
        type || props.type
      }`}
    >
      <div className="img-box">
        <img className="img-file img-" src="/images/file.png" alt="file" />
        <img className="img-hwp img-" src="/images/hwp.png" alt="hwp" />
        <img className="img-docx img-" src="/images/docx.png" alt="docx" />
        <img className="img-pdf img-" src="/images/pdf.png" alt="pdf" />
        <img
          className="img-preview"
          src={urlState}
          alt="file"
          style={{
            maxWidth: imgWidth > imgHeight ? "auto" : "60px",
            maxHeight: imgWidth < imgHeight ? "auto" : "60px",
          }}
        />
        <Label
          backgroundColor="bg-violet-5"
          fontColor="txt-violet-1"
          text="보고서"
          icon="false"
          iconColor=""
        />
      </div>
      <div className="text-box body-3-R">
        <div className="normal-box">
          업로드할 파일을 드래그하거나
          <br />
          <span onClick={handleSpanClick}>업로드</span>해주세요
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept={props.accept || "image/*"}
            style={{ display: "none" }}
          />
        </div>
        <div className="technology-box">
          원하는 <span>기술문서를 선택</span>해 주세요.
        </div>
      </div>
      <div className="proceeding-box">
        <div className="flex_ title-line body-3-B">
          <span>파일명.확장자</span>
          <Icon icon="cancel" size={9} color="#464749" stroke="" />
        </div>
        <div className="proceeding-line radius-8">
          <span style={{ width: `${process}%` }}></span>
        </div>
        <div className="sub-text-line flex_ caption-R">
          <span>파일크기 {fileSize / 1024 / 1024}mb</span>
          <span className="situation">업로드 중... {process}%</span>
        </div>
      </div>
      <div className="done-box">
        <div className="done-technology-text-box flex_">
          <div className="text-wrap">
            <h6 className="body-3-B">기술문서명</h6>
            <p className="caption-R">
              연구자명<span>|</span>등록연도
            </p>
          </div>
          <Icon icon="cancel" size={9} color="#464749" stroke="" />
        </div>

        <div className="done-normal-text-box flex_">
          <div className="text-wrap">
            <h6 className="body-3-B">파일명.확장자</h6>
            <p className="caption-R">파일크기 mb</p>
          </div>
          <Icon icon="cancel" size={9} color="#464749" stroke="" />
        </div>

        <div className="done-preview-text-box flex_">
          <div className="text-wrap">
            <h6 className="body-3-B">파일명.확장자</h6>
            <p className="caption-R">파일크기 {fileSize / 1024 / 1024}mb</p>
          </div>
          <div className="flex_">
            <ButtonSecondaryS text="AI 수정" />
            <Icon icon="cancel" size={9} color="#464749" stroke="" />
          </div>
        </div>
      </div>
      <div className="preview-box"></div>
    </div>
  );
};
export default Component;
