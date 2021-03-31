export default {
  addForm({ commit }) {
    commit("addForm");
  },
  increaseCounter({ commit }, counterIndex) {
    commit("increaseCounter", counterIndex);
  },
  decreaseCounter({ commit }, counterIndex) {
    commit("decreaseCounter", counterIndex);
  },
  saveCounters({ commit }) {
    commit("saveCounters");
  },
  restoreCounters({ commit }) {
    commit("restoreCounters");
  },
  preventNoNumbers({ commit }, counterIndex) {
    commit("preventNoNumbers", counterIndex);
  },
};
