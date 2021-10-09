import { fetcher } from "./../api";
import useSWR from "swr";

export const useFetch = (url: string) => {
  const { data } = useSWR(url, fetcher);
  return { data };
};
