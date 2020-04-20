import { ApiService } from './api.service'

const baseUrl = '/news'

export const NewsPaperService = {
  getNewspaper (params) {
    return ApiService.get(`${ baseUrl }`, {
      ...params
    }).then(response => {
      const { data } = response.data

      return data
    })
  },

  postNewspaper (data) {
    return ApiService.post(`${ baseUrl }`, data).then(response => {
      const { data } = response.data
      return data
    })
  },

  getNewspaperDetails (id) {
    return ApiService.get(`${ baseUrl }/${id}`).then(response => {
      const { data } = response.data

      return data
    })
  }
}


