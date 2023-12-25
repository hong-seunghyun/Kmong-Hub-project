/**
 * 콘텐츠 저장 상태 코드
 */
export const CONTENTS_SAVE_STATUS = {
  T: '임시저장',
  AI: 'AI 생성중',
  AIE: 'AI 생성 완료',
  E: '등록 완료'
} as const

/**
 * 콘텐츠 생성 유형 코드
 */
export const CONTENTS_CREATE_TYPE = {
  F: '파일 업로드',
  T: '텍스트 입력', 
  N: '사용 안함',
  TD: '기술문서 업로드'
} as const
