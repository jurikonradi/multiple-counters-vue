import Vue from "vue";
import Vuex from "vuex";
import { mutations } from "./mutations";
import { STORAGE_KEY } from "./mutations";
import actions from "./actions";
import plugins from "./plugins";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counterValues: JSON.parse(window.localStorage.getItem(STORAGE_KEY)) || [
      { savedCounter: undefined, previousCounter: undefined },
    ],
  },
  mutations,
  actions,
  plugins,
});

// worked:
// state: {
//   counterValues: [{ savedCounter: null, previousCounter: 0 }],
// },
