import { Api } from "../config/Api";

export const getBoardList = ({ search, currentIndex }) => {
  const response = Api.get(
    `/viewapi/mngr/site/v1/board?currentPage=${currentIndex}&limit=10&searchType=title${
      search && `&searchValue=${search}`
    }`
  );
  return response;
};

export const getDetailBoardList = ({ boradIdx }) => {
  const response = Api.get(
    `/viewapi/mngr/site/v1/boardDetail?rpstNo=${boradIdx}`
  );
  return response;
};

export const getDetailBoardInfo = ({
  bbsNo,
  search,
  isTitle,
  currentIndex,
}) => {
  const response = Api.get(
    `/viewapi/mngr/site/v1/boardDtList?bbsNo=${bbsNo}&currentPage=${currentIndex}&limit=10&searchType=${
      isTitle ? "titleNm" : "cntn"
    }&searchValue=${search}`
  );
  return response;
};

export const setBoardInfo = ({ boardName, boradIdx, isDel, isUse }) => {
  const response = Api.post(`viewapi/mngr/site/v1/merge/board`, {
    bbsNm: boardName,
    bbsNo: boradIdx ? boradIdx : null,
    delYn: isDel,
    useYn: isUse,
  });
  return response;
};

export const setDetailBoardInfo = ({
  boardName,
  boardContent,
  boradIdx,
  isDel,
  isNotice,
}) => {
  const response = Api.post(`viewapi/mngr/site/v1/merge/boardDt`, {
    bbsNo: boradIdx,
    cntn: boardContent,
    delYn: isDel,
    ntceYn: isNotice,
    titleNm: boardName,
  });
  return response;
};

export const setEditDetailBoardInfo = ({
  boardName,
  boardContent,
  boradIdx,
  detailBoradIdx,
  isDel,
  isNotice,
}) => {
  const response = Api.post(`viewapi/mngr/site/v1/merge/boardDt`, {
    bbsNo: boradIdx,
    cntn: boardContent,
    delYn: isDel,
    ntceYn: isNotice,
    rpstNo: detailBoradIdx,
    titleNm: boardName,
  });
  return response;
};
