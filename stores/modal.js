import { StateCreator } from "zustand";


const modal = (
  set
) => ({
  modalShow: false,
  notifModalContent: {
    message: "",
    type: "done",
    onConfirm: () => {},
    confirmButton: undefined,
  },
  setModalShow: (i) => {
    set(() => ({
      modalShow: i,
    }));
  },
  createNotifModal: (a) => {
    set(() => ({
      notifModalContent: {
        ...a,
      },
      modalShow: true,
    }));
  },
});

export default modal;
