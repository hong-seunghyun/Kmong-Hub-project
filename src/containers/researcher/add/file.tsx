import { useState } from "react";
import Upload from "/src/components/upload/upload"
import Link from "next/link";
import Button from "/src/components/buttons/button_primary_l"
import { uploadResearcherAIFile } from "/src/asset/apis/contents/researcher/api";

const UploadFile = () => {
  const [file, setFile] = useState<File>()

  const submit = async () => {
    if (!file) return
    const res = await uploadResearcherAIFile(file)
    if(res.status === 200 || res.status === 201) {
      alert('AI가 연구자 정보를 생성하고 있습니다. 연구자 리스트 페이지로 이동합니다.')
      location.href = '/researcher'
    }
  }

  return (
    <>
      <Upload 
        state={"default"} 
        type={"normal"} 
        setFileState={setFile}
        fileState={file}
      />
      <div className="flex_ btn_flex">
        <Button text="AI 생성" state={!file ? 'disabled' : ''} onClick={submit} />
      </div>
    </>
  )
}

export default UploadFile;
