import axios from 'axios';
import type { AxiosOptions } from '@/type/AxiosOptions';

const options = (url: string) => {
  return { baseUrl: url, token: '' }
}

const getAxiosInstance = (options : AxiosOptions) =>{
  return axios.create({
    baseURL: options.baseUrl,
    headers: {
      Authorization: options.token ? `Bearer ${options.token}` : ''
    }
  })
}

const api = getAxiosInstance(options(import.meta.env.VITE_API_ENDPOINT));
const userApi = getAxiosInstance(options(import.meta.env.VITE_DUMMY_ENDPOINT));

export default{
  api,
  userApi
}

