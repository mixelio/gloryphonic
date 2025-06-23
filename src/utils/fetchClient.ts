const BASE_URL = 'http://18.197.239.62:8000/api/';

// To have autocompletion and avoid mistypes
type RequestMethod = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';

async function request<T>(
  url: string,
  method: RequestMethod = 'GET',
  data: unknown = null, // we can send any data to the server
  token: string | null = null
): Promise<T> {
  const options: RequestInit = { method };
  const headers: HeadersInit = {};

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  options.headers = headers;

  if (data) {
    if (data instanceof FormData) {
      // Якщо це FormData (тобто є файл), не потрібно серіалізувати та змінювати Content-Type
      options.body = data;
    } else {
      // for common data
      options.body = JSON.stringify(data);
      options.headers = {
        ...options.headers,
        'Content-Type': 'application/json',
      };
    }
  }

  // Execute the fetch request immediately without delay
  let response = await fetch(BASE_URL + url, options);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

export const client = {
  get: <T>(url: string, token?: string) => request<T>(url, 'GET', null, token),
  post: <T>(url: string, data: unknown, token?: string) => request<T>(url, 'POST', data, token),
  patch: <T>(url: string, data: unknown, token?: string) => request<T>(url, 'PATCH', data, token),
  put: <T>(url: string, data: unknown, token?: string) => request<T>(url, 'PUT', data, token),
  delete: (url: string, token: string) => request(url, 'DELETE', null, token),
};
