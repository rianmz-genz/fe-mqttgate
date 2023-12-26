import { getAccessToken } from "@/api";
import userApi from "@/api/user";

const auth = (set) => ({
  auth: {
    isSignedIn: false,
    token: "",
    user: {},
  },
  role: {
    isLoading: false,
    datas: [],
  },
  syncToken: async () => {
    const token = await getAccessToken();

    set((state) => ({
      auth: {
        ...state.auth,
        isSignedIn: token != "",
      },
    }));
  },
});

export default auth;
