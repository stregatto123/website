// This API route receives lead submissions and returns a simple response.
export async function POST(request) {
  try {
    const data = await request.json();
    // TODO: persist lead in a database or send notification
    console.log('New lead submission:', data);
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ ok: false }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}