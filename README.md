# FSA-Based Missionaries and Cannibals Puzzle Game

An interactive **Python/Pygame desktop puzzle game** that visualizes the classic Missionaries and Cannibals problem using **Finite State Automata (FSA)** concepts, state transitions, and rule validation.

The main focus of this repository is the **original runnable Pygame application** and the **Windows executable release**. A web demo folder may exist for reference, but the primary project is not positioned as a browser-first web game.

## Overview

The Missionaries and Cannibals puzzle requires three missionaries and three cannibals to cross a river using a boat with limited capacity. The rule is that missionaries must never be outnumbered by cannibals on either river bank when missionaries are present.

This project turns the puzzle into an interactive visual game where users can:

- Select missionaries or cannibals.
- Load passengers onto the boat.
- Move the boat across the river.
- See the current state and action values.
- Trigger game-over when rules are violated.
- Win when all characters safely reach the right bank.

## Demo video

Demo video path:

```text
demo-assets/video/missionaries-cannibals-fsa-demo.mp4
```

Portfolio page:

```text
https://frengkipurba.com/projects/missionaries-cannibals-fsa
```

## Download Windows app

Recommended release file:

```text
release/MissionariesCannibalsFSA-Windows.zip
```

GitHub repository:

```text
https://github.com/frnqpur/missionaries-cannibals-fsa
```

Note: Windows may show a SmartScreen warning because this is an unsigned portfolio executable. Download only from the official GitHub Release or portfolio link.

## Screenshots

Recommended screenshot folder:

```text
demo-assets/screenshots/
```

Suggested screenshots:

```text
01_pygame_start_screen.PNG
02_pygame_initial_state.PNG
03_pygame_character_selection.PNG
04_pygame_boat_loading.PNG
05_pygame_boat_moving.PNG
06_pygame_state_action_display.PNG
07_pygame_game_over.PNG
08_pygame_winner.PNG
09_pygame_sound_toggle.PNG
10_pygame_reset_new_game.PNG
01_exe_folder.PNG
02_exe_launch.PNG
04_exe_gameplay.PNG
05_exe_winner.PNG
```

## Features

- Interactive Missionaries and Cannibals gameplay.
- Original Pygame desktop application.
- State and action display in the game window.
- Mouse-based passenger selection.
- Boat movement animation.
- Game-over validation for unsafe states.
- Winner detection for solved puzzle.
- Move counter.
- New game/reset button.
- Sound toggle and safe audio fallback.
- Asset loading support for both local development and PyInstaller runtime.
- Windows executable build using PyInstaller.

## Tech stack

- **Python**
- **Pygame**
- **Finite State Automata concept**
- **PyInstaller**
- **Markdown documentation**

## Repository structure

```text
missionaries-cannibals-fsa/
├── original-pygame/
│   ├── main.py
│   ├── Person.py
│   ├── Boat.py
│   ├── images/
│   ├── music/
│   ├── requirements.txt
│   └── build_exe.ps1
├── demo-assets/
│   ├── screenshots/
│   └── video/
├── portfolio-page-template/
├── portfolio-kit/
│   └── 13_missionaries-cannibals-fsa_portfolio-kit/
├── release/
│   └── MissionariesCannibalsFSA-Windows.zip
├── web-demo/
├── README.md
└── LICENSE
```

Do not commit or upload large generated folders unless intentionally needed:

```text
original-pygame/venv/
original-pygame/build/
original-pygame/dist/
original-pygame/dist/MissionariesCannibalsFSA/_internal/
```

For distribution, prefer uploading the final ZIP to **GitHub Releases** instead of committing large build output directly to the repository.

## Local setup

Open PowerShell:

```powershell
cd E:\laragon\www\missionaries-cannibals-fsa\original-pygame
python -m venv venv
.\venv\Scripts\Activate.ps1
python -m pip install --upgrade pip
pip install -r requirements.txt
python main.py
```

Recommended Python version:

```text
Python 3.11 or Python 3.12
```

Python 3.13 may require troubleshooting depending on Pygame and PyInstaller compatibility.

## Original Pygame app

The original app is located in:

```text
original-pygame/
```

Main entry point:

```text
original-pygame/main.py
```

Run:

```powershell
python main.py
```

The game uses Pygame to render the background, characters, boat, state text, action text, move counter, game-over screen, winner screen, and buttons.

## Build executable

Use the included PowerShell script:

```powershell
cd E:\laragon\www\missionaries-cannibals-fsa\original-pygame
.\build_exe.ps1
```

If script execution is blocked:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
.\build_exe.ps1
```

Manual PyInstaller command:

```powershell
pyinstaller --noconfirm --windowed --name MissionariesCannibalsFSA --add-data "images;images" --add-data "music;music" main.py
```

Expected output:

```text
original-pygame/dist/MissionariesCannibalsFSA/MissionariesCannibalsFSA.exe
```

Create release ZIP:

```powershell
Compress-Archive -Path "E:\laragon\www\missionaries-cannibals-fsa\original-pygame\dist\MissionariesCannibalsFSA" -DestinationPath "E:\laragon\www\missionaries-cannibals-fsa\release\MissionariesCannibalsFSA-Windows.zip" -Force
```

## State representation

The game state is represented as:

```text
state = [M_left, C_left, Boat]
```

Where:

- `M_left` = missionaries on the left bank.
- `C_left` = cannibals on the left bank.
- `Boat = 1` = boat is on the left bank.
- `Boat = 0` = boat is on the right bank.

The selected action is represented as:

```text
action = [missionaries_on_boat, cannibals_on_boat]
```

A boat crossing updates the state based on the selected action and direction.

## Legal actions

The boat can carry one or two passengers. Common legal action patterns include:

```text
[1, 0]  # one missionary
[0, 1]  # one cannibal
[1, 1]  # one missionary and one cannibal
[2, 0]  # two missionaries
[0, 2]  # two cannibals
```

The game prevents loading more than two passengers onto the boat.

## Game rules

The main safety rule:

```text
Missionaries cannot be outnumbered by cannibals on either bank when missionaries are present.
```

Game-over condition:

```text
(state[0] < state[1] and state[0] > 0) or (state[0] > state[1] and state[0] < 3)
```

Goal state:

```text
state == [0, 0, 0]
```

The player wins when all missionaries and cannibals reach the right bank safely and the boat has no selected passengers.

## Deployment / portfolio links

- GitHub: https://github.com/frnqpur/missionaries-cannibals-fsa
- Portfolio page: https://frengkipurba.com/projects/missionaries-cannibals-fsa
- Optional landing page: https://missionaries-cannibals-fsa.frengkipurba.com

## Future improvements

- Add BFS/DFS automatic solver visualization.
- Show legal next moves dynamically.
- Add a state graph or transition table.
- Improve UI scaling for different display sizes.
- Add unit tests for state transition logic.
- Add signed Windows releases.
- Improve packaging workflow with CI/CD.

## Author

**Frengki Purba**

- GitHub: https://github.com/frnqpur
- Portfolio: https://frengkipurba.com
