import { create } from "zustand";

type Store = {
  image: string;
  setImage: (img: string) => void;
};

const useStore = create<Store>()((set) => ({
  image: "",
  setImage: (img) => set({ image: img }),
}));

export default useStore;
