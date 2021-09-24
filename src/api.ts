import axios from "axios";

export const ENDPOINTS = {
  NESTJS: "http://localhost:4000",
};

export const api = {
  get: (url: string) => {
    return axios.get(url).then((res) => res.data);
  },
};
