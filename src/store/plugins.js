// Credits: borrowed code from vuex examples (Todos)

import { STORAGE_KEY } from "./mutationActionTypes";

const localStoragePlugin = (store) => {
  store.subscribe((mutation, { counterValues }) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(counterValues));
  });
};

export default [localStoragePlugin];
