import * as types from "./mutationActionTypes";
export const STORAGE_KEY = "counters-vuejs2";

// for testing
if (navigator.userAgent.indexOf("PhantomJS") > -1) {
  window.localStorage.clear();
}

export const mutations = {
  [types.ADD_FORM](state) {
    state.counterValues = [
      ...state.counterValues,
      { savedCounter: undefined, previousCounter: undefined },
    ];
  },

  [types.UPDATE_COUNTER](state, { counterIndex, value }) {
    state.counterValues[counterIndex].savedCounter = value;
  },

  [types.INCREASE_COUNTER](state, counterIndex) {
    state.counterValues[counterIndex].savedCounter++;
  },

  [types.DECREASE_COUNTER](state, counterIndex) {
    state.counterValues[counterIndex].savedCounter--;
  },

  [types.SAVE_COUNTERS](state) {
    state.counterValues.forEach(
      (counter) => (counter.previousCounter = counter.savedCounter || 0)
    );
  },

  [types.RESTORE_COUNTERS](state) {
    state.counterValues.forEach(
      (counter) => (counter.savedCounter = counter.previousCounter)
    );
  },
};
