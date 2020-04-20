// Service

import { NewsPaperService } from '../../api/newspaper.service'

// State
const state = {
  list: [],
  item: {},
  detail: {}
}

// Getter
const getters = {
  list: state => state.list,
  item: state => state.item,
  detail: state => state.detail,
}

// Mutation
const mutations = {
  /**
   * set list
   * @param state
   * @param list
   * @constructor
   */
  SET_LIST (state, list) {
    state.list = [...list]
  },

  /**
   * set detail
   * @param state
   * @param payload
   * @constructor
   */
  SET_DETAIL (state, payload) {
    state.detail = { ...payload }
  },
}

// Action
const actions = {
  /*
   * Get newspaper list
   * @param commit
   */
  async getList ({ commit }, params) {
    const data = await NewsPaperService.getNewspaper(params)
    await commit('SET_LIST', data)
  },
  // eslint-disable-next-line no-unused-vars
  async postNews ({ commit }, data) {
    await NewsPaperService.postNewspaper(data).then(res => {
      return res
    })
  },

  // eslint-disable-next-line no-unused-vars
  async getDetail ({commit}, id) {
    await NewsPaperService.getNewspaperDetails(id).then((res) => {
      // eslint-disable-next-line no-debugger
      commit('SET_DETAIL', res)

      return res
    })
  },
}

// export module
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

