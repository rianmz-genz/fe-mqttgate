import { create } from "zustand";
import auth from "./auth";
import modal from "./modal";
const useStore = create()((...state) => ({
  ...auth(...state),
  ...modal(...state),
}));

export default useStore;