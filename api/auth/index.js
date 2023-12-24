import { api } from "..";

const register = async (reqBody) => {
  return await api.post("/auth/register", reqBody);
};

const login = async (reqBody) => {
  return await api.post("/login", reqBody)
};

const getRoles = async () => {
  return await api.get("/roles");
};
const authApi = {
  register,
  getRoles,
  login,
};
export default authApi;
