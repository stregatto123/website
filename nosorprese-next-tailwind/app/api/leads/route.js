export async function POST(request) {
  try {
    const data = await request.json();
    // TODO: salva su DB / invia email
    console.log("Lead ricevuto:", data);
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ ok: false }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}
