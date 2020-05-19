"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var state = {
  title: "Store Vuex",
  url: ["http://google.com", "http://coursetro.com", "http://youtube.com"]
};
var getters = {
  getTitle: function getTitle(state) {
    return state.title;
  },
  getURL: function getURL(state) {
    return state.url;
  },
  countLinks: function countLinks(state) {
    return state.url.length;
  }
}; // const mutation = {};
// const actions = {};

var _default = {
  namespaced: true,
  state: state,
  getters: getters
};
exports["default"] = _default;