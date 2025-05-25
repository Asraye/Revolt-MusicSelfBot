# Revolt.js Last.fm Now Playing Self-Bot

A simple self-bot for [Revolt](https://revolt.chat) that fetches your currently playing track from Last.fm and updates your Revolt status every 30 seconds.

If you need help; feel free to join my [Revolt server](https://rvlt.gg/XJBzRjg9)

---

## 🎵 Features

- Fetches currently playing track from the Last.fm API.
- Automatically updates your Revolt status with the track info.
- Updates immediately on startup and then every 30 seconds (configurable).
- Status format: 🎧 Now playing: `Track Name - Artist`.

---

## ⚙️ Setup

### Requirements

- [Node.js](https://nodejs.org/) v22.15.0 or higher  
- Your Revolt user token 
- A [Last.fm](https://www.last.fm) API key (and account)
- Your Last.fm username

### Getting Your Revolt User Token

To get your user token from the browser:

1. Open [Revolt](https://app.revolt.chat) in your browser.
2. Press <kbd>F12</kbd> to open Developer Tools (or right-click → Inspect).
3. Go to the **Console** tab.
4. Paste and run the following code:

    ```js
    window.state.auth.sessions.get(controllers.client.getReadyClient().user._id).session.token
    ```

5. Copy the output string — this is your user token.

⚠️ **Never share this token** 

---

### Installation

1. Clone or download this repository and place the files in a folder.
2. Open a terminal and navigate to that folder.
3. initialize project:
    ```bash
    npm init -y
    ```
4. Install the required dependencies:
    ```bash
    npm install revolt.js node-fetch@2 dotenv
    ```

### Configuration

1. Create a `.env` file in the root directory with the following content:

    ```env
    USER_TOKEN=your_revolt_user_token_here
    LASTFM_API_KEY=your_lastfm_api_key_here
    LASTFM_USERNAME=your_lastfm_username_here
    UPDATE_INTERVAL_MS=30000
    ```

2. Run the bot:

    ```bash
    node index.js
    ```

---

## ▶️ Usage

Once started, the bot will update your Revolt status with the currently playing track from Last.fm.

- Status updates every 30 seconds. (CONFIGURABLE)
- If no track is currently playing, the status remains unchanged.

---

## ⚠️ Important Notes

- This is a **self-bot** and uses your **personal** Revolt user token.
- Never share your token or API key — **keep them secret**.

---

## 📦 Dependencies

- [`revolt.js`](https://github.com/revoltchat/revolt.js)
- [`node-fetch`](https://www.npmjs.com/package/node-fetch)
- [`dotenv`](https://www.npmjs.com/package/dotenv)
