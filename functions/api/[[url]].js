export async function onRequestGet(context) {
  const url = `https://newsapi.org/v2/${context.params.url.join('/')}`;

  try {
    const modifiedRequest = new Request(url, context.request);
    const response = await fetch(modifiedRequest);
    const data = await response.json();

    return new Response(
      JSON.stringify({
        ...data,
        url: context.params.url,
        context: context,
      }),
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: 'Error fetching the requested URL: ' + url,
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }
}
