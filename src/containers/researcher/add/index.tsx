import React, { useMemo, useState } from "react";
import Label from "/src/components/label/label";
import Icon from "/src/components/icon/icon"
import Badge from "/src/components/label/badge"
import Radio from "/src/components/radio/radio"
import { CONTENTS_CREATE_TYPE } from "/src/asset/apis/contents/common/codes";
import ManualForm from "./manual";
import UploadFile from "./file";

const AddResearcher = () => {
  const [createType, setCreateType] = useState<keyof typeof CONTENTS_CREATE_TYPE>()

  const contentsWrapperClassName = useMemo(() => {
    if (createType === 'F') return 'contents-technology contents- contents-news-writer contents-event-writer contents-add researcher-add researcher-contents'
    else if (createType === 'T') return 'contents-technology contents- contents-news-writer contents-event-writer contents-technology-retouch researcher-add researcher-contents'
    else return 'contents-technology contents- contents-news-writer contents-event-writer contents-technology-retouch researcher-add researcher-contents'
  }, [createType])

  return (
    <div className="page-wrap">
      <div className={contentsWrapperClassName}>
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
          <Badge value="1" />
          유형 선택
        </div>

        <div className="content-1 content-wrap">
          <div className="flex_ radio-flex">
            <span className="flex_">
              <Radio
                label="파일 업로드"
                name="radio-a"
                id="radio-a-2"
                onclick={() => setCreateType('F')}
                checked={createType === 'F'}
              />
              <Label text="AI 사용" backgroundColor="bg-violet-5" fontColor="txt-violet-1" icon="true" iconColor="#574AFF" />
            </span>
            <span className="flex_">
              <Radio
                label="텍스트 입력"
                name="radio-a"
                id="radio-a-3"
                onclick={() => setCreateType('T')}
                checked={createType === 'T'}
              />
              <Label text="AI 사용" backgroundColor="bg-violet-5" fontColor="txt-violet-1" icon="true" iconColor="#574AFF" />
            </span>
            <span className="flex_">
              <Radio
                label="사용 안함"
                name="radio-a"
                id="radio-a-4"
                onclick={() => setCreateType('N')}
                checked={createType === 'N'}
              />
            </span>
          </div>
          {createType === 'F' && (<UploadFile />)}
        </div>
        {createType === 'N' && (<ManualForm />)}
      </div>
    </div>
  )
}
export default AddResearcher;
