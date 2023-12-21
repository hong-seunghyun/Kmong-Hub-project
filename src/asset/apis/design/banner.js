import { Api } from "../../config/Api";

// get(팝업 불러오기)
export const getBanner = (currentPage, limit, searchValue) => {
  const response = Api.get(`/viewapi/mngr/site/v1/bnr`, {
    params: searchValue === '' ? {
      currentPage: currentPage,
      limit: limit,
    } : {
      currentPage: currentPage,
      limit: limit,
      searchValue: searchValue
    },
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('accessToken')}`
    }
  });
  return response;
}

// post(팝업 등록, 수정)
export const createBanner = ({delYn, expsEndDtm, expsStrDtm, bnrNm, bnrPath}, mobImg, pcImg) => {
  const mergePopupDTO = {
    delYn,
    expsEndDtm,
    expsStrDtm,
    bnrNm,
    bnrPath
  };
  const blob = new Blob([JSON.stringify(mergePopupDTO)], {
    type: "application/json"
  });
  console.log(blob);

  const formData = new FormData();
  formData.append('mergePopupDto', blob);
  mobImg && formData.append('mobImg', mobImg);
  pcImg && formData.append('pcImg', pcImg);

  const response = Api.post(`/viewapi/mngr/site/v1/merge/bnr`, formData, {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('accessToken')}`,
      'Content-Type': 'multipart/form-data',
      Accept: "application/json"
    }
  });
  return response;
}

// post(팝업 등록, 수정)
export const editBanner = ({bnrNo, delYn, expsEndDtm, expsStrDtm, bnrNm, bnrPath}, mobImg, pcImg) => {
  const mergePopupDTO = {
    bnrNo,
    delYn,
    expsEndDtm,
    expsStrDtm,
    bnrNm,
    bnrPath
  };
  const blob = new Blob([JSON.stringify(mergePopupDTO)], {
    type: "application/json"
  });
  console.log(blob);

  const formData = new FormData();
  formData.append('mergePopupDto', blob);
  mobImg && formData.append('mobImg', mobImg);
  pcImg && formData.append('pcImg', pcImg);

  const response = Api.post(`/viewapi/mngr/site/v1/merge/bnr`, formData, {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('accessToken')}`,
      'Content-Type': 'multipart/form-data',
      Accept: "application/json"
    }
  });
  return response;
}

// post(팝업 불러오기)
export const getBannerActive = (currentPage, limit, searchType, searchValue) => {
  const response = Api.get(`/viewapi/mngr/site/v1/bnr`, {
    params: searchValue === '' ? {
      currentPage: currentPage,
      limit: limit,
      searchType: searchType,
    } : {
      currentPage: currentPage,
      limit: limit,
      searchType: searchType,
      searchValue: searchValue
    }
  });
  return response;
}

export const getBannerDetails = (bnrNo) => {
  const response = Api.get(`/viewapi/mngr/site/v1/bnrDetail`, {
    params: {
      bnrNo: bnrNo
    },
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('accessToken')}`
    }
  });
  return response;
}