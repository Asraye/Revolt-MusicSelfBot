require("dotenv").config();
const { Client } = require("revolt.js");
const fetch = require("node-fetch");

const client = new Client();
const UPDATE_INTERVAL_MS = Number(process.env.UPDATE_INTERVAL_MS) 

client.once("ready", async () => {
  console.log(`✅ Logged in as ${client.user.username}`);
  await updateStatus(); 
  updateStatusLoop();
});

async function getNowPlaying(username) {
  const apiKey = process.env.LASTFM_API_KEY;
  const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json&limit=1`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    const track = data.recenttracks.track?.[0];

    if (!track || track["@attr"]?.nowplaying !== "true") return null;

    const song = `${track.name} - ${track.artist["#text"]}`;
    return `🎧 : ${song}`;
  } catch (err) {
    console.error("❌ Failed to fetch Last.fm data:", err);
    return null;
  }
}

let lastStatus = "";

async function updateStatus() {
  const username = process.env.LASTFM_USERNAME;
  const statusText = await getNowPlaying(username);
  if (!statusText || statusText === lastStatus) return;

  try {
    await client.api.patch("/users/@me", {
      status: {
        text: statusText,
        presence: "Online",
      },
    });
    console.log("✅ Status updated:", statusText);
    lastStatus = statusText;
  } catch (err) {
    console.error("❌ Failed to update status:", err);
  }
}

function updateStatusLoop() {
  setInterval(updateStatus, UPDATE_INTERVAL_MS);
}

client.loginBot({ token: process.env.USER_TOKEN });
