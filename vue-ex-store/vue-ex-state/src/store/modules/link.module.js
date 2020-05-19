const state = {
  title: "Store Vuex",
  url: ["http://google.com", "http://coursetro.com", "http://youtube.com"],
};

const getters = {
  getTitle(state) {
    return state.title;
  },
  getURL(state) {
    return state.url;
  },
  countLinks(state) {
    return state.url.length;
  },
};

// const mutation = {};

// const actions = {};

export default {
  namespaced: true,
  state,
  getters,
};
