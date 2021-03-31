import Vue from "vue";
import Vuex from "vuex";
import { mutations } from "./mutations";
import { STORAGE_KEY } from "./mutationActionTypes";
import actions from "./actions";
import plugins from "./plugins";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counterValues: JSON.parse(window.localStorage.getItem(STORAGE_KEY)) || [
      { savedCounter: null, previousCounter: null },
    ],
  },
  mutations,
  actions,
  plugins,
});

// state w/o localStorage:
// state: {
//   counterValues: [{ savedCounter: null, previousCounter: null }],
// },

// state with localStorage: {
// state: {
//   counterValues: JSON.parse(window.localStorage.getItem(STORAGE_KEY)) || [
//     { savedCounter: null, previousCounter: null },
//   ],
// },
