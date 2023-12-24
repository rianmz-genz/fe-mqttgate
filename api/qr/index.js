import { api } from "..";

const scan = async (reqBody) => {
  return await api.post("/scan-qr", reqBody)
};
const qrApi = {
scan 
}

export default qrApi