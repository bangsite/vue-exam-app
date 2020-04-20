// Service
import { ChartService } from '../../api/chart.service'

// State
const state = {
  chartList: {},
}

// Getter
const getters = {
  chartList: state => state.chartList,
}

// Mutation
const mutations = {
  /**
   * set list
   * @param state
   * @param list
   * @constructor
   */
  SET_CHART_LIST (state, payload) {
    state.chartList = {...payload}
  },

}

// Action
const actions = {

  // eslint-disable-next-line no-unused-vars
  async getChartData ({ commit }) {
    return ChartService.getChart().then(res => {
      commit('SET_CHART_LIST', res)
      return res
    })
  }
}

// export module
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

