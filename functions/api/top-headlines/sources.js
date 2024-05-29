export default {
  async fetch(request, env) {
    const proxyRequest = new Request(
      `https://newsapi.org/v2/top-headlines/sources?apiKey=${env.VITE_API_KEY}`,
      request
    );
    const proxyResponse = await fetch(proxyRequest);
    return proxyResponse;
  },
};
