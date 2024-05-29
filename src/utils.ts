export const getUrl = (url: string) => {
  return import.meta.env.PROD ? encodeURIComponent(url) : url;
};
