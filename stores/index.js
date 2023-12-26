import { create } from "zustand";
import auth from "./auth";
import modal from "./modal";
import offices from "./offices";
const useStore = create()((...state) => ({
  ...auth(...state),
  ...modal(...state),
  ...offices(...state),
}));

export default useStore;
