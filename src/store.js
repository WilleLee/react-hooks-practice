import create from "zustand";

export const useBearStore = create((set) => ({
  bear: 0,
  incrementBear: () =>
    set((state) => {
      if (state.bear < 10) {
        return {
          bear: state.bear + 1,
        };
      } else {
        return {
          bear: state.bear,
        };
      }
    }),
  decrementBear: () =>
    set((state) => {
      if (state.bear > 0) {
        return {
          bear: state.bear - 1,
        };
      } else {
        return {
          bear: state.bear,
        };
      }
    }),
}));
