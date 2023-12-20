import { Api } from "../../../config/Api";

export const deleteMeeting = ({ tranMtngNo }) => {
  const response = Api.get(
    `/viewapi/mngr/site/v1/delete/tranMtng?tranMtngNo=${tranMtngNo}`
  );

  return response;
};

export const deletePayMent = ({ tranPaymNo }) => {
  const response = Api.get(
    `/viewapi/mngr/site/v1/delete/tranPaym?tranPaymNo=${tranPaymNo}`
  );

  return response;
};

export const deleteRegister = ({ tranRgstNo }) => {
  const response = Api.get(
    `/viewapi/mngr/site/v1/delete/tranRgst?tranRgstNo=${tranRgstNo}`
  );

  return response;
};
