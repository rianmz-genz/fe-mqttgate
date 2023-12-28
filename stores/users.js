import userApi from "@/api/user";

const user = (set) => ({
  user: {
    isLoading: false,
    datas: [],
  },
  getUsersByOfficeId: async (officeId) => {
    try {
      set((state) => ({
        user: {
          ...state.user,
          isLoading: true,
        },
      }));
      const { result } = await userApi.getAllByOfficeId(officeId);
      console.table(result.data.user);
      if (result.status) {
        set((state) => ({
          user: {
            ...state.user,
            datas: result.data.users,
          },
        }));
      }
    } catch (error) {
    } finally {
      set((state) => ({
        user: {
          ...state.user,
          isLoading: false,
        },
      }));
    }
  },
});

export default user;
