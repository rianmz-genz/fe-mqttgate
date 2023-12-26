import officeApi from "@/api/office";

const offices = (set) => ({
  office: {
    isLoading: false,
    datas: [],
  },
  getOffices: async () => {
    try {
      set((state) => ({
        office: {
          ...state.office,
          isLoading: true,
        },
      }));
      const { result } = await officeApi.getAll();
      console.table(result);
      if (result.status) {
        set((state) => ({
          office: {
            ...state.office,
            datas: result.data,
          },
        }));
      }
    } catch (error) {
    } finally {
      set((state) => ({
        office: {
          ...state.office,
          isLoading: false,
        },
      }));
    }
  },
});

export default offices;
