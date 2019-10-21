import ApiService from '../services/api.service.js'
import JwtService from '../services/jwt.service.js'
import {LOGIN, LOGOUT, REGISTER, CHECK_AUTH} from './actions.type.js'

import {SET_AUTH, SET_ERROR, PURGE_AUTH} from './mutations.type'

const state = {
  error: null,
  user: {},
  isAuthenticated: !!JwtService.getToken()
};
const getters = {
  currentUser(state) {
    return state.user
  },
  isAuthenticated(statee) {
    return state.isAuthenticated
  }
};

const actions = {
  [LOGIN](context, crendentials) {
    return new Promise(resolve => {
      ApiService.post('users/login', {user: crendentials}).then(({data}) => {
        context.commit(SET_AUTH, data.user);
        resolve(data)
      }).catch(({response}) => {
        context.commit(SET_ERROR, response.data.errors)
      })
    })
  },
  [LOGOUT](context) {
    context.commit(PURGE_AUTH);
  },
  [REGISTER](context, crendentials) {
    return new Promise((resolve, reject) => {
      ApiService.post("users", {user: crendentials}).then(({data}) => {
        context.commit(SET_AUTH, data.user);
        resolve(data);
      }).catch(({response}) => {
        context.commit(SET_ERROR, response.data.errors);
        reject(response);
      })
    })
  },
  [CHECK_AUTH](context) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      ApiService.get("user").then(({data}) => {
        context.commit(SET_AUTH, data.user);
      }).catch(({response}) => {
        context.commit(SET_ERROR, response.data.error);
      });
    } else {
      context.commit(PURGE_AUTH);
    }
  }
};

const mutations = {
  [SET_ERROR](state, error) {
    state.error = error;
  },
  [SET_AUTH](state, user) {
    state.isAuthenticated = true;
    state.user = user;
    state.error = {};
    JwtService.saveToken(state.user.token);
  },
  [PURGE_AUTH](state) {
    state.isAuthenticated = false;
    state.user = {};
    state.errors = {};
    JwtService.destroyToken();
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};

