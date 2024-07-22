import axios, { AxiosError, type AxiosInstance, type AxiosRequestConfig } from "axios";

//const handleError: HandleError = new HandleError();

function apiConfig(baseUrl: string): AxiosRequestConfig {
  return {
    baseURL: baseUrl,
  };
}

function initAxios(config: AxiosRequestConfig, token?: any): AxiosInstance {
  const defineInstance = axios.create(config);
  defineInstance.interceptors.request.use(
    
    (request:any) => {
      console.log(request)
      request.headers!.Authorization = token??`Bearer ${import.meta.env.VITE_API_TOKEN}`
      return request;
    },
    (error) => Promise.reject(error)
  );

  defineInstance.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
     // handleError.getErrors(error);
      return Promise.reject(error);
    }
  );

  return defineInstance;
}

function api(baseURL: string = "/baseApi", token?: any) {
  return initAxios(apiConfig(baseURL), token);
}

export { api };