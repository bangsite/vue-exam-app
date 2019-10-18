import ApiService from '@/services/api.service';
import JwtService from '../services/jwt.service.js';
import { LOGIN, LOGOUT, CHECK_AUTH } from './actions.type.js';
import {SET_AUTH,SET_ERROR,PURGE_AUTH} from './mutations.type';

const state = {
  error: null,
  user: {},
  isAuthenticated: !!JwtService.getToken(),
};
const getters = {
  currentUser (state) {
    return state.user;
  },
  isAuthenticated (statee) {
    return state.isAuthenticated;
  },
};

const actions = {
  [LOGOUT] (context, crendentials) {
    return new Promise(resolve => {
      ApiService.post('users/login', {user: crendentials}).then(({data}) => {
        context.commit(SET_AUTH, data.user);
        resolve(data);
      }).catch(({response})=>{
        context.commit(SET_ERROR,response.data.errors);
      })
    });
  },
  [LOGOUT](content){
    context.commit(PURGE_AUTH);
  }
};
