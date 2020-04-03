import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    extensionName: "Tabulasa",
    mode: "edit",
    memoData: "",
    focus: false,
    chromeSync: {
      theme: "system",
      font:
        'RictyDiminishedDiscord, "Ricty Diminished", Ricty, Menlo, monospace',
      backgroundType: "none",
      backgroundColor: "#cccccc",
      backgroundUrl:
        "https://source.unsplash.com/daily?cat&orientation=landscape",
      clockType: "none",
      clockColor: "#ffffff",
      gitHubToken: ""
    }
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
    },
    changeFocus(state, boolean) {
      state.focus = boolean;
    },
    getOptions(state, options) {
      Object.assign(state.chromeSync, options);
    },
    setOptions(state, payload) {
      state.chromeSync[payload.key] = payload.val;
      chrome.storage.sync.set({ [payload.key]: payload.val });
    }
  },

  actions: {}
});
