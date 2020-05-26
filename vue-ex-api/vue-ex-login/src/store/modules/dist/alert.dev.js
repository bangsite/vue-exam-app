"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.alert = void 0;
var state = {
  type: null,
  message: null
};
var action = {
  success: function success(_ref, message) {
    var commit = _ref.commit;
    commit("success", message);
  },
  error: function error(_ref2, message) {
    var commit = _ref2.commit;
    commit("error", message);
  },
  clear: function clear(_ref3, message) {
    var commit = _ref3.commit;
    commit("success", message);
  }
};
var mutations = {
  success: function success(state, message) {
    state.type = "alert-success";
    state.message = message;
  },
  error: function error(state, message) {
    state.type = "alert-danger";
    state.message = message;
  },
  clear: function clear(state) {
    state.type = null;
    state.message = null;
  }
};
var alert = {
  namespaced: true,
  state: state,
  actions: actions,
  mutations: mutations
};
exports.alert = alert;