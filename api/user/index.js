import { api } from "..";
const URL_USER = "/users/";
const profile = async () => {
  return await api.get(URL_USER + "profile");
};
const activity = async (officeId) => {
  return await api.get(`offices/${officeId}/entry-activities`);
};
const userApi = {
  profile,
  activity,
};

export default userApi;
