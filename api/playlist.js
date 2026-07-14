// Vercel serverless function: proxies YouTube Data API playlistItems requests.
// The API key lives ONLY here (server-side, via env var) and is never sent to the browser.
import { PLAYLISTS } from "../src/constants.js";

// Only playlists that belong to this course may be requested, so the endpoint
// can't be abused as an open YouTube proxy that drains our quota.
const ALLOWED_PLAYLIST_IDS = new Set(PLAYLISTS.map((p) => p.id));

export default async function handler(req, res) {
  const { playlistId } = req.query;

  if (!playlistId || !ALLOWED_PLAYLIST_IDS.has(playlistId)) {
    res.status(400).json({ error: "Unknown or missing playlistId" });
    return;
  }

  const apiKey = process.env.YOUTUBE_API_KEY;
  if (!apiKey) {
    console.error("YOUTUBE_API_KEY is not configured");
    res.status(500).json({ error: "Server misconfiguration" });
    return;
  }

  const url = new URL("https://www.googleapis.com/youtube/v3/playlistItems");
  url.searchParams.set("part", "snippet");
  url.searchParams.set("playlistId", playlistId);
  url.searchParams.set("maxResults", "50");
  url.searchParams.set("key", apiKey);

  try {
    const ytResponse = await fetch(url);
    const data = await ytResponse.json();

    if (!ytResponse.ok) {
      console.error("YouTube API error", ytResponse.status, data?.error);
      res.status(502).json({ error: "Failed to fetch playlist" });
      return;
    }

    // Cache at the Vercel edge: serve for 1h, revalidate in background for a day.
    // Playlists rarely change, so this slashes quota usage and speeds up the site.
    res.setHeader(
      "Cache-Control",
      "public, s-maxage=3600, stale-while-revalidate=86400"
    );
    res.status(200).json({ items: data.items ?? [] });
  } catch (error) {
    console.error("Error proxying YouTube request", error);
    res.status(502).json({ error: "Failed to fetch playlist" });
  }
}
