import { getAccessToken } from "@/api";

const auth = (set) => ({
  auth: {
    isSignedIn: false,
    token: "",
  },
  role: {
    isLoading: false,
    datas: [],
  },
  syncToken: async () => {
    const token = await getAccessToken();
    // console.log(token);
    set((state) => ({
      auth: {
        ...state.auth,
        isSignedIn: token != "",
      },
    }));
  },
});

export default auth;
