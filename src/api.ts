export const ENDPOINTS = {
  NESTJS:
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_NEST_URL_PROD
      : process.env.NEXT_PUBLIC_NEST_URL_DEV,
};

export const fetcher = async (url: string) => {
  const response = await fetch(url);
  return response.json();
};
