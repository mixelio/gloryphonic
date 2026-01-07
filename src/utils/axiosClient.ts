import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios';
const BASE_URL = 'https://api.gloryphonic.net/api/';
type RequestMethod = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';

const axiosClient = axios.create({ baseURL: BASE_URL });

const request = async <T>(
  url: string,
  method: RequestMethod = 'GET',
  data: unknown = null,
  token: string | null = null
): Promise<T> => {
  try {
    const config: AxiosRequestConfig = {
      method,
      url,
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    };

    if (method === 'GET' && data) {
      config.params = data;
    } else if (method !== 'DELETE' && data) {
      config.data = data;
    }

    const response: AxiosResponse<T> = await axiosClient.request(config);

    return response.data;
  } catch (e) {
    console.error(`Error in request: ${e}`);
    throw e;
  }
};

export const client = {
  get: <T>(url: string, data: unknown = null, token: string | null = null) =>
    request<T>(url, 'GET', data, token),
  post: <T>(url: string, data: unknown, token: string | null = null) =>
    request<T>(url, 'POST', data, token),
  patch: <T>(url: string, data: unknown, token: string | null = null) =>
    request<T>(url, 'PATCH', data, token),
  put: <T>(url: string, data: unknown, token: string | null = null) =>
    request<T>(url, 'PUT', data, token),
  delete: (url: string, token: string | null = null) => request(url, 'DELETE', null, token),
};
