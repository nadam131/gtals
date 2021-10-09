export const ENDPOINTS = {
  NESTJS: "http://localhost:4000",
};

export const fetcher = async (url: string) => {
  const response = await fetch(url);
  return response.json();
};
