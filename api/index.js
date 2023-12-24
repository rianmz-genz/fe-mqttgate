import axios, { AxiosHeaders, AxiosInstance } from "axios";
import queryString from "query-string";
import Cookies from "js-cookie";
let baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const APIAxiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 1000 * 60,
});

export const createAuthorizationHeaders = (token) => {
  return { Authorization: `Bearer ${token}` };
};

export async function getAccessToken() {
  try {
    return Cookies.get(btoa(process.env.NEXT_PUBLIC_KEY_TOKEN)) || "";
  } catch (error) {
    return "";
  }
}


const createApi = (axiosInstance) => {
  return {
    get: async (url, params, string) => {
      const token = await getAccessToken();
      const headers = createAuthorizationHeaders(token);
      const response = await axiosInstance.get(url, {
        headers,
        params,
        paramsSerializer: {
          serialize: (params) => {
            return queryString.stringify(params, {
              arrayFormat: "comma",
              encode: false,
            });
          },
        },
      });
      return {
        result: response.data,
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
      };
    },
    post: async (url, data, config = {}) => {
      const token = await getAccessToken();
      const authorization = createAuthorizationHeaders(token);
      const headers = {
        ...authorization,
        ...config?.headers,
      };
      const newConfig = {
        ...config,
        headers,
      };
      const response = await axiosInstance.post(url, data, newConfig);
      return {
        result: response.data,
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
      };
    },
    put: async (url, data) => {
      const token = await getAccessToken();
      const headers = createAuthorizationHeaders(token);
      const response = await axiosInstance.put(url, data, { headers });
      return {
        result: response.data,
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
      };
    },
    delete: async (url, params) => {
      const token = await getAccessToken();
      const headers = createAuthorizationHeaders(token);
      const response = await axiosInstance.delete(url, {
        params,
        headers,
      });
      return {
        result: response.data,
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
      };
    },
    deleteById: async (url, id) => {
      const token = await getAccessToken();
      const headers = createAuthorizationHeaders(token);
      const response = await axiosInstance.delete(url, {
        data: id,
        headers,
      });
      return {
        result: response.data,
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
      };
    },
  };
};

export const api = createApi(APIAxiosInstance);
