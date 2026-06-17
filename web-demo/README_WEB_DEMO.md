# Web Demo — FSA-Based Missionaries and Cannibals Puzzle Game

This folder contains a static, browser-based interactive demo for the **FSA-Based Missionaries and Cannibals Puzzle Game**.

The demo is designed for portfolio and recruiter review. It visualizes the Missionaries and Cannibals puzzle using a clear state representation:

```text
[M_left, C_left, Boat]
```

Where:

- `M_left` = number of missionaries on the left bank
- `C_left` = number of cannibals on the left bank
- `Boat` = `1` when the boat is on the left bank, `0` when the boat is on the right bank

Initial state:

```text
[3, 3, 1]
```

Goal state:

```text
[0, 0, 0]
```

## Features

- Visual left bank, river, right bank, and boat
- Clickable missionaries and cannibals
- Boat capacity validation: 1 or 2 passengers
- State panel showing current state, boat position, selected passengers, move count, game status, and last action
- Transition log with previous state, action, new state, and status
- Built-in valid solution reference
- English and Bahasa Indonesia language toggle
- Optional sound toggle
- No backend, no build step, no npm, and no framework

## File Structure

```text
web-demo/
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── images/
│   │   ├── boat.png
│   │   ├── missionary.png
│   │   └── cannibal.png
│   └── music/
│       ├── bgmusic.mp3
│       ├── won.wav
│       └── gameover.wav
└── README_WEB_DEMO.md
```

The demo uses original assets when available. If an image fails to load, the UI falls back to emoji icons:

- Missionary: 🧑‍🏫
- Cannibal: 🧟
- Boat: 🚤

Audio is optional. If audio files fail to load or the browser blocks playback, the game still works.

## Run Locally

### Option 1 — Open directly

Open this file in a browser:

```text
web-demo/index.html
```

This works because the demo is a static HTML/CSS/JS app.

### Option 2 — Use VS Code Live Server

1. Open the project folder in VS Code.
2. Install the **Live Server** extension if needed.
3. Right-click `web-demo/index.html`.
4. Select **Open with Live Server**.

## Upload to cPanel Subdomain

Target subdomain:

```text
https://missionaries-cannibals-fsa.frengkipurba.com
```

Recommended upload steps:

1. Open cPanel File Manager.
2. Go to the document root for the subdomain.
3. Upload the contents of the `web-demo/` folder, not the folder itself.
4. Make sure these files exist in the subdomain root:

```text
index.html
style.css
script.js
assets/images/
assets/music/
```

5. Open the subdomain URL in a browser.
6. Test game interactions and check browser console for missing asset paths.

## Browser Support

Tested design target:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari
- Mobile browsers on Android and iOS

The demo uses standard HTML, CSS, and Vanilla JavaScript only.

## Known Limitations

- This is a portfolio-friendly web recreation, not the original Pygame runtime.
- The game uses simplified browser visuals for clarity and responsiveness.
- Audio playback requires user interaction because modern browsers block autoplay.
- The solution panel shows one valid path, not every possible solution.
- The current demo focuses on manual interaction and FSA explanation, not automated BFS/DFS solving.

## Testing Checklist

```text
[ ] Page loads without JavaScript error
[ ] Left bank, river, right bank, boat, missionaries, and cannibals appear
[ ] Character can board the boat by clicking
[ ] Boat cannot carry more than 2 passengers
[ ] Boat cannot move with 0 passengers
[ ] Boat moves left/right correctly
[ ] State panel updates after each move
[ ] Transition log records each boat movement
[ ] Invalid/game over state is handled
[ ] Winner state appears at [0, 0, 0]
[ ] Reset Game restores [3, 3, 1]
[ ] Show Solution opens and closes correctly
[ ] View State Log opens and closes correctly
[ ] Language toggle switches EN/ID labels
[ ] Sound ON/OFF works or fails safely without breaking the game
[ ] Page remains usable on mobile screen width
```
