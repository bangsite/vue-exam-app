// Service
import { QuestionService } from '../../api/question.service'

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
   * set item
   * @param state
   * @param item
   * @constructor
   */
  SET_ITEM (state, item) {
    state.item = { ...item }
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
  /**
   * Get questionnaires list
   * @param commit
   * @param dispatch
   * @return
   */
  async getList ({ commit }, params) {
    const data = await QuestionService.getQuestionnaires(params)

    await commit('SET_LIST', data)
  },

  // eslint-disable-next-line no-unused-vars
  async postQuestion ({ commit }, data) {
    await QuestionService.postQuestionnaires(data).then(res => {
      return res
    })
  },

  // eslint-disable-next-line no-unused-vars
  async getDetail ({commit}, id) {
    await QuestionService.getQuestionDetails(id).then((res) => {
      // eslint-disable-next-line no-debugger
      commit('SET_DETAIL', res)

      return res
    })
  },

  //da no nam ben newspaper.store
}

// export module
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

