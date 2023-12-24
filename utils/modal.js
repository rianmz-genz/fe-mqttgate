import useStore from "@/stores";

export function ManagementErrorHandling(error) {
  const createNotifModal = useStore.getState().createNotifModal;
  createNotifModal({
    type: "error",
    message: error?.response?.data?.message ?? "Error",
  });
}

export function ManagementSuccessHandling(message) {
  const createNotifModal = useStore.getState().createNotifModal;
  createNotifModal({
    type: "done",
    message,
  });
}
