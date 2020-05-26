"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.account = void 0;

var _services = require("../../services");

var _helpers = require("../../helpers");

var user = JSON.parse(localStorage.getItem("user"));
var state = user ? {
  status: {
    loggedIn: true
  },
  user: user
} : {
  status: {},
  user: null
};
var actions = {
  login: function login(_ref, _ref2) {
    var dispatch = _ref.dispatch,
        commit = _ref.commit;
    var username = _ref2.username,
        password = _ref2.password;
    commit("loginRequest", {
      username: username
    });

    _services.userService.login(username, password).then(function (user) {
      commit("loginSuccess", user);

      _helpers.router.push("/");
    }, function (err) {
      commit("loginFailure", error);
      dispatch("alert/error", error, {
        root: true
      });
    });
  },
  logout: function logout(_ref3) {
    var commit = _ref3.commit;

    _services.userService.logout();

    commit("logout");
  },
  register: function register(_ref4, user) {
    var dispatch = _ref4.dispatch,
        commit = _ref4.commit;
    commit("registerRequest", user);

    _services.userService.register(user).then(function (user) {
      commit("registerSuccess", user);
      setTimeout(function () {
        // show message success after redirect page
        dispatch("alert/success", "Registration successful", {
          root: true
        });
      }, function (error) {
        commit("registerFailure", error, {
          root: true
        });
      });
    });
  }
};
var mutations = {
  loginRequest: function loginRequest(state, user) {
    state.status = {
      loggingIn: true
    };
    state.user = user;
  },
  loginSuccess: function loginSuccess(state, user) {
    state.status = {
      loggingIn: true
    };
    state.user = user;
  },
  loginFailure: function loginFailure(state) {
    state.status = {};
    state.user = null;
  },
  logout: function logout(state) {
    state.status = {};
    state.user = null;
  },
  registerRequest: function registerRequest(state, user) {
    state.status = {
      registering: true
    };
  },
  registerSuccess: function registerSuccess(state, user) {
    state.status = {};
  },
  registerFailure: function registerFailure(state, error) {
    state.status = {};
  }
};
var account = {
  namespaced: true,
  state: state,
  actions: actions,
  mutations: mutations
};
exports.account = account;