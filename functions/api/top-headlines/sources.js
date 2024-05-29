export async function onRequestGet(context) {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines/sources?apiKey=${context.env.VITE_API_KEY}`
    );
    const data = await response.json();

    return new Response(JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({error: 'Error fetching the requested URL'}), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
}
