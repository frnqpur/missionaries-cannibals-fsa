# Screenshot Checklist

Use this checklist to capture portfolio-ready screenshots for **FSA-Based Missionaries and Cannibals Puzzle Game**.

Focus on the **original Pygame app**, **Windows executable**, and **portfolio page**. Do not focus the project presentation on the web game.

## Screenshot standards

- Use clear 16:9 screenshots when possible.
- Keep the Pygame window fully visible.
- Avoid showing unrelated desktop clutter.
- Use consistent naming.
- Prefer PNG format.
- Capture both development run and executable run when possible.
- Make sure screenshots support the story: runnable app, FSA state/action display, rule validation, packaging, and portfolio delivery.

## Required Pygame screenshots

### 1. Start screen

File name:

```text
01_pygame_start_screen.PNG
```

Capture:

- Game window open.
- Background visible.
- Missionaries and cannibals visible.
- Boat visible.
- New game and sound buttons visible.

Purpose:

- Shows the original Pygame desktop application running.

### 2. Initial state

File name:

```text
02_pygame_initial_state.PNG
```

Capture:

- Initial state text visible.
- Expected state: `[3, 3, 1]`.
- Action visible.
- Move counter visible.

Purpose:

- Shows the FSA/state representation in the UI.

### 3. Character selection

File name:

```text
03_pygame_character_selection.PNG
```

Capture:

- Mouse-hover or selected character state.
- One missionary or cannibal highlighted.

Purpose:

- Shows interaction and event-driven gameplay.

### 4. Boat loading

File name:

```text
04_pygame_boat_loading.PNG
```

Capture:

- One or two passengers placed on the boat.
- Action text updated.

Purpose:

- Shows legal action selection before a transition.

### 5. Boat moving

File name:

```text
05_pygame_boat_moving.PNG
```

Capture:

- Boat in motion between river banks.
- Passenger positions moving with the boat.

Purpose:

- Shows animated state transition.

### 6. State/action display

File name:

```text
06_pygame_state_action_display.PNG
```

Capture:

- Updated `State`, `Action`, and move count after a crossing.

Purpose:

- Shows how game state changes after a transition.

### 7. Game-over state

File name:

```text
07_pygame_game_over.PNG
```

Capture:

- Game-over screen displayed after invalid state.

Purpose:

- Shows rule validation when missionaries are outnumbered.

### 8. Winner state

File name:

```text
08_pygame_winner.PNG
```

Capture:

- Winner screen displayed after solving the puzzle.

Purpose:

- Shows the goal state and successful completion.

### 9. Sound toggle

File name:

```text
09_pygame_sound_toggle.PNG
```

Capture:

- Sound icon on/off state.

Purpose:

- Shows UI controls and optional audio handling.

### 10. Reset/new game

File name:

```text
10_pygame_reset_new_game.PNG
```

Capture:

- New game button hover or reset state.

Purpose:

- Shows restart functionality.

## Required executable screenshots

### 1. Executable folder

File name:

```text
01_exe_folder.PNG
```

Capture:

- `dist/MissionariesCannibalsFSA/` folder.
- `MissionariesCannibalsFSA.exe` visible.

Purpose:

- Shows the packaged Windows app output.

### 2. Executable launch

File name:

```text
02_exe_launch.PNG
```

Capture:

- App launched from `.exe`.
- Pygame window visible.

Purpose:

- Shows that users can run the app without launching `python main.py`.

### 3. Executable gameplay

File name:

```text
04_exe_gameplay.PNG
```

Capture:

- Executable version during gameplay.
- State/action text visible.

Purpose:

- Shows packaged version behaves like the original app.

### 4. Executable winner

File name:

```text
05_exe_winner.PNG
```

Capture:

- Winner state in executable mode.

Purpose:

- Shows end-to-end executable functionality.

## Portfolio page screenshots

### 1. Portfolio hero section

Suggested file name:

```text
11_portfolio_hero.PNG
```

Capture:

- Project title.
- Short project summary.
- Demo/download/GitHub buttons.

### 2. Portfolio screenshots section

Suggested file name:

```text
12_portfolio_screenshots.PNG
```

Capture:

- Screenshot gallery on portfolio page.

### 3. Portfolio technical section

Suggested file name:

```text
13_portfolio_technical_section.PNG
```

Capture:

- Tech stack.
- FSA/state transition explanation.
- Features.

## Recommended screenshot folder

```text
demo-assets/screenshots/
```

## Final screenshot review checklist

- [ ] Screenshots show Pygame original, not primarily web game.
- [ ] At least one screenshot shows state/action text.
- [ ] At least one screenshot shows game-over validation.
- [ ] At least one screenshot shows winner state.
- [ ] At least one screenshot proves executable output exists.
- [ ] Portfolio page screenshots include demo/download/GitHub call-to-action.
- [ ] File names are consistent and easy to reference from README and portfolio page.
- [ ] No sensitive local paths, credentials, emails, or hosting details are visible.
