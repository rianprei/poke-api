/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { type AxiosRequestConfig } from "axios";

const backendApiUrl = "https://pokeapi.co/api/v2";

const instanceAxios = axios.create({
  baseURL: backendApiUrl,
});

export const get = async (url: string, config?: AxiosRequestConfig<any>) => {
  const response = await instanceAxios
    .get(url, config)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });

    return response
};
