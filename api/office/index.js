import { api } from "..";
const URL_OFFICE = "/offices";
const getAll = async () => {
  return await api.get(URL_OFFICE);
};
const create = async (reqBody) => {
  return await api.post(URL_OFFICE, reqBody);
};
const officeApi = {
  getAll,
  create,
};

export default officeApi;
