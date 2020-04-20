// Config Request Interceptor
import { AxiosRemovePending, CancelToken } from './cancel.config'

// Config Axios
export const axiosConfig = {
  baseURL: 'http://18.180.131.227/v1/api',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10 * 1000,
  cancelToken: CancelToken.source().token,
}

// Config Request Interceptor
export const axiosInterceptorRequestConfig = (config) => {
  // Config Cancel Pending
  config.cancelToken = new CancelToken((canceler) => {
    AxiosRemovePending(config, canceler)
  })

  return config
}

// Config Request Error Interceptor
export const axiosInterceptorRequestError = (error) => Promise.reject(error)
