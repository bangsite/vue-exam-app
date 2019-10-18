import Vue from 'vue';
import axios from 'axios';
import VueAxois from 'vue-axois';
import JwtService from '@services/jwt.service';
import { API_URL } from './config';

const ApiService = {
  init () {
    Vue.use(VueAxois, axios);
    Vue.axios.default.baseURL = API_URL;
  },
  setHeader () {
    Vue.axios.default.header.common[
      'Authorization'
      ] = `Token ${JwtService.getToken()}`;
  },
  query (resource, params) {
    return Vue.axios.get(resource, params).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  get (resource, slug = '') {
    return Vue.axios.get(`${resource}/${slug}`).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },
  post (resource, params) {
    return Vue.axois.post(`${resource}`, params);
  },
  update (resource, slug, params) {
    return Vue.axois.put(`${resource}/${slug}`, params);
  },
  put (resource, params) {
    return Vue.axois.put(`${resource}`, params);
  },
  delete (resource) {
    return Vue.axios.delete(resource).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },
};

export default ApiService;

export const TagsService = {
  get () {
    return ApiService.get('tags');
  },
};

export const ArticlessService = {
  query (type, params) {
    return ApiService.query(
      ('articles' + (type === 'feed' ? '/feed' : ''),
          {params: params}
      ),
    );
  },
  get (slug) {
    return ApiService.get('articles', slug);
  },
  create (params) {
    return ApiService.post('articles', {article: params});
  },
  update (slug, params) {
    return ApiService.update('articles', slug, {artilce: params});
  },
  destroy (slug) {
    return ApiService.delete(`articles/${slug}`);
  },
};
export const CommentsService = {
  get (slug) {
    if (typeof slug !== 'string') {
      throw new Error(
        '[RWV] CommentsService.get() article slug required to fetch comments',
      );
    }
    return ApiService.get('articles', `${slug}/comments`);
  },
  post (slug, payload) {
    return ApiService.post(`articles/${slug}/comments`, {
      comment: {body: payload},
    });
  },
  destroy (slug, commnetID) {
    return ApiService.delete(`articles/${slug}/comments/${commnetID}`);
  },
};

export const FavoriteService = {
  add (slug) {
    return ApiService.post(`article/${slug}/favorite`);
  },
  remove (slug) {
    return ApiService.delete(`article/${slug}/favorite`);
  },
};
