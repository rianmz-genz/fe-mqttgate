import { api } from "..";

const scan = async (reqBody) => {
  return await api.post("/scan-qr", reqBody);
};
const closeGate = async (officeId) => {
  return await api.post("/offices/" + officeId + "/close-gate", {});
};
const qrApi = {
  scan,
  closeGate,
};

export default qrApi;
