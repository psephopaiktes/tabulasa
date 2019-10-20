import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    extensionName: "Tabulasa",
    mode: "edit",
    memoData: ""
  },

  mutations: {
    updateMemoData(state, newMemoData) {
      state.memoData = newMemoData;
      localStorage.memoData = newMemoData;
    },
    toggleMode(state) {
      switch (state.mode) {
        case "edit":
          state.mode = "preview";
          break;
        // case "sbs":
        //   state.mode = "preview";
        //   break;
        case "preview":
          state.mode = "edit";
          break;
      }
    }
  },

  actions: {}
});
