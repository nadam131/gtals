export const ENDPOINTS = {
  NESTJS: "http://localhost:4000",
};

export const fetcher = async (...args: any) => {
  const response = await fetch(...args);
  return response.json();
};
