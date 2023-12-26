import { api } from "..";

const login = async (reqBody) => {
  return await api.post("/login", reqBody);
};
const logout = async () => {
  return await api.post("/auth/logout", {});
};

const authApi = {
  login,
  logout,
};
export default authApi;
