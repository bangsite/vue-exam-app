import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
// import JwtService from './jwt.service';
import { API_URL } from './config';

const ApiService = {
  init () {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = API_URL;
    Vue.axios.interceptors.request.use(function (config) {
      config.headers.Accept = 'application/vnd.api+json';
      config.headers['Content-Type'] = 'application/vnd.api+json';
      return config;
    });
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
    return Vue.axios.post(`${resource}`, params);
  },
  update (resource, slug, params) {
    return Vue.axios.put(`${resource}/${slug}`, params);
  },
  put (resource, params) {
    return Vue.axios.put(`${resource}`, params);
  },
  delete (resource) {
    return Vue.axios.delete(resource).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },
};

export default ApiService;

// export const TagsService = {
//   get() {
//     return ApiService.get('tags')
//   }
// };

// export const ArticlessService = {
//   query(type, params) {
//     return ApiService.query(
//       ('articles' + (type === 'feed' ? '/feed' : ''),
//           {params: params}
//       )
//     )
//   },
//   get(slug) {
//     return ApiService.get('articles', slug)
//   },
//   create(params) {
//     return ApiService.post('articles', {article: params})
//   },
//   update(slug, params) {
//     return ApiService.update('articles', slug, {artilce: params})
//   },
//   destroy(slug) {
//     return ApiService.delete(`articles/${slug}`)
//   }
// };
// export const CommentsService = {
//   get(slug) {
//     if (typeof slug !== 'string') {
//       throw new Error(
//         '[RWV] CommentsService.get() article slug required to fetch comments'
//       )
//     }
//     return ApiService.get('articles', `${slug}/comments`)
//   },
//   post(slug, payload) {
//     return ApiService.post(`articles/${slug}/comments`, {
//       comment: {body: payload}
//     })
//   },
//   destroy(slug, commnetID) {
//     return ApiService.delete(`articles/${slug}/comments/${commnetID}`)
//   }
// };

// export const FavoriteService = {
//   add(slug) {
//     return ApiService.post(`article/${slug}/favorite`)
//   },
//   remove(slug) {
//     return ApiService.delete(`article/${slug}/favorite`)
//   }
// };
