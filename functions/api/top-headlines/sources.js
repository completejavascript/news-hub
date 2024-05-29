import {NEWS_API} from '../../constants';

export default {
  async fetch(request, env) {
    const proxyRequest = new Request(
      `${NEWS_API}/top-headlines/sources?apiKey=${env.VITE_API_KEY}`,
      request
    );
    const proxyResponse = await fetch(proxyRequest);
    return proxyResponse;
  },
};
