// @ts-check
import { Api } from "../../config/Api";

/**
 * @typedef PlanInfo
 * @type {Object}
 * @property {string} ppnNm - 요금제명
 * @property {number} aiCrtNum - AI 생성 수
 * @property {number} nwlSndNum - 뉴스레터 발송 수
 * @property {number} emailSndNum - 이메일 발송 수
 * @property {number} smsSndNum - SMS 발송 수
 * @property {number} elcrSndNum - 전자계약 발송 수
 * @property {`${string}-${string}-${string}`} useStrAd - 사용 시작 일자
 * @property {`${string}-${string}-${string}`} useEndAd - 사용 종료 일자
 */

/**
 * @returns {import("../common/types").ApiResponse}
 */
export const getMyPlanInfo = () => {
  const response = Api.get(`/viewapi/mngr/site/v1/mypage/ppnInfo`);
  return response;
};

export const getSitePlanInfo = () => {
  const response = Api.get(`/viewapi/mngr/site/v1/main/sitePpnInfo`);
  return response;
};
