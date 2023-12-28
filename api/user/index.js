import { api } from "..";
const URL_USER = "/users/";
const profile = async () => {
  return await api.get(URL_USER + "profile");
};
const activity = async (officeId) => {
  return await api.get(`/offices/${officeId}/entry-activities`);
};
const getAllByOfficeId = async (officeId) => {
  return await api.get(`/users/${officeId}/by-office-id`);
};
const create = async (reqBody) => {
  return await api.post("/register", reqBody);
};
const update = async (id, reqBody) => {
  return await api.put("/users/" + id, reqBody);
};
const remove = async (id) => {
  return await api.delete(`/users/${id}`);
};
const userApi = {
  profile,
  activity,
  getAllByOfficeId,
  create,
  remove,
  update,
};

export default userApi;
