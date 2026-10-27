/* IQRA: English -> Urdu sentence translation on Cloudflare Workers AI (free tier test).
   Model: @cf/meta/m2m100-1.2b. Urdu support is NOT confirmed on Cloudflare's page: run the self-test (GET /selftest) before using it.
   Output is always a DRAFT for a teacher to review. */
const ALLOWED = ["https://iqradigitalschool.com", "https://www.iqradigitalschool.com", "http://localhost:8765"];
const MODEL = "@cf/meta/m2m100-1.2b";

function cors(origin) {
  const ok = ALLOWED.includes(origin);
  return { "Access-Control-Allow-Origin": ok ? origin : ALLOWED[0], "Access-Control-Allow-Methods": "POST, GET, OPTIONS", "Access-Control-Allow-Headers": "Content-Type", "Vary": "Origin" };
}
const json = (o, s, h) => new Response(JSON.stringify(o), { status: s || 200, headers: Object.assign({ "Content-Type": "application/json; charset=utf-8" }, h) });

async function translate(env, text) {
  const r = await env.AI.run(MODEL, { text, source_lang: "en", target_lang: "ur" });
  return String((r && (r.translated_text || r.result || "")) || "").trim();
}

export default {
  async fetch(req, env) {
    const url = new URL(req.url), origin = req.headers.get("Origin") || "", h = cors(origin);
    if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: h });
    if (url.pathname === "/selftest") {
      const tests = ["Count and subtract.", "Answer these questions.", "The cat is sitting under the tree.", "Wash your hands before eating."];
      const out = []; for (const t of tests) { try { out.push({ en: t, ur: await translate(env, t) }); } catch (e) { out.push({ en: t, error: String(e && e.message || e) }); } }
      return json(out, 200, h);
    }
    if (req.method !== "POST") return json({ error: "POST only" }, 405, h);
    if (origin && !ALLOWED.includes(origin)) return json({ error: "origin not allowed" }, 403, h);
    let b; try { b = await req.json(); } catch (e) { return json({ error: "bad json" }, 400, h); }
    const text = String((b && b.text) || "").trim();
    if (text.length < 2 || text.length > 400 || !/[A-Za-z]/.test(text)) return json({ error: "bad text" }, 400, h);
    // cache identical sentences so the free daily allowance is not wasted
    const cache = caches.default, key = new Request("https://iqra-cache.local/t?q=" + encodeURIComponent(text.toLowerCase()));
    const hit = await cache.match(key); if (hit) return new Response(hit.body, { headers: Object.assign({ "Content-Type": "application/json; charset=utf-8", "X-Cache": "HIT" }, h) });
    let ur = ""; try { ur = await translate(env, text); } catch (e) { return json({ error: "translation unavailable" }, 503, h); }
    if (!ur) return json({ error: "empty translation" }, 502, h);
    const res = json({ urdu: ur, status: "draft", source: "cloudflare:" + MODEL }, 200, h);
    const c = res.clone(); const cc = new Response(c.body, { headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "public, max-age=2592000" } });
    await cache.put(key, cc);
    return res;
  }
};
