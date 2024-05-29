import type {AxiosRequestHeaders, AxiosResponse, InternalAxiosRequestConfig} from 'axios';
import axios from 'axios';

import {API_KEY, HOST_API, NEWS_API} from '@/config';

const axiosInstance = axios.create({
  baseURL: HOST_API,
});

axiosInstance.interceptors.request.use((request: InternalAxiosRequestConfig) => {
  if (request.headers) {
    request.headers.Authorization = API_KEY;
  } else {
    request.headers = {
      Authorization: API_KEY,
    } as AxiosRequestHeaders;
  }

  // Convert to using cloudflare pages
  request.params = {
    url: `${NEWS_API}/${request.url}`,
  };
  request.url = '';

  return request;
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error) => {
    return Promise.reject({
      ...error,
      message: error.response?.data?.message || 'Something went wrong',
      statusCode: error.response?.status,
    });
  }
);

export default axiosInstance;
