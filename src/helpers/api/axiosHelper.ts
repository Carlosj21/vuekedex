import axios from 'axios'
import type axiosHelperType from '@/helpers/api/axiosHelperType'

export const axiosHelper = ({ method, url, data }: axiosHelperType) => {
  return axios({
    method,
    url,
    data,
  })
}
