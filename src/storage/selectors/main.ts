import { DefaultValue, selector } from "recoil";
import mainState from "../atoms/main";
import React from "react";

export const useModal = selector<React.ReactNode>({
  key: "mainSelector",
  get: ({ get }) => get(mainState).modal,
  set: ({ set, get }, newValue) => {
    if (newValue instanceof DefaultValue) return;
    const state = get(mainState);
    set(mainState, {
      ...state,
      modal: newValue,
    });
  },
});
