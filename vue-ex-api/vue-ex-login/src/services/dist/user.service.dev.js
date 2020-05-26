"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userService = void 0;

var _config = _interopRequireDefault(require("config"));

var _helpers = require("../helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var userService = {
  login: login,
  logout: logout,
  register: register,
  getAll: getAll,
  getById: getById,
  update: update,
  "delete": _delete
};
exports.userService = userService;

function login(username, password) {
  var requestOptions = {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  };
  return fetch("".concat(_config["default"].apiUrl, "/users/authenticate"), requestOptions).then(handleResponse).then(function (user) {
    // login success if have one token jwt in response
    if (user.token) {
      // save data user & token jwt in localStorage keep user login in page
      localStorage.setItem("user", JSON.stringify(user));
    }

    return user;
  });
}

function logout() {
  // delete user from  localStorage -> logout
  localStorage.removeItem("user");
}

function register(user) {
  var requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      user: user
    })
  };
  return fetch("".concat(_config["default"].apiUrl, "/user/register"), requestOptions).then(handleResponse);
}

function getAll() {
  var requestOptions = {
    method: "GET",
    headers: (0, _helpers.authHeader)()
  };
}

function getById(user) {
  var requestOptions = {
    method: "GET",
    headers: (0, _helpers.authHeader)()
  };
  return fetch("".concat(_config["default"].apiUrl, "/users/").concat(id), requestOptions).then(handleResponse);
}

function _delete(id) {
  var requestOptions = {
    method: "DELETE",
    headers: (0, _helpers.authHeader)()
  };
  return fetch("".concat(_config["default"].apiUrl, "/users/").concat(id), requestOptions).then(handleResponse);
}

function handleResponse(response) {
  return response.text().then(function (text) {
    var data = text && JSON.parse(text);

    if (!response.ok) {
      if (response.status === 401) {
        logout();
        location.reload(true);
      }

      var error = data && data.message || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}