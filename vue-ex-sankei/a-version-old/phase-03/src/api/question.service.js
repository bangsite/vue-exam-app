import { ApiService } from './api.service'

const baseUrl = '/questionnaires'

export const QuestionService = {
  getQuestionnaires (params = {}) {
    return ApiService.get(`${ baseUrl }`,{
      ...params,
    }).then(response => {
      const { data } = response.data

      return data
    })
  },

  postQuestionnaires (data) {
    return ApiService.post(`${ baseUrl }`, data).then(response => {
      const { data } = response.data
      return data
    })
  },

  getQuestionDetails (id) {
    return ApiService.get(`${ baseUrl }/${id}`).then(response => {
      const { data } = response.data

      return data
    })
  }
}


