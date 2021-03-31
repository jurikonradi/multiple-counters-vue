export const STORAGE_KEY = "counters-vuejs";

// for testing
if (navigator.userAgent.indexOf("PhantomJS") > -1) {
  window.localStorage.clear();
}

export const mutations = {
  addForm(state) {
    state.counterValues = [
      ...state.counterValues,
      { savedCounter: undefined, previousCounter: undefined },
    ];
  },

  increaseCounter(state, counterIndex) {
    state.counterValues[counterIndex].savedCounter++;
  },

  decreaseCounter(state, counterIndex) {
    state.counterValues[counterIndex].savedCounter--;
  },

  saveCounters(state) {
    state.counterValues.forEach(
      (counter) => (counter.previousCounter = counter.savedCounter || 0)
    );
  },

  restoreCounters(state) {
    state.counterValues.forEach(
      (counter) => (counter.savedCounter = counter.previousCounter)
    );
  },

  updateCounter(state, { counterIndex, value }) {
    state.counterValues[counterIndex].savedCounter = value;
  },
};
