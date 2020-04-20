import { ApiService } from './api.service'

const baseUrl = '/statistics'

export const ChartService = {
  getChart () {
    return ApiService.get(`${ baseUrl }`).then(response => {
      const { data } = response.data

      return data
    })
  },

}


