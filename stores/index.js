import { create } from "zustand";
import auth from "./auth";
import modal from "./modal";
import offices from "./offices";
import users from "./users";
const useStore = create()((...state) => ({
  ...auth(...state),
  ...modal(...state),
  ...offices(...state),
  ...users(...state),
}));

export default useStore;
