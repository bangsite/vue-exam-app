import config from "config";
import { authHeader } from "../helpers";

export const userService = {
  login,
  logout,
  register,
  getAll,
  getById,
  update,
  delete: _delete
};

function login(username, password) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ username, password })
  };

  return fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
    .then(handleResponse)
    .then(user => {
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
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user })
  };

  return fetch(`${config.apiUrl}/user/register`, requestOptions).then(
    handleResponse
  );
}

function getAll() {
  const requestOptions = {
    method: "GET",
    headers: authHeader()
  };
}

function getById(user) {
  const requestOptions = {
    method: "GET",
    headers: authHeader()
  };
  return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(
    handleResponse
  );
}

function _delete(id) {
  const requestOptions = {
    method: "DELETE",
    headers: authHeader()
  };
  return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(
    handleResponse
  );
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        logout();
        location.reload(true);
      }
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}
