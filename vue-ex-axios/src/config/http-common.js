import axios from 'axios'

const HTTP = axios.create({
  baseURL: `http://jsonplaceholder.typicode.com/`,
  headers: {
    Authorization: 'Bearer {token}'
  }
})
export {HTTP};
